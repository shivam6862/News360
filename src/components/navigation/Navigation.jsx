import React from "react";
import { useState, useEffect } from "react";
import Backdrop from "../ui/Backdrop";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
  if (screenSize.dynamicWidth >= 1000 && isNavExpanded === true) {
    setIsNavExpanded(false);
  }

  return (
    <div className={classes.positionfixed}>
      <nav className={classes.navigation}>
        <Link to={"/"} className={classes.active1}>
          <div className={classes.logo}>
            <img src="/logo.jpg" alt="logo"></img>
          </div>
        </Link>
        <button
          className={
            isNavExpanded ? classes.hamburgerchange : classes.hamburger
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </button>

        {isNavExpanded && (
          <Backdrop
            Id="backdrop"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          />
        )}

        <div
          className={
            isNavExpanded
              ? classes.navigationmenuexpanded
              : classes.navigationmenu
          }
        >
          <ul>
            <li className={classes.first}>
              <Link
                to={"/"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <div className={classes.logo1}>
                  <img src="/logo.jpg" alt="logo"></img>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/stroies"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Stroies
              </Link>
            </li>
            <li>
              <Link
                to={"/sports"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to={"/science"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                to={"/environment"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Environment
              </Link>
            </li>
            <li>
              <Link
                to={"/technology"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to={"/entertainment"}
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Entertainment
              </Link>
            </li>
            <li>
              <div
                className={classes.active}
                onClick={() => {
                  setIsNavExpanded(false);
                  window.open("https://shivam6862.github.io/");
                }}
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
