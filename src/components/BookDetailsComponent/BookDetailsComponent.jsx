import React from "react";
import classes from './BookDetailsComponent.module.css'

function BookDetailsComponent({ details }) {
  console.log(details);
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
          <p className={classes.description}>{details.description}</p>
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
