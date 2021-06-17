import React, { useState } from "react";
import { 
  Avatar, 
  Button, 
  CssBaseline, 
  TextField, 
  FormControlLabel, 
  Checkbox,
  Grid, 
  Box, 
  Typography, 
  Container 
} from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signin, signup } from '../../actions/auth.js';
import Input from './Input.js';

import useStyles from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        CinemaX Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const initialState = {firstName: '', lastName: '', email: '', password: ''};

const Auth = () => {

  const { type } = useParams();
  const [form, setForm] = useState(initialState);
  const location = useLocation();
  const [isSignup, setIsSignup] = useState(type === 'signup');
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign up' : 'Sign in' }
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" onChange = {handleChange}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange= {handleChange}
              />
            </Grid>
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Remember Password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={ !isSignup ? '/auth/signup' : '/auth/signin'} variant="body2" onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in': "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Auth;