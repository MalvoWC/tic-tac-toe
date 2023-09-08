import React from 'react';
import "./ResetButton.css"

export default function ResetButton({resetBoard}) {
    return (
        <button className='resetbutton' onClick={resetBoard}>
            Reset
        </button>
    );
}