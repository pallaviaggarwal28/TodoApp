import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./TodoApp.css";
import "../../bootstrap.css";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          {/* - Switch is used to show only one component at a time */}
          <HeaderComponent></HeaderComponent>
          <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/todos/:id"
              component={TodoComponent}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/todos"
              component={ListTodosComponent}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/logout"
              component={LogoutComponent}
            ></AuthenticatedRoute>
            <Route component={ErrorComponent}></Route>
          </Switch>
          <FooterComponent></FooterComponent>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
