import React, { useState } from "react";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const HomePage = () => {
    const categoryOptions = [
        { value: "ews_pwd", label: "EWS (PwD)" },
        { value: "ews", label: "EWS" },
        { value: "obc_ncl_pwd", label: "OBC-NCL (PwD)" },
        { value: "obc_ncl", label: "OBC-NCL" },
        { value: "open_pwd", label: "OPEN (PwD)" },
        { value: "open", label: "OPEN" },
        { value: "sc_pwd", label: "SC (PwD)" },
        { value: "sc", label: "SC" },
        { value: "st_pwd", label: "ST (PwD)" },
        { value: "st", label: "ST" },
    ];

    const roundNumberOptions = [
        { value: 1, label: "Round 1" },
        { value: 2, label: "Round 2" },
        { value: 3, label: "Round 3" },
        { value: 4, label: "Round 4" },
        { value: 5, label: "Round 5" },
        { value: 6, label: "Round 6" }
    ];

    const [rank, setRank] = useState(0);
    const [roundNumber, setRoundNumber] = useState("");
    const [category, setCategory] = useState("");
    const router = useRouter();

    const handleDropdownChange = (selectedOption, dropdownType) => {
        if (dropdownType == "category") {
            setCategory(selectedOption.label);
        }
        else if (dropdownType == "roundNumber") {
            setRoundNumber(selectedOption.value);
        }
    };

    const handleRankChange = (event) => {
        const enteredRank = event.target.value;
        setRank(enteredRank);
    };

    const handleSubmit = () => {
        router.push(`/college_predictor?rank=${rank}&category=${category}&roundNumber=${roundNumber}`);
    };


    const isCategoryInOptions = categoryOptions.some(option => option.label === category);
    const isRoundNumberInOptions = roundNumberOptions.some(option => option.value == roundNumber);
    const isSubmitDisabled = rank <= 0 || !isCategoryInOptions || !isRoundNumberInOptions;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>AF College Predictor</h1>
                <label className={styles.label}>Select Category:</label>
                <Dropdown 
                    options={categoryOptions} 
                    onChange={(selectedOption) => handleDropdownChange(selectedOption, "category")}
                />
                <p />
                <p />
                <label className={styles.label}>Enter Category Rank:</label>
                <input
                    type="number"
                    value={rank}
                    onChange={handleRankChange}
                    className={styles.input}
                />
                <p />
                <p />

                <label className={styles.label}>Select Round Number:</label>
                <Dropdown 
                    options={roundNumberOptions} 
                    onChange={(selectedOption) => handleDropdownChange(selectedOption, "roundNumber")}
                />

                <button
                    className={styles.button}
                    onClick={handleSubmit}
                    disabled={isSubmitDisabled}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default HomePage;
