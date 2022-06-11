import { withRouter, Route, Switch } from "react-router-dom";
import Home_Page from "./components/Home/Home_Page";
import Memberships_Page from "./components/Memberships/Memberships_Page";
import OurServices_Page from "./components/OurServices/OurServices_Page";
import ContactUs_Page from "./components/Contact_Us/ContactUs_Page";
import AboutUs_Page from "./components/About_Us/AboutUs_Page";
import FAQs_Page from "./components/FAQs/FAQs_Page";
import Login_Page from "./components/Login/Login_Page";
import Home_Page_A from "./components/Admin/home/Home_Page_A";
import Memberships_Page_A from "./components/Admin/memberships/Memberships_Page_A";

const Routes = ({ auth }) => {
  const adminOptions = [
    { path: "/admin/home", component: Home_Page_A },
    { path: "/admin/memberships", component: Memberships_Page_A },
  ];

  const routeOptions = [
    { path: "/", component: Home_Page },
    { path: "/home", component: Home_Page },
    { path: "/memberships", component: Memberships_Page },
    { path: "/our_services", component: OurServices_Page },
    { path: "/contact_us", component: ContactUs_Page },
    { path: "/about_us", component: AboutUs_Page },
    { path: "/faqs", component: FAQs_Page },
    { path: "/byah", component: Login_Page },
  ];

  return (
    <Switch>
      {routeOptions.map((route) =>
        route.path === "/our_services" ? (
          <Route key={route} path={route.path} component={route.component} />
        ) : (
          <Route
            key={route}
            exact
            path={route.path}
            component={route.component}
          />
        )
      )}
      {auth &&
        auth.id &&
        adminOptions.map((route) => (
          <Route key={route} path={route.path} component={route.component} />
        ))}
    </Switch>
  );
};

export default withRouter(Routes);
