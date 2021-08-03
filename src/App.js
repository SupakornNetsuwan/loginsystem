import React from "react";
import {Route , Switch} from "react-router-dom";
import Register from "./register/Register.js"
import Login from "./login/Login.js"
import Recover from "./recover/Recover.js"
import WrongPage from "./wrongpage/WrongPage.js"
function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Register/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/recover/:type">
          <Recover/>
        </Route>
        <Route path="*">
          <WrongPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
