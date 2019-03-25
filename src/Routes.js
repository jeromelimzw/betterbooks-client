import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import AddNewBook from "./AddNewBook";
import UserCatalogue from "./UserCatalogue";
import DetailedMediaInfo from "./DetailedMediaInfo";
import DetailedUserInfo from "./DetailedUserInfo";
import Dashboard from "./Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={SignupForm} />
      <Route path="/newbook" component={AddNewBook} />
      <Route path="/userlib" component={UserCatalogue} />
      <Route path="/detailed/:handle" component={DetailedMediaInfo} />
      <Route path="/myinfo" component={DetailedUserInfo} />
      <Route path="/home" component={Dashboard} />
      <Route path="/" component={LoginForm} />
    </Switch>
  );
};

export default Routes;
