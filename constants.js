const constants = {
    TITLE: "JEE Rank College Predictor",
    CATEGORY_LABEL: "Select Category:",
    CATEGORY_OPTIONS: [
        { value: "AI", label: "AI" },
        { value: "HS", label: "HS" },
        { value: "OS", label: "OS" },
    ],
    RANK_LABEL: "Enter Category Rank ",
    GENDER_LABEL: "Select Gender:",
    EXAM_LABEL: "Select Exam:",
    STATE_LABEL: "Select Your Home State:",
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
    GENDER_OPTIONS: [
        { value: "gender_neutral", label: "Gender-Neutral" },
        {
            value: "female_only",
            label: "Female-only (including Supernumerary)",
        },
    ],
    EXAM_OPTIONS: [
        {value: "jee_main", label: "JEE Main"},
        {value: "jee_advanced", label: "JEE Advanced"}
    ],
    STATE_OPTIONS: [
        { value: 'all_india', label: 'All India' },
        { value: 'andhra_pradesh', label: 'Andhra Pradesh' },
        { value: 'arunachal_pradesh', label: 'Arunachal Pradesh' },
        { value: 'assam', label: 'Assam' },
        { value: 'bihar', label: 'Bihar' },
        { value: 'chhatisgarh', label: 'Chhatisgarh' },
        { value: 'diu', label: 'Diu' },
        { value: 'goa', label: 'Goa' },
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'haryana', label: 'Haryana' },
        { value: 'himachal_pradesh', label: 'Himachal Pradesh' },
        { value: 'jharkhand', label: 'Jharkhand' },
        { value: 'jammu_&_kashmir', label: 'Jammu & Kashmir' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'kerala', label: 'Kerala' },
        { value: 'madhya_pradesh', label: 'Madhya Pradesh' },
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'manipur', label: 'Manipur' },
        { value: 'meghalaya', label: 'Meghalaya' },
        { value: 'mizoram', label: 'Mizoram' },
        { value: 'nagaland', label: 'Nagaland' },
        { value: 'new_delhi', label: 'New Delhi' },
        { value: 'odisha', label: 'Odisha' },
        { value: 'puducherry', label: 'Puducherry' },
        { value: 'punjab', label: 'Punjab' },
        { value: 'rajasthan', label: 'Rajasthan' },
        { value: 'sikkim', label: 'Sikkim' },
        { value: 'tamil_nadu', label: 'Tamil Nadu' },
        { value: 'telangana', label: 'Telangana' },
        { value: 'tripura', label: 'Tripura' },
        { value: 'uttar_pradesh', label: 'Uttar Pradesh' },
        { value: 'uttarakhand', label: 'Uttarakhand' },
        { value: 'west_bengal', label: 'West Bengal' }
    ]
};

export default function getConstants() {
    return constants;
}
