import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/kakao" component={KakaoLoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
