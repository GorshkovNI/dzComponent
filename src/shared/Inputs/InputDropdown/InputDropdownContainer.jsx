import React from 'react';
import { useState } from 'react';
import { InputDropdown } from './InputDropdown';

export const StateContext = React.createContext();

const filterName = [
  { id: 1, label: 'Новый' },
  { id: 2, label: 'Расчет' },
  { id: 3, label: 'Подтвержден' },
  { id: 4, label: 'Отложен' },
  { id: 5, label: 'Выполнен' },
  { id: 6, label: 'Отменен' },
];

export const InputDropdownContainer = (props) => {
  const [visible, setVisible] = useState(true);
  const [value, setValue] = useState('Любой');

  const handleIsVisible = () => {
    setVisible(!visible);
  };

  return (
    <StateContext.Provider
      value={{
        returnText: (e) => {
          setValue(e.target.value);
        },
        filterName: filterName,
      }}
    >
      <InputDropdown
        size={props.size}
        placeheolder={props.placeheolder}
        isVisible={handleIsVisible}
        visible={visible}
        value={value}
      />
    </StateContext.Provider>
  );
};
