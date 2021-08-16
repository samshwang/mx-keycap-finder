import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import getCurrentUser from "../services/getCurrentUser";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import SetIndexPage from "./SetIndexPage.js"
import SetShowPage from "./SetShowPage.js"
import NewSetForm from "./NewSetForm.js"
import SetEditForm from "./SetEditForm.js"
import AboutPage from "./AboutPage.js"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(undefined);
      });
  }, []);

  return (
  <Router>
    <TopBar user={currentUser} />
    <Switch>

      <Route exact path="/">
        <AboutPage currentUser={currentUser} />
      </Route>

      <Route exact path="/about">
        <AboutPage currentUser={currentUser} />
      </Route>

      <Route exact path="/list">
        <SetIndexPage currentUser={currentUser} />
      </Route>

      <Route exact path="/new" component={NewSetForm} />

      <Route exact path="/edit/:id">
        <SetEditForm currentUser={currentUser} />
      </Route>

      <Route exact path="/:id">
        <SetShowPage currentUser={currentUser} />
      </Route>

      <Route exact path="/users/new" component={RegistrationForm} />

      <Route exact path="/user-sessions/new" component={SignInForm} />

    </Switch>
  </Router>
  );
};

export default hot(App);
