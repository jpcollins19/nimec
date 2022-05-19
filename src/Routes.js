import { useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Login_Page from "./components/Login_Page";
import Home_Page from "./components/Home/Home_Page";
import Memberships_Page from "./components/Memberships/Memberships_Page";
import OurServices_Page from "./components/OurServices/OurServices_Page";
import Contact_Us_Page from "./components/Contact_Us/Contact_Us_Page";
import AboutUs_Page from "./components/About_Us/AboutUs_Page";

const Routes = () => {
  const dispatch = useDispatch();

  // useEffect(() => dispatch(me()), []);

  const auth = useSelector((state) => state.auth);

  return (
    <Switch>
      <Route exact path="/" component={Home_Page} />
      <Route exact path="/home" component={Home_Page} />
      <Route exact path="/memberships" component={Memberships_Page} />
      <Route exact path="/our_services" component={OurServices_Page} />
      <Route path="/our_services" component={OurServices_Page} />
      <Route path="/contact_us" component={Contact_Us_Page} />
      <Route path="/about_us" component={AboutUs_Page} />
    </Switch>
  );
};

export default withRouter(Routes);
