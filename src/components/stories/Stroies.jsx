import React from "react";
import classes from "./Stroies.module.css";
import { useProtectedResources } from "../data/useProtectedResources";
import General from "../general/General";

const Stroies = () => {
  const { isLoading: isLoading, data: homedata } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms`,
    null
  );

  return (
    <div className={classes.stroies}>
      <General
        isLoading={isLoading}
        datas={homedata}
        titlePage={`Stroies News`}
      />
    </div>
  );
};

export default Stroies;
