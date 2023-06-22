import React, { useState } from "react";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const HomePage = () => {
    const options = [
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

    const [rank, setRank] = useState(0);
    const [category, setCategory] = useState("");
    const router = useRouter();

    const handleDropdownChange = (selectedOption) => {
        console.log("Selected option:", selectedOption);
        setCategory(selectedOption.label);
    };

    const handleRankChange = (event) => {
        const enteredRank = event.target.value;
        setRank(enteredRank);
    };

    const handleSubmit = () => {
        router.push(`/college_predictor?rank=${rank}&category=${category}`);
    };

    const isSubmitDisabled = rank <= 0 || category === "";

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Home Page</h1>
                <Dropdown options={options} onChange={handleDropdownChange} />
                <input
                    type="number"
                    value={rank}
                    onChange={handleRankChange}
                    className={styles.input}
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
