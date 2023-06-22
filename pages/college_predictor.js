import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./college_predictor.module.css";

const CollegePredictor = () => {
    const router = useRouter();
    console.log(router.query);
    const { rank, category } = router.query;
    console.log(category);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/" + category + ".json"); // Replace with the path to your category JSON file
                const data = await response.json();

                // Filter the data based on closing rank
                const filteredData = data.filter((item) => {
                    const closingRank = parseInt(item["Closing Rank"], 10);
                    return closingRank > parseInt(rank, 10);
                });

                setFilteredData(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (rank) {
            fetchData();
        }
    }, [rank]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>College Predictor</h1>
                <h2>Your Rank: {rank}</h2>
                <h3>Predicted colleges and courses for you</h3>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.header_row}>
                            <th>Institute</th>
                            <th>Academic Program Name</th>
                            <th>Round</th>
                            <th>Opening Rank</th>
                            <th>Closing Rank</th>
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
                                    {item.Institute}
                                </td>
                                <td className={styles.cell}>
                                    {item["Academic Program Name"]}
                                </td>
                                <td className={styles.cell}>{item["Round"]}</td>
                                <td className={styles.cell}>
                                    {item["Opening Rank"]}
                                </td>
                                <td className={styles.cell}>
                                    {item["Closing Rank"]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CollegePredictor;
