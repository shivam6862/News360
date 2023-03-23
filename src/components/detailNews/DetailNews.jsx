import React from "react";
import classes from "./DetailNews.module.css";
import Button from "../ui/Button";
import FunctionCorrectDescription from "../function/FunctionCorrectDescription";

const DetailNews = ({ link, setEachNews, newsActive }) => {
  return (
    <div className={classes.col}>
      <div className={classes.backdrop}></div>
      <div className={classes.detailnews}>
        <div className={classes.leftpart}>
          <img src={newsActive.enclosure.link} className={classes.img_fluid} />
        </div>
        <div className={classes.rightpart}>
          <div className={classes.work_info}>{newsActive.title}</div>
          <div className={classes.texting}>
            <FunctionCorrectDescription description={newsActive.description} />
          </div>
          <div className={classes.buttons}>
            <Button onClick={() => setEachNews(false)}>Go back</Button>
            <Button onClick={() => window.open(newsActive.link)}>
              Go to site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
