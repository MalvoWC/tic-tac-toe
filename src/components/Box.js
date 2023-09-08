import React from 'react';
import "./Box.css"

export default function Box({ value, onClick }) {
    // Changes the style of the box depending on the value//
    const style = value === "X" ? "box x" : "box o";

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
}