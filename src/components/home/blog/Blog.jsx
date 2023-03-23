import React from "react";
import classes from "./Blog.module.css";
import { useProtectedResources } from "../../data/useProtectedResources";
import LoadingSpinner from "../../ui/LoadingSpinner";

const Blog = () => {
  const { isLoading: isLoading, data: datas } = useProtectedResources(
    `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fblogs%2Ffeed%2Fdefaultrss`,
    null
  );

  return (
    <div className={classes.shared}>
      <div className={classes.heading}>
        <h1>Blog</h1>
      </div>
      {isLoading || datas.status == "error" ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.datas}>
          {datas.items.map((data, key) => {
            if (key >= 7) return;
            return (
              <div
                className={classes.box}
                key={key}
                onClick={() => window.open(data.link)}
              >
                <div className={`${classes.category} ${classes.category1}`}>
                  <span>
                    {key < data.categories.length
                      ? data.categories[key]
                      : data.categories[0]}
                  </span>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.title}>
                    {data.title.slice(0, 40)}...
                  </h1>
                </div>
                <div className={classes.text}>
                  <h1 className={classes.description}>
                    {data.description.slice(0, 40)}...
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blog;
