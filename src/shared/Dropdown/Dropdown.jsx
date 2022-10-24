import React from 'react';
import { CheckBox } from '../Checkbox/Checkbox';
import { StateContext } from '../Inputs/InputDropdown/InputDropdownContainer';
import styles from './Dropdown.module.css';

export const Dropdown = (props) => {
  return (
    <StateContext.Consumer>
      {({ returnText, filterName }) => {
        <div className={styles.dropdown}>
          <ul className={styles.list} onChange={props.showText}>
            {filterName.map((current) => {
              <CheckBox
                label={current.label}
                key={current.id}
                returnText={returnText}
              />;
            })}
          </ul>
        </div>;
      }}
    </StateContext.Consumer>
  );
};
