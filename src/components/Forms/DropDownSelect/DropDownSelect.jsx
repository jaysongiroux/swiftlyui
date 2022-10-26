import React from 'react';
import Select, { components } from 'react-select';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Label from '../Label/Label';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useThemeProvider } from '../../Hooks/useThemeProvider/useThemeProvider';

import './DropDownSelect.scss';

const findOption = (list, value) => {
  return list.find((item) => {
    return item.value === value;
  });
};

const DropDownSelect = ({
  label,
  value,
  options,
  className,
  disabled,
  multiple,
  onChange,
  dropDownStyles,
  dropDownOptionsStyles,
  placeholder,
  ...props
}) => {
  const { primaryColor, secondaryColor, disabledColor } = useThemeProvider('dropdownselect');
  const primaryColorWithDisabled = disabled ? disabledColor ?? '#d6d6d6' : primaryColor ?? '#3f51b5';
  const selectedOptions = findOption(options, value);

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <BsChevronUp
          color={primaryColorWithDisabled}
          style={{ transition: '.25s', transform: `rotate(${props.selectProps.menuIsOpen ? 180 : 0}deg)` }}
        />
      </components.DropdownIndicator>
    );
  };

  const colorStyles = {
    ...dropDownStyles,
    option: (styles, { isFocused, isSelected }) => {
      let backgroundColor = null;
      if (isFocused) {
        backgroundColor = primaryColor ?? '#bebfc4';
      } else if (isSelected) {
        backgroundColor = secondaryColor ?? '#dbdffa';
      }
      return {
        ...styles,
        ...dropDownOptionsStyles,
        transition: '.20s',
        backgroundColor: backgroundColor,
        color: 'black',
      };
    },
    control: () => {
      return {
        outline: 'none',
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
      };
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        display: 'none',
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: disabled ? primaryColorWithDisabled : '#3f51b5',
      };
    },
    singleValue: (styles) => {
      return {
        ...styles,
        color: primaryColorWithDisabled,
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        color: disabled ? '#ebebeb' : 'black',
        backgroundColor: disabled ? 'none' : '#ebebeb',
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: primaryColorWithDisabled,
        // backgroundColor: disabled && '#ebebeb',
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        '&:hover': {
          transition: '.25s',
          backgroundColor: '#f44336',
          color: 'white',
        },
      };
    },
  };

  return (
    <div className={'DropDownSelectContainer'} style={{ ...props.style, borderColor: primaryColorWithDisabled }}>
      {label && (
        <Label className="DropDownSelectLabel" labelColor={primaryColorWithDisabled} {...props.labelProps}>
          {label}
        </Label>
      )}
      <Select
        placeholder={placeholder}
        menuPlacement="auto"
        className={cx(className, 'DropdownSelect')}
        aria-label={label}
        options={options}
        value={selectedOptions}
        styles={colorStyles}
        components={{ DropdownIndicator, ...props.components }}
        isMulti={multiple}
        onChange={(val) => onChange(val, options)}
        isDisabled={disabled}
      />
    </div>
  );
};

DropDownSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }),
  ]),
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  dropDownStyles: PropTypes.object,
  dropDownOptionsStyles: PropTypes.object,
  placeholder: PropTypes.string,
};

DropDownSelect.defaultProps = {
  label: '',
  value: '',
  options: [],
  className: null,
  disabled: false,
  multiple: false,
  onChange: () => {},
  dropDownStyles: {},
  dropDownOptionsStyles: {},
  placeholder: 'Select...',
};

export default DropDownSelect;
