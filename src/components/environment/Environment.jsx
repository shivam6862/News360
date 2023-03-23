import React from "react";
import classes from "./Environment.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Environment = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F2647163.cms`,
    null
  );

  return (
    <div className={classes.environment}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Environment News`}
      />
    </div>
  );
};

export default Environment;
