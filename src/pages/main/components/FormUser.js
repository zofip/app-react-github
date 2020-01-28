import React, { useState } from "react";

import { makeStyles, TextField, Grid, Button } from "@material-ui/core";

import { saveCookie } from "../../../services/serviceCookie";
import DatePickerDialog from "../../../common/DatePickerDialog";
import { EMPTY, INFO_USER } from "../../../util/constants";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350
  },
}));

export default function FormUser(props) {

  const classes = useStyles();
  const [values, setValues] = useState({
    name: EMPTY,
    lastName: EMPTY,
    identification: EMPTY,
    email: EMPTY,
    user: EMPTY,
    dateBirth: EMPTY
  });

  function handleChangeDate(inputDate, date) {
    setValues({ ...values, [inputDate]: date });
  }

  const handleChange = input => event => {
    setValues({ ...values, [input]: event.target.value });
  };

  function handleSave() {
    saveCookie(INFO_USER, values);
  }

  return (
    <form onSubmit={handleSave} >
      <Grid container direction="row">
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Name"
            required
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Last Name"
            required
            className={classes.textField}
            value={values.lastName}
            onChange={handleChange("lastName")} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="identification"
            label="Identification"
            required
            className={classes.textField}
            value={values.identification}
            onChange={handleChange("identification")} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            type="email"
            label="Email"
            required
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="user"
            label="User"
            required
            className={classes.textField}
            value={values.user}
            onChange={handleChange("user")} />
        </Grid>
        <Grid item xs={6} >
          <DatePickerDialog
            label="Date birth"
            typeInput="dateBirth"
            handleChange={handleChangeDate}
            required={true}
          ></DatePickerDialog>
        </Grid>
        <Grid item xs={12} >
          <Button
            id="btnSave"
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Save
              </Button>
        </Grid>
      </Grid>
    </form>
  );
};