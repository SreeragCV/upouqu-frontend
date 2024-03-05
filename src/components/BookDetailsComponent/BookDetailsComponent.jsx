import React, { useState } from "react";
import classes from "./BookDetailsComponent.module.css";
import { useSelector } from "react-redux";

function BookDetailsComponent({ bookDetails, userDetails }) {
  const [showMore, setShowMore] = useState(false);
  const data = useSelector((state) => state.auth);
  const currentUser = userDetails.user_id === data.user_id;
  console.log(currentUser);

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
                <button className={classes.button}><span>Read</span></button>
                <button className={classes.button}><span>Save</span></button>
              </div>
            </div>
            <p className={classes.description}>
              <h1 className={classes.title}>
                {bookDetails.book_name.toUpperCase()}
              </h1>
              <div>
                <h3>Genres</h3>
                {bookDetails.genre.map((e) => (
                  <p className={classes.genre}>{e}, </p>
                ))}
              </div>
              <div>
                <h3>Description</h3>
                {showMore
                  ? bookDetails.description
                  : `${bookDetails.description.substring(0, 460)}.....`}
                <button
                  className={classes.showBtn}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              </div>
              {data.isVerified && currentUser && (
                <div className={classes.btnDiv}>
                  <button className={classes.deleteBtn}>Delete</button>
                  <button className={classes.updateBtn}>Update</button>
                </div>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
