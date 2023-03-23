import React from "react";
import classes from "./MostRecent.module.css";
import { useProtectedResources } from "../../data/useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";

const MostRecent = () => {
  const { isLoading: isLoading, data: datas } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedsvideomostrecent.cms`,
    null
  );

  return (
    <div className={classes.shared}>
      <div className={classes.heading}>
        <h1>Most Recent</h1>
      </div>
      {isLoading || datas.status == "error" ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.datas}>
          {datas.items.map((data, key) => {
            var first = "https://static.toiimg.com/thumb/msid-";
            var second = ",imgsize-32588,width-800,height-600,resizemode-75/";
            var third = ".jpg";
            var number = data.link.substring(
              data.link.length - 12,
              data.link.length - 4
            );
            var linkOfPhoto = first + number + second + number + third;
            if (key >= 7) return;
            return (
              <div
                className={classes.box}
                key={key}
                onClick={() => window.open(data.link)}
              >
                <div className={classes.images}>
                  <div className={classes.img}>
                    <img src={linkOfPhoto} alt="mostShared" />
                  </div>
                  <div className={`${classes.category} ${classes.category1}`}>
                    <span>Recent</span>
                  </div>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.title}>
                    {data.description.slice(0, 120)}...
                  </h1>
                  <div className={classes.date}>
                    <img src="/calendar.jpg" alt="calender" />
                    <label>{data.pubDate.slice(0, 10)}</label>
                  </div>
                  <div className={classes.comment}>
                    <img src="/chat.jpg" alt="chat" />
                    <label>{data.comments} </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MostRecent;
