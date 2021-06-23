import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Auth, Home, Dashboard, MovieCards } from "./components";
import "./App.css";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth/:type" exact component={Auth} />
                <Route path="/dashboard/:section" exact component={Dashboard} />
                <Route path="/watch" exact component={MovieCards} />
            </Switch>
        </div>
    </Router>
);

export default App;