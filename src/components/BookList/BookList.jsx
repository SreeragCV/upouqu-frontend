import classes from "./BookList.module.css";
import DUMMY_DATA from "../../data/DUMMY_DATA";

function BookList({title}) {
  return (
    <div className={classes.row}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.posters}>
        {DUMMY_DATA.map((book, i) => (
          <div key={book.book_id}>
            <img className={classes.poster} src="https://i.pinimg.com/564x/35/66/dc/3566dc24c327c144d18dffbac7145d28.jpg" key={i} />
            <h4 className={classes.bookTitle}>{book.book_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
