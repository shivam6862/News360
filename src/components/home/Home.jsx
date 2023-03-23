import React from "react";
import classes from "./Home.module.css";
import MostReader from "./mostRead/MostReader";
import MostRecent from "./mostRecent/MostRecent";
import MostShared from "./mostShared/MostShared";
import News from "./news/News";
import Blog from "./blog/Blog";
import WorldNews from "./worldNews/WorldNews";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.leftpart}>
        <MostShared />
        <MostRecent />
        <WorldNews />
        <News />
      </div>
      <div className={classes.rightpart}>
        <Blog />
        <MostReader />
      </div>
    </div>
  );
};

export default Home;
