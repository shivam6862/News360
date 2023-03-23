import React from "react";
import classes from "./MostShared.module.css";
import { useProtectedResources } from "../../data/useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";

const MostShared = () => {
  const { isLoading: isLoading, data: datas } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedmostshared.cms`,
    null
  );

  return (
    <div className={classes.shared}>
      <div className={classes.heading}>
        <h1>Most Shared</h1>
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
            if (key >= 6) return;
            return (
              <div className={classes.box} key={key}>
                <div className={classes.images}>
                  <div className={classes.img}>
                    <img src={linkOfPhoto} alt="mostShared" />
                  </div>
                  <div className={`${classes.category} ${classes.category1}`}>
                    <span>Shared</span>
                  </div>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.title}>
                    {data.description.slice(0, 40)}...
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
                <div
                  className={classes.overview}
                  onClick={() => window.open(data.link)}
                >
                  <div className={classes.back_content}>
                    <div className={classes.overviewtitle}>{data.title}</div>
                    <div className={classes.overviewdesc}>
                      {data.description}
                    </div>
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

export default MostShared;
