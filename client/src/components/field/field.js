import React from "react";

const Field = ({label, placeHolder, type = 'text'}) => {
    return (
        <div className="field">
            <label>{label}</label>
            <div className="control">
                <input type={type} className="input" placeholder={placeHolder} />
            </div>
        </div>
    )
}

export default Field;