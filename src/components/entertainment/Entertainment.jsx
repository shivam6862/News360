import React from "react";
import classes from "./Entertainment.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Entertainment = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F1081479906.cms`,
    null
  );

  return (
    <div className={classes.entertainment}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Entertainment News`}
      />
    </div>
  );
};

export default Entertainment;
