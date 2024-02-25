import React from "react";
import classes from './GenreList.module.css'
import { Link } from 'react-router-dom'

function GenreList({title}) {
  return (
    <div className={classes.row}>
      <Link>
        <div className={classes.items}>
          <img className={classes.image} alt=""  src="https://images.unsplash.com/photo-1516552335949-d1e27f71ca8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h2 className={classes.title}>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default GenreList;
