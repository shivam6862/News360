import React from "react";
import classes from "./PageNotFound.module.css";

const Pagenotfound = () => {
  return (
    <div className={classes.pagenotfound}>
      <div className={classes.error_number}>404</div>
      <div className={classes.error_reason}>Page Not Found!</div>
      <div className={classes.error_des}>
        You've encountered an error. Please refresh the page, or try again
        later.
      </div>
    </div>
  );
};

export default Pagenotfound;
