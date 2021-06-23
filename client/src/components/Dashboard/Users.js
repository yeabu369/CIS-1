import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Users() {
  const classes = useStyles();

  return (
    <>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        100
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        updated on 15 March, 2019
      </Typography>
    </>
  );
}