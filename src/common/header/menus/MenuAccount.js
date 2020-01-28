import React, { useState } from "react";

import { IconButton, Menu } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";


export default function MenuAccount() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);


  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
      </Menu>
    </div>
  );
}
