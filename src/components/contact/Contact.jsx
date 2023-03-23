import React from "react";
import classes from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const date1 = new Date();
  const DATE = date1.getFullYear();
  const [date, setDate] = useState(DATE);
  return (
    <div className={classes.contact}>
      <p className={classes.copyright}>
        © Copyright 2023. Made by Shivam Kumar
      </p>
    </div>
  );
};

export default Contact;
