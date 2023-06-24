const constants = {
    TITLE: "JEE Rank College Predictor",
    CATEGORY_LABEL: "Select Category:",
    CATEGORY_OPTIONS: [
        { value: "AI", label: "AI" },
        { value: "HS", label: "HS" },
        { value: "OS", label: "OS" },
    ],
    RANK_LABEL: "Enter Category Rank:",
    GENDER_LABEL: "Select Gender:",
    ROUND_NUMBER_LABEL: "Select Round Number:",
    ROUND_NUMBER_OPTIONS: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
    ],
    CATEGORY_OPTIONS: [
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
    ],
    genderOptions: [
        { value: "gender_neutral", label: "Gender-Neutral" },
        {
            value: "female_only",
            label: "Female-only (including Supernumerary)",
        },
    ],
};

export default function getConstants() {
    return constants;
}
