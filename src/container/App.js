import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import VerticalDrawer from '../components/VerticalDrawer';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import StrategiesPage from '../pages/StrategiesPage';
import ExchangesPage from '../pages/ExchangesPage';
import SettingsPage from '../pages/SettingsPage';
import CreateBotPage from '../pages/CreateBotPage';
import TemplatesPage from '../pages/TemplatesPage'

const App = ({ user }) => {

  return (
    <React.Fragment>
      {user.isLoggedIn ?
        <VerticalDrawer />
        : null
      }
      <div className="App">
        {!user.isLoggedIn ? (
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/strategies" component={StrategiesPage} />
            <Route exact path="/exchanges" component={ExchangesPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/create-bot" component={CreateBotPage} />
            <Route exact path="/templates" component={TemplatesPage} />
            <Redirect to="/strategies" />
          </Switch>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);