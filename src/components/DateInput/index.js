import React, { useState, useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import { startOfHour, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

function DateInput({ name, placeholder }) {
  const ref = useRef(null);
  const { registerField, fieldName, defaultValue } = useField(name);
  const [selected, setSelected] = useState(
    defaultValue && parseISO(defaultValue)
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <ReactDatePicker
      name={fieldName}
      placeholderText={placeholder}
      ref={ref}
      selected={selected}
      onChange={date => setSelected(date)}
      showTimeSelect
      minDate={startOfHour(new Date())}
      dateFormat="dd/MM/yyyy - HH:mm"
      timeFormat="HH:mm"
      timeIntervals={60}
      autoComplete="off"
    />
  );
}

DateInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

DateInput.defaultProps = {
  placeholder: 'Data do Meetup',
};

export default DateInput;
