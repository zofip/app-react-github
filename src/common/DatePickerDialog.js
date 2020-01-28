import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350
  }
}));

const DatePickerDialog = ({
  label,
  typeInput,
  handleChange
}) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(null);

  function handleDateChange(date) {
    setSelectedDate(date);
    handleChange(typeInput, date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        className={classes.root}
        id="date-picker-dialog"
        label={label}
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerDialog;
