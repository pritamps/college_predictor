import React, { useState } from "react";
import Script from "next/script";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import getConstants from "../constants";

const HomePage = () => {
    const categoryOptions = getConstants().CATEGORY_OPTIONS;

    const genderOptions = getConstants().genderOptions;

    const roundNumberOptions = getConstants().ROUND_NUMBER_OPTIONS;

    const [rank, setRank] = useState(0);
    const [roundNumber, setRoundNumber] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const router = useRouter();

    const handleCategoryDropdownChange = (selectedOption) => {
        setCategory(selectedOption.label);
    };

    const handleRoundNumberDropdownChange = (selectedOption) => {
        setRoundNumber(selectedOption.value);
    };

    const handleGenderDropdownChange = (selectedOption) => {
        setGender(selectedOption.label);
    };

    const handleRankChange = (event) => {
        const enteredRank = event.target.value;
        setRank(enteredRank);
    };

    const handleSubmit = () => {
        router.push(
            `/college_predictor?rank=${rank}&category=${category}&roundNumber=${roundNumber}&gender=${gender}`
        );
    };

    const isCategoryInOptions = categoryOptions.some(
        (option) => option.label === category
    );
    const isRoundNumberInOptions = roundNumberOptions.some(
        (option) => option.value == roundNumber
    );
    const isGenderInOptions = genderOptions.some(
        (option) => option.label === gender
    );
    const isSubmitDisabled =
        rank <= 0 ||
        !isCategoryInOptions ||
        !isRoundNumberInOptions ||
        !isGenderInOptions;

    return (
        <div className={styles.container}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-FHGVRT52L7"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FHGVRT52L7');
                `}
            </Script>
            <div className={styles.content}>
                <h1>{getConstants().TITLE}</h1>
                <label className={styles.label}>
                    {getConstants().CATEGORY_LABEL}
                </label>
                <Dropdown
                    options={categoryOptions}
                    onChange={handleCategoryDropdownChange}
                />
                <p />
                <p />
                <label className={styles.label}>
                    {getConstants().RANK_LABEL}
                </label>
                <input
                    type="number"
                    value={rank}
                    onChange={handleRankChange}
                    className={styles.input}
                />
                <p />
                <p />

                <label className={styles.label}>
                    {getConstants().ROUND_NUMBER_LABEL}
                </label>
                <Dropdown
                    options={roundNumberOptions}
                    onChange={handleRoundNumberDropdownChange}
                />
                <p />
                <p />
                <label className={styles.label}>
                    {getConstants().GENDER_LABEL}
                </label>
                <Dropdown
                    options={genderOptions}
                    onChange={handleGenderDropdownChange}
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
