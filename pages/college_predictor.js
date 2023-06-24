import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./college_predictor.module.css";
import getConstants from "../constants";

const CollegePredictor = () => {
    const router = useRouter();
    console.log(router.query);
    const { rank, category, roundNumber, gender, exam, stateName } = router.query;
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/" + category + ".json"); // Replace with the path to your category JSON file
                const data = await response.json();

                // Filter the data based on round number
                const dataForGivenQuery = data.filter((item) => {
                    const itemRound = item["Round"];
                    const itemGender = item["Gender"];
                    const itemState = item["State"];
                    const itemExam = item["Exam"];
                    const itemQuota = item["Quota"];
                    const checkForState = (itemState == stateName) || (stateName == "All India") || (itemQuota == "OS") || (itemState == "AI");
                    return itemRound == roundNumber && itemGender == gender && itemExam == exam && checkForState;
                });

                // Filter the data based on closing rank
                const filteredData = dataForGivenQuery.filter(
                    (item) => {
                        const closingRank = parseInt(item["Closing Rank"], 10);
                        return closingRank > parseInt(rank, 10);
                    }
                );

                // Sort the filteredData in ascending order of college rank
                filteredData.sort((a, b) => {
                    const rankA = a["College Rank"];
                    const rankB = b["College Rank"];
                    return rankA - rankB;
                });

                setFilteredData(filteredData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        if (rank) {
            setIsLoading(true);
            fetchData();
        }
    }, [rank]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>{getConstants().TITLE}</h1>
                <h2>Your Category Rank: {rank}</h2>
                <h3>Chosen Round Number: {roundNumber}</h3>
                <h3>Chosen Gender: {gender}</h3>
                <h3>Chosen Exam: {exam}</h3>
                <h3>Chosen State: {stateName}</h3>

                <h3>Predicted colleges and courses for you</h3>
                {isLoading ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div>
                        <div>
                            <p className={styles.paragraph}>AI: All India</p>
                            <p className={styles.paragraph}>HS: Home State </p>
                            <p className={styles.paragraph}>OS: Out of State</p>
                        </div>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.header_row}>
                                    <th>Institute Rank</th>
                                    <th>State</th>
                                    <th>Institute</th>
                                    <th>Academic Program Name</th>
                                    <th>Opening Rank</th>
                                    <th>Closing Rank</th>
                                    <th>Quota</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? styles.even_row
                                                : styles.odd_row
                                        }
                                    >
                                        <td className={styles.cell}>
                                            {item["College Rank"]}
                                        </td>
                                        <td className={styles.cell}>
                                            {item["State"]}
                                        </td>
                                        <td className={styles.cell}>
                                            {item.Institute}
                                        </td>
                                        <td className={styles.cell}>
                                            {item["Academic Program Name"]}
                                        </td>
                                        <td className={styles.cell}>
                                            {item["Opening Rank"]}
                                        </td>
                                        <td className={styles.cell}>
                                            {item["Closing Rank"]}
                                        </td>
                                        <td className={styles.cell}>
                                            {item["Quota"]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegePredictor;
