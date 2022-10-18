import React from "react";

export const SvgSelector = (props) => {
    switch (props.id) {
        case 'incorrect':
            return(
                <svg
                    className={props.className}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#8055FF"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                    </svg>
            );
        case 'disabled':
            return(
                <svg
                    className={props.className}
                    viewBox="0 0 16 16"
                    fill="#8055FF"
                    stroke="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                        stroke="none"
                        />
                        <path
                        d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                        stroke="none"
                        />
                </svg>
            )
        case 'search':
           return(
           <svg
                className={props.className}
                viewBox="0 0 16 16"
                fill="none"
                stroke="#8055FF"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                fill="none"
                />
            </svg>) 
        case 'buttonIcon':
            return(
                <svg
                    className={props.className}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#8055FF"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                        fill="none"
                    />
                </svg>
            )
        default:
            <svg></svg>;
    }
}