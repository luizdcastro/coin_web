import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import VerticalDrawer from '../components/VerticalDrawer'
import HomePage from "../pages/HomePage"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PasswordResetPage from "../pages/PasswordResetPage"
import StrategiesPage from '../pages/StrategiesPage'
import ExchangesPage from '../pages/ExchangesPage'
import CreateBotPage from '../pages/CreateBotPage'
import EditBotPage from "../pages/EditBotPage"
import TemplateListPage from '../pages/TemplateListPage'
import VerificationPage from "../pages/VerificationPage"
import ChangePasswordPage from "../pages/ChangePasswordPage"
import PricingPage from "../pages/PricingPage"
import BillingPage from '../pages/BillingPage'
import TemplateBotPage from '../pages/TemplateBotPage'
import ConfirmEmailPage from '../pages/ConfirmEmailPage'

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
            <Route exact path="/password-reset" component={PasswordResetPage} />
            <Route exact path="/confirm-your-email/:name/:email" component={ConfirmEmailPage} />
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
            <Route exact path="/templates" component={TemplateListPage} />
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