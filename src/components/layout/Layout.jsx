import classes from "./Layout.module.css";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;