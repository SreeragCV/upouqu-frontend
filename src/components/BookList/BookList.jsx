import classes from "./BookList.module.css";
import DUMMY_DATA from "../../data/DUMMY_DATA";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomError from "../../pages/CustomError";
import Modal from "../Modal/Modal";

function BookList({ title }) {
  const [fetchBooks, setFetchBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (title) {
      const fetchBooks = async () => {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8080/book/genres", {
          params: {
            genre: title,
          },
        });
        const data = response.data;
        const allBooks = data.books.rows;
        const firstTwentyBooks = allBooks.slice(0, 20);
        return firstTwentyBooks;
      };
      fetchBooks()
        .then((res) => setFetchBooks(res))
        .catch((e) => {
          setIsLoading(false);
          setError(e);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  if (error) {
    return <CustomError />;
  }

  return (
      <div className={classes.row}>
        <Link>
          <h2 className={classes.title}>{title}</h2>
        </Link>
        {!isLoading && fetchBooks.length < 1 && (
          <p className={classes.noBookPara}>No books available...</p>
        )}
        {isLoading && <div className={classes.loader}></div>}
        <div className={classes.posters}>
          {!isLoading &&
            fetchBooks &&
            fetchBooks.length > 0 &&
            fetchBooks.map((book, i) => (
              <Link to={`/books/${book.book_id}`} key={book.book_id}>
                <img
                  loading="lazy"
                  className={classes.poster}
                  src={book.image_url}
                  key={i}
                />
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
