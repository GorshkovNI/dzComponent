import React from 'react';

export const SvgSelector = (props) => {
  switch (props.id) {
    case 'incorrect':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='none'
          stroke='#8055FF'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
        </svg>
      );
    case 'disabled':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='#8055FF'
          stroke='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z'
            stroke='none'
          />
          <path
            d='M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z'
            stroke='none'
          />
        </svg>
      );
    case 'search':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='none'
          stroke='#8055FF'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5'
            fill='none'
          />
        </svg>
      );
    case 'loupe':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='none'
          stroke='#8055FF'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5'
            fill='none'
          />
        </svg>
      );
    case 'sun':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='#8055FF'
          stroke='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='8' r='4' stroke='none' />
          <path d='M15 9L16 8L15 7H13V9H15Z' stroke='none' />
          <path d='M1 9L0 8L1 7H3V9H1Z' stroke='none' />
          <path d='M7 15L8 16L9 15V13H7V15Z' stroke='none' />
          <path d='M7 1L8 0L9 1V3H7V1Z' stroke='none' />
          <path
            d='M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z'
            stroke='none'
          />
          <path d='M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z' stroke='none' />
          <path d='M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z' stroke='none' />
          <path d='M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z' stroke='none' />
        </svg>
      );
    case 'filter':
      return (
        <svg
          className={props.className}
          width='8'
          height='9'
          viewBox='0 0 8 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 0L0 0L0 1.5L3 4.5V8L5 9V4.5L8 1.5V0Z' fill='white' />
        </svg>
      );
    case 'load':
      return (
        <svg
          className={props.className}
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.5026 7.5V8.5C2.5026 10.75 4.7526 13.5 8.0026 13.5C10.0001 13.5 11.6187 12.5 12.6001 11'
            stroke='#459DF5'
          />
          <path
            d='M13.5 8.5V7.5C13.5 5.25 11.25 2.5 8 2.5C6.00003 2.5 4.38138 3.5 3.40003 5'
            stroke='#459DF5'
          />
          <path d='M4.5 9.5L2.50254 7.5L0.752533 9.75' stroke='#459DF5' />
          <path d='M11.5 6.5L13.5 8.5L15.25 6.25' stroke='#459DF5' />
        </svg>
      );
    case 'arrow':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='#8055FF'
          stroke='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z' stroke='none' />
        </svg>
      );
    case 'close':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          fill='none'
          stroke='#8055FF'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
        </svg>
      );
    case 'checkMark':
      return (
        <svg
          className={props.className}
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z' stroke='none' />
        </svg>
      );
    default:
      <svg></svg>;
  }
};
