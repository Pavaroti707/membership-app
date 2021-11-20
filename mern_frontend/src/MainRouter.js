import React from "react";
import { Route, Switch } from "react-router";
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./core/Home";
import Menu from "./core/Menu";
import EditProfile from "./user/EditProfile";
import Profile from "./user/Profile";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Users from "./user/Users";

const MainRouter = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route exact path="/user/:userId" component={Profile} />
      </Switch>
    </>
  );
};

export default MainRouter;
