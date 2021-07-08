import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
export default function DatePicker({ name, label, value, onChange }) {
  const converToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(converToDefaultEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}