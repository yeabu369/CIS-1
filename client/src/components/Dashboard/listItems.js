import React from "react";
import { 
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import TheatersIcon from '@material-ui/icons/Theaters';

import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
      <ListItem button component={Link} to="/dashboard/admin">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/movie-catalog">
        <ListItemIcon>
          <TheatersIcon />
        </ListItemIcon>
        <ListItemText primary="Movie Catalog" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/orders">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/users">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/reports">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard/integrations">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
);