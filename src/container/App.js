import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import VerticalDrawer from '../components/VerticalDrawer'
import HomePage from "../pages/HomePage"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import RecoverPasswordPage from "../pages/RecoverPasswordPage"
import StrategiesPage from '../pages/StrategiesPage'
import ExchangesPage from '../pages/ExchangesPage'
import CreateBotPage from '../pages/CreateBotPage'
import EditBotPage from "../pages/EditBotPage"
import TemplatesPage from '../pages/TemplatesPage'
import VerificationPage from "../pages/VerificationPage"
import ChangePasswordPage from "../pages/ChangePasswordPage"
import PricingPage from "../pages/PricingPage"
import BillingPage from '../pages/BillingPage'
import TemplateBotPage from '../pages/TemplateBotPage'

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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/recover-password" component={RecoverPasswordPage} />
            <Route exact path="/account-verification/:token" component={VerificationPage} />
            <Route exact path="/reset-password/:token" component={ChangePasswordPage} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/strategies" component={StrategiesPage} />
            <Route exact path="/exchanges" component={ExchangesPage} />
            <Route exact path="/create-bot" component={CreateBotPage} />
            <Route exact path="/edit-bot/:id" component={EditBotPage} />
            <Route exact path="/template/:id" component={TemplateBotPage} />
            <Route exact path="/templates" component={TemplatesPage} />
            <Route exact path="/settings-pricing" component={PricingPage} />
            <Route exact path="/settings-billing" component={BillingPage} />
            <Redirect to="/strategies" />
          </Switch>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);