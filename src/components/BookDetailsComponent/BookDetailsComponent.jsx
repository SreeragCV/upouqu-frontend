import React, { useState } from "react";
import classes from "./BookDetailsComponent.module.css";

function BookDetailsComponent({ details }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {details && (
        <div className={classes.container}>
          <div className={classes.mainDiv}>
            <img className={classes.image} src={details.image_url} alt="" />
            <h1 className={classes.title}>{details.book_name}</h1>
            <div className={classes.btnDiv}>
              <button className={classes.button}>Read</button>
              <button className={classes.button}>Save</button>
            </div>
          </div>
          <p className={classes.description}>
            {showMore
              ? details.description
              : `${details.description.substring(0, 460)}......`}
            <button
              className={classes.showBtn}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
