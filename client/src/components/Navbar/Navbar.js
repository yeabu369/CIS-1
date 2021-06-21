import React, { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import logo from "../../assets/Cinema-Logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="CinemaX" height="48px" className={classes.image}/>
            {" "}CinemaX
          </Typography>

          { location.pathname !== "/auth/signup" && location.pathname !== "/auth/signin"  && (
            <Box component="ul" display="flex">
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/watch">
                  Watch
                </Link>
              </Typography>
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/get-tickets">
                  Get Tickets
                </Link>
              </Typography>
              <Typography variant="subtitle1" className={classes.menuButton}>
                <Link className={classes.link} to="/premiere">
                  Premiere
                </Link>
              </Typography>
            </Box>
          )}

          <div className={classes.grow} />

          {(location.pathname === "/" || location.pathname === "/watch" || location.pathname === "/get-tickets" || location.pathname === "/premiere") && (
            <div className={classes.button}>
              <Button component={Link} to="/auth/signup" variant="contained" color="primary" disableElevation className={classes.menuButton}>
                Sign Up
              </Button>
              <Button component={Link} to="/auth/signin" variant="outlined" className={classes.menuButton}>
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
