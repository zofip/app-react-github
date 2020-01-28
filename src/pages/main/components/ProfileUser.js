import React, { useState, useEffect } from "react";
import moment from "moment";

import { Grid } from "@material-ui/core";

import { getCookie } from "../../../services/serviceCookie";
import { INFO_USER, FORMAT_MOMENT_L } from "../../../util/constants";


export default function ProfileUser(props) {

    const [infoUser, setInfoUser] = useState(null);

    useEffect(() => {
        setInfoUser(getCookie(INFO_USER));
    }, []);

    return (
        <div>
            {infoUser && (<Grid container spacing={2}>
                <Grid item xs={6}>
                    <b>User</b>
                </Grid>
                <Grid item xs={6}>
                    {infoUser.user}
                </Grid>
                <Grid item xs={6}>
                    <b>Fullname</b>
                </Grid>
                <Grid item xs={6}>
                    {infoUser.name} {infoUser.lastName}
                </Grid>
                <Grid item xs={6}>
                    <b>Email</b>
                </Grid>
                <Grid item xs={6}>
                    {infoUser.email}
                </Grid>
                <Grid item xs={6}>
                    <b>Identification</b>
                </Grid>
                <Grid item xs={6}>
                   {infoUser.identification}
                </Grid>
                <Grid item xs={6}>
                    <b>Date Birth</b>
                </Grid>
                <Grid item xs={6}>
                    {moment(infoUser.dateBirth).format(FORMAT_MOMENT_L)}
                </Grid>
            </Grid>
            )}
        </div>
    );
};