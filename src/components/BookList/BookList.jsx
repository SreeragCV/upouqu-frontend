import classes from "./BookList.module.css";
import DUMMY_DATA from "../../data/DUMMY_DATA";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookList({ title, url }) {
  const [fetchBooks, setFetchBooks] = useState([]);

  useEffect(() => {
    try {
      const fetchBooks = async () => {
        const response = await axios.get(url);
        const data = response.data;
        const allBooks = data.books.rows;
        const firstTwentyBooks = allBooks.slice(0, 20);
        setFetchBooks(firstTwentyBooks);
      };
      fetchBooks();
    } catch (e) {}
  }, []);

  console.log(fetchBooks);

  return (
    <div className={classes.row}>
      <Link>
        <h2 className={classes.title}>{title}</h2>
      </Link>
      <div className={classes.posters}>
        {fetchBooks &&
          fetchBooks.length > 0 &&
          fetchBooks.map((book, i) => (
            <Link to={`/books/${book.book_id}`} key={book.book_id}>
              <img className={classes.poster} src={book.image_url} key={i} />
              <h4 className={classes.bookTitle}>{book.book_name.toUpperCase()}</h4>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BookList;
