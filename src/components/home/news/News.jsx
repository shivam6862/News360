import React from "react";
import classes from "./News.module.css";
import { useProtectedResources } from "../../data/useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useState, useEffect } from "react";

const News = () => {
  const { isLoading: isLoading, data: datas } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedsvideo%2F3812907.cms`,
    null
  );

  const [newsNumber, setNewsNumber] = useState(2);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  if (screenSize.dynamicWidth <= 800 && newsNumber != 8) {
    setNewsNumber(8);
  } else if (screenSize.dynamicWidth > 800 && newsNumber != 2) {
    setNewsNumber(2);
  }

  return (
    <div className={classes.shared}>
      <div className={classes.heading}>
        <h1>News</h1>
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
            if (key >= newsNumber) return;
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
                    <span>News</span>
                  </div>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.title}>{data.title}</h1>
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

export default News;
