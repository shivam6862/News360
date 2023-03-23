import React, { useState } from "react";
import classes from "./General.module.css";
import LoadingSpinner from "../ui/LoadingSpinner";
import Button from "../ui/Button";
import DetailNews from "../detailNews/DetailNews";

const General = ({ isLoading, datas, titlePage }) => {
  const [eachNews, setEachNews] = useState(false);
  const [linkActive, setLinkAcctive] = useState("");
  const [newsActive, setNewsActive] = useState("");
  return (
    <div className={classes.col}>
      <div className={classes.row}>
        {eachNews ? (
          <DetailNews
            link={linkActive}
            setEachNews={setEachNews}
            newsActive={newsActive}
          />
        ) : (
          <div className={classes.working}>
            <div className={classes.heading}>{titlePage}</div>
            <div className={classes.works}>
              {isLoading || datas.status == "error" ? (
                <LoadingSpinner />
              ) : (
                <>
                  {datas.items.map((data, index) => (
                    <div key={index} className={classes.work}>
                      <div className={classes.book_data}>
                        <div className={classes.work_info}>
                          {data.pubDate.slice(0, 10)}
                        </div>
                        <div className={classes.about}>{data.author}</div>
                        <div>
                          <div className={classes.work_body}>
                            <img
                              src={data.enclosure.link}
                              className={classes.img_fluid}
                            />
                          </div>
                          <div className={classes.work_info}>
                            {data.title.slice(0, 50)}...
                          </div>
                        </div>
                        <div className={classes.overview}>
                          <div className={classes.back_content}>
                            <div className={classes.button}>
                              <Button
                                onClick={() => {
                                  setLinkAcctive(data.link);
                                  setEachNews(true);
                                  setNewsActive(data);
                                }}
                              >
                                Read more
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default General;
