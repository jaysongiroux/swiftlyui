import React, { useState } from 'react';
import DateInput from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cx from 'classnames';
import { addYears, format, isValid, parse, subYears } from 'date-fns';
import PropTypes from 'prop-types';
import { AiTwotoneCalendar } from 'react-icons/ai';
import Label from '../Label/Label';
import useThemeProvider from '../../Hooks/useThemeProvider/useThemeProvider';
import styled from 'styled-components';
import './DateTimePicker.scss';
import dayjs from 'dayjs';

const StyledDateInput = styled(DateInput).attrs((props) => ({
  color: props.textColor || '#3f51b5',
  cursor: props.styleDisabled ? 'not-allowed' : 'pointer',
}))`
  // color: ${(props) => props.color};
`;

const DateTimePicker = ({
  value,
  className,
  calendarClassName,
  inputClassName,
  onChange,
  error,
  label,
  name,
  maxDate,
  minDate,
  displayFormat,
  valueFormat,
  disabled,
  showTimeSelect,
  timeInterval,
  timeFormat,
  dateLanguage,
  disabledDateFormat,
  ...props
}) => {
  const { primaryColor, secondaryColor, disabledColor } = useThemeProvider('datetimepicker');
  const primaryColorLogic = disabled ? disabledColor ?? '#d6d6d6' : primaryColor ?? '#3f51b5';
  const [lastValidDate, setLastValidDate] = useState(value);
  const [open, setOpen] = useState(false);

  const handleChange = (date) => {
    if (isValid(date)) {
      const formattedDate = format(date, valueFormat);
      setLastValidDate(date);
      onChange(formattedDate, name);
    }
    return lastValidDate;
  };

  const parseDate = (date) => parse(date, valueFormat, new Date());

  const parsedSelectedValue = isValid(parseDate(value)) ? parseDate(value) : lastValidDate;

  const toggleClick = () => {
    if (disabled) {
      return;
    }
    setOpen(!open);
  };

  return (
    <div
      className={cx('DateTimePicker', className)}
      style={{ ...props.style, border: `2px solid ${primaryColorLogic}` }}
    >
      {label && (
        <Label
          className="DateTimePickerLabel"
          labelColor={disabled ? disabledColor ?? '#d6d6d6' : secondaryColor ?? 'black'}
        >
          {label}
        </Label>
      )}
      <div className="DateTimePickerRow">
        <button
          onClick={toggleClick}
          className="DateTimeIconButton"
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          <AiTwotoneCalendar
            size={30}
            className="DateTimePickerIcon"
            color={disabled ? disabledColor ?? '#d6d6d6' : secondaryColor ?? 'black'}
          />
        </button>
        {disabled ? (
          <span
            style={{
              textAlign: 'left',
              cursor: 'not-allowed',
              color: disabledColor ?? '#d6d6d6',
            }}
            className="DateInputDisabledSpan"
          >
            {dayjs(parsedSelectedValue).format(disabledDateFormat)}
          </span>
        ) : (
          <StyledDateInput
            className={cx('DateTimePickerInput', inputClassName, { hasError: error })}
            calendarClassName={cx('DateTimePickerCalendar', calendarClassName)}
            selected={parsedSelectedValue}
            maxDate={maxDate}
            minDate={minDate}
            onChange={handleChange}
            dateFormat={displayFormat}
            disabled={disabled}
            showTimeInput={showTimeSelect}
            timeIntervals={timeInterval}
            timeFormat={timeFormat}
            textColor={disabled ? disabledColor ?? '#d6d6d6' : secondaryColor ?? 'black'}
            timeClassName="DateTimePickerTime"
            popperClassName="DateTimePickerPopper"
            wrapperClassName="DateTimePickerWrapper"
            autoComplete="on"
            open={open}
            onInputClick={toggleClick}
            styleDisabled={disabled}
            onClickOutside={() => setOpen(false)}
            {...props}
          >
            <div>{props.children}</div>
          </StyledDateInput>
        )}
      </div>
    </div>
  );
};

DateTimePicker.propTypes = {
  value: PropTypes.PropTypes.instanceOf(Date),
  name: PropTypes.string,
  className: PropTypes.string,
  calendarClassName: PropTypes.string,
  displayFormat: PropTypes.string,
  valueFormat: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.bool,
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func.isRequired,
  showTimeSelect: PropTypes.bool,
  timeInterval: PropTypes.number,
  timeFormat: PropTypes.string,
  disabled: PropTypes.bool,
  dateLanguage: PropTypes.string,
  disabledDateFormat: PropTypes.string,
};

DateTimePicker.defaultProps = {
  value: new Date(),
  name: '',
  className: null,
  calendarClassName: null,
  displayFormat: 'MM/dd/yyyy',
  valueFormat: 'MM/dd/yyyy',
  label: null,
  error: false,
  maxDate: addYears(new Date(), 1000),
  minDate: subYears(new Date(), 1000),
  onChange: () => {},
  showTimeSelect: false,
  timeInterval: 15,
  timeFormat: 'HH:mm',
  disabled: false,
  dateLanguage: 'en-US',
  disabledDateFormat: 'MM/DD/YYYY',
};

export default DateTimePicker;
