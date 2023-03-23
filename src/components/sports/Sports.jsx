import React from "react";
import classes from "./Sports.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Sports = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F4719148.cms`,
    null
  );
  return (
    <div className={classes.sports}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Sports News`}
      />
    </div>
  );
};

export default Sports;
