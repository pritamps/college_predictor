import React, { useId } from "react";
import Select from "react-select";

const Dropdown = ({ options, onChange }) => {
    return (
        <Select options={options} onChange={onChange} instanceId={useId()} />
    );
};

export default Dropdown;
