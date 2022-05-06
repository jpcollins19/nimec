import { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Login_Page from "./components/Login_Page";
import Home_Page from "./components/Home/Home_Page";

const Routes = () => {
  const dispatch = useDispatch();

  // useEffect(() => dispatch(me()), []);

  const auth = useSelector((state) => state.auth);

  return (
    <Switch>
      <Route exact path="/home" component={Home_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
