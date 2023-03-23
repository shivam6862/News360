import React from "react";
import classes from "./WorldNews.module.css";
import { useProtectedResources } from "../../data/useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";

const WorldNews = () => {
  const { isLoading: isLoading, data: datas } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeeds%2F671314.cms`,
    null
  );

  return (
    <div className={classes.shared}>
      <div className={classes.heading}>
        <h1>World News</h1>
      </div>
      {isLoading || datas.status == "error" ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.datas}>
          {datas.items.map((data, key) => {
            if (key >= 8) return;
            return (
              <div
                className={classes.box}
                key={key}
                onClick={() => window.open(data.link)}
              >
                <div className={classes.images}>
                  <div className={classes.img}>
                    <img src={data.enclosure.link} alt="mostShared" />
                  </div>
                  <div className={`${classes.category} ${classes.category1}`}>
                    <span>World</span>
                  </div>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.title}>
                    {data.description.slice(
                      data.description.search("</a>") + 4,
                      data.description.search("</a>") + 43
                    )}
                    ...
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

export default WorldNews;
