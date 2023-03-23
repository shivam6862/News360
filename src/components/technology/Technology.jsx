import React from "react";
import classes from "./Technology.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Technology = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F66949542.cms`,
    null
  );

  return (
    <div className={classes.technology}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Technology News`}
      />
    </div>
  );
};

export default Technology;
