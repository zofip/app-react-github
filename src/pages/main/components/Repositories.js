import React, { useEffect, useState } from "react";

import { getRepositoriesByUser, getValueByUrl } from "../../../services/serviceRepository";
import { getCookie } from "../../../services/serviceCookie";
import { INFO_USER, EMPTY } from "../../../util/constants";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350
  },
}));

const Repositories = props => {

  const classes = useStyles();
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [infoUser] = useState(getCookie(INFO_USER));
  const [inputSearch, setInputSearch] = useState(EMPTY);
  const columns = [
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
    { title: "Languages", field: "languages_url" },
    { title: "Branch Default", field: "default_branch" },
    { title: "Git Url", field: "git_url" }
  ];

  useEffect(() => {
    if (infoUser) {
      getRepositoriesByUser(infoUser.user)
        .then(response => response.json())
        .then(repositories => {
          repositories.forEach(item => {
            getDetailRepository(item);
          });
          setData(repositories);
          setFullData(repositories);
        });
    }
  }, [infoUser]);

  const getDetailRepository = repository => {
    getValueByUrl(repository.languages_url)
      .then(response => response.json())
      .then(value => {
        repository.languages_url = Object.keys(value).toString();
      });
  }

  const handleChange = event => {
    let value = event.target.value;
    setInputSearch(value);
    if (value.length >= 3) {
      let filterRepositories = fullData.filter(item => item.name.includes(value));
      setData(filterRepositories);
    } else {
      setData(fullData);
    }
  };

  return (
    <div>
      <Grid container direction="row" spacing={5}>
        <Grid item xs={12}>
          <TextField
            id="inputSearch"
            label="Repository"
            value={inputSearch}
            className={classes.textField}
            onChange={handleChange} />
        </Grid>
        <Grid item xs={12} >
          {data.length > 0 && (
            <MaterialTable
              title='Repositories'
              columns={columns}
              data={data}
              options={{
                responsive: "scroll",
                search: false
              }}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Repositories;
