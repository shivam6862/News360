import React from "react";
import classes from "../detailNews/DetailNews.module.css";

const FunctionCorrectDescription = ({ description }) => {
  return (
    <div>
      {description.substring(2, 45) ==
        'img border="0" hspace="10" align="left" src' ||
      description.substring(2, 45) ==
        'mg border="0" hspace="10" align="left" src=' ? (
        <div className={classes.texting}>{description.substring(103)}</div>
      ) : (
        <>
          {description.substring(5, 58) ==
          'ref="https://timesofindia.indiatimes.com/gadgets-news' ? (
            <div className={classes.texting}>
              {description.substring(description.search("</a>") + 4)}
            </div>
          ) : (
            <div className={classes.texting}>{description}</div>
          )}
        </>
      )}
    </div>
  );
};

export default FunctionCorrectDescription;
