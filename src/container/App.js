import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import VerticalDrawer from '../components/VerticalDrawer';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import StrategiesPage from '../pages/StrategiesPage';
import ExchangesPage from '../pages/ExchangesPage';
import SettingsPage from '../pages/SettingsPage';
import CreateBotPage from '../pages/CreateBotPage';

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
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/strategies" component={StrategiesPage} />
            <Route exact path="/exchanges" component={ExchangesPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/create-bot" component={CreateBotPage} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);