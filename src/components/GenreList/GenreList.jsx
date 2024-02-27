import React from "react";
import classes from './GenreList.module.css'
import { Link } from 'react-router-dom'

function GenreList({title, image}) {
  return (
    <div className={classes.row}>
      <Link>
        <div className={classes.items}>
          <img className={classes.image} alt=""  src={image}/>
          <h2 className={classes.title}>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default GenreList;
