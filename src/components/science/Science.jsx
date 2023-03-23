import React from "react";
import classes from "./Science.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Science = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F-2128672765.cms`,
    null
  );

  return (
    <div className={classes.science}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Science News`}
      />
    </div>
  );
};

export default Science;
