import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import SearchBooks from "./SearchBooks";
import UserCatalogue from "./UserCatalogue";
import DetailedMediaInfo from "./DetailedMediaInfo";
import DetailedUserInfo from "./DetailedUserInfo";
import Dashboard from "./Dashboard";
import CommunityPage from "./CommunityPage";
import SplashScreen from "./SplashScreen";
import AccessDenied from "./AccessDenied";
import AddNewBook from "./AddNewBook";

const isAuthorized = !!localStorage.getItem("username");

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/register" component={SignupForm} />
        <Route path="/searchbooks" component={SearchBooks} />
        <Route path="/newbook/:handle" component={AddNewBook} />
        <Route
          path="/userlib"
          component={isAuthorized ? UserCatalogue : AccessDenied}
        />
        <Route path="/detailed/:handle" component={DetailedMediaInfo} />
        <Route
          path="/myinfo"
          component={isAuthorized ? DetailedUserInfo : AccessDenied}
        />
        <Route
          path="/home"
          component={isAuthorized ? Dashboard : AccessDenied}
        />

        <Route path="/" component={isAuthorized ? Dashboard : SplashScreen} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
