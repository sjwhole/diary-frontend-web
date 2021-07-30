import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import MyPostPage from "./pages/MyPostPage";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/kakao" component={KakaoLoginPage} />
        <Route exact path="/my" component={MyPostPage} />
      </Switch>
    </Router>
    </>
  );
};

export default App;
