import classes from "./BookList.module.css";
import DUMMY_DATA from "../../data/DUMMY_DATA";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookList({ title, url, genrePage }) {
  const [fetchBooks, setFetchBooks] = useState([]);

  useEffect(() => {
    try {
      if (url) {
        const fetchBooks = async () => {
          const response = await axios.get(url);
          const data = response.data;
          const allBooks = data.books.rows;
          const firstTwentyBooks = allBooks.slice(0, 20);
          setFetchBooks(firstTwentyBooks);
        };
        fetchBooks();
      }
    } catch (e) {}
  }, []);

  return (
    <div className={genrePage ? classes.genreRow : classes.row}>
      <Link>
        {genrePage && <img src="https://images.unsplash.com/photo-1518898053858-dcb49207fb75?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes.genreImage} alt="" />}
        <h2 className={genrePage ? classes.genrePageTitle : classes.title}>
          {title}
        </h2>
      </Link>
      <div className={classes.posters}>
        {fetchBooks &&
          !genrePage &&
          fetchBooks.length > 0 &&
          fetchBooks.map((book, i) => (
            <Link to={`/books/${book.book_id}`} key={book.book_id}>
              <img className={classes.poster} src={book.image_url} key={i} />
              <h4 className={classes.bookTitle}>
                {book.book_name.toUpperCase()}
              </h4>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BookList;
