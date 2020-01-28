import React from 'react';
import { withRouter } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Header from '../../common/header/Header';
import FormUser from './components/FormUser';
import ProfileUser from './components/ProfileUser';
import Repositories from './components/Repositories';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Main = props => {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <CssBaseline />
      <Header></Header>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.container}>
          <Grid container justify="space-between" alignItems="center" spacing={6}>
            <Grid item xs={12}>
              <ProfileUser></ProfileUser>
            </Grid>
            <Grid item xs={12}>
              <FormUser></FormUser>
            </Grid>
            <Grid item xs={12}>
              <Repositories></Repositories>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default withRouter(Main);