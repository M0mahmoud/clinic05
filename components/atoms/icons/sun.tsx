import React from "react";

function Sun() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="sun-icon"
            width="30"
            height="30"
        >
            <circle cx="32" cy="32" r="12" fill="#FFA500" />
            <g stroke="#FFA500" stroke-width="4" strokeLinecap="round">
                <line x1="32" y1="5" x2="32" y2="17" />
                <line x1="32" y1="47" x2="32" y2="59" />
                <line x1="5" y1="32" x2="17" y2="32" />
                <line x1="47" y1="32" x2="59" y2="32" />
                <line x1="12.5" y1="12.5" x2="20.5" y2="20.5" />
                <line x1="43.5" y1="43.5" x2="51.5" y2="51.5" />
                <line x1="12.5" y1="51.5" x2="20.5" y2="43.5" />
                <line x1="43.5" y1="20.5" x2="51.5" y2="12.5" />
            </g>
        </svg>
    );
}

export default Sun;
