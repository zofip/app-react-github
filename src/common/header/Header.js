import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";

import MenuAccount from "./menus/MenuAccount";

import { getCookie } from '../../services/serviceCookie';
import { INFO_USER } from '../../util/constants';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  smallDevices: {
    display: "flex !important",
    flexDirection: "row !important"
  }
}));


export default function Header(props) {

  const [infoUser, setInfoUser] = useState(null);

  useEffect(() => {
    setInfoUser(getCookie(INFO_USER));
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Test
          </Typography>
          <div className={classes.smallDevices}>
            {infoUser && (
              <Grid container spacing={2}>
                <Grid item xs>
                  {infoUser.user}
                </Grid>
                <Grid item xs>
                  <MenuAccount />
                </Grid>
              </Grid>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
