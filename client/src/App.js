import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Auth, Home, Dashboard } from "./components";
import "./App.css";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    </Router>
);

export default App;