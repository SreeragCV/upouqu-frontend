import React, { useState } from "react";
import classes from "./BookDetailsComponent.module.css";

function BookDetailsComponent({ bookDetails, userDetails }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {bookDetails && userDetails && (
        <div className={classes.top}>
          <div className={classes.container}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={bookDetails.image_url}
                alt=""
              />
              <p className={classes.full_name}>by {userDetails.full_name}</p>
          <div className={classes.btnDiv}>
            <button className={classes.button}>Read</button>
            <button className={classes.button}>Save</button>
          </div>
            </div>
            <p className={classes.description}>
              <h1 className={classes.title}>
                {bookDetails.book_name.toUpperCase()}
              </h1>
              <h3>Genres</h3>
              {bookDetails.genre.map((e) => (
                <p className={classes.genre}>{e}, </p>
              ))}
              <br />
              <h3>Description</h3>
              {showMore
                ? bookDetails.description
                : `${bookDetails.description.substring(0, 460)}......`}
              <button
                className={classes.showBtn}
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
