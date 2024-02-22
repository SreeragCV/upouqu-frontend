import classes from "./BookList.module.css";
import DUMMY_DATA from "../../data/DUMMY_DATA";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function BookList({ title, url }) {
  useEffect(() => {
    try {
      const fetchBooks = async () => {
        const response = await axios.get(url);
        const data = response.data;
        const allBooks = data.books.rows;
        console.log(allBooks);
      };
      fetchBooks();
    } catch (e) {}
  }, []);

  return (
    <div className={classes.row}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.posters}>
        {DUMMY_DATA.map((book, i) => (
          <Link to={`/books/${book.book_id}`} key={book.book_id}>
            <img
              className={classes.poster}
              src="https://i.pinimg.com/564x/35/66/dc/3566dc24c327c144d18dffbac7145d28.jpg"
              key={i}
            />
            <h4 className={classes.bookTitle}>{book.book_name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookList;
