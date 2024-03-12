import React, { useState } from "react";
import classes from "./BookDetailsComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PdfViewer from "../pdfViewer/PdfViewer";

function BookDetailsComponent({ bookDetails, userDetails }) {
  const [showMore, setShowMore] = useState(false);
  const [read, setRead] = useState(false)
  const data = useSelector((state) => state.auth);
  const currentUser = userDetails.user_id === data.user_id;
  const navigate = useNavigate();

  function openBook(){
    setRead(read => !read)
  }

  async function deleteHandler(id) {
    try {
      const proceed = window.confirm(
        "Are you sure you want to delete this book?"
      );
      const token = localStorage.getItem("token");
      if (proceed) {
        const deleteBook = await axios.delete(
          `http://localhost:8080/book/${id}`,
          {
            headers: {
              token,
            },
          }
        );
        navigate("/books");
      }
    } catch (e) {
      console.log(e);
    }
  }

  function editBook(){
    navigate(`/books/${bookDetails.book_id}/edit`)
  }

  console.log(bookDetails.pdf_url);

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
                <button onClick={openBook} className={classes.button}>
                  <span>{read ? "Close" : "Read"}</span>
                </button>
                <button className={classes.button}>
                  <span>Save</span>
                </button>
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
                  <button
                    onClick={() => deleteHandler(bookDetails.book_id)}
                    className={classes.deleteBtn}
                  >
                    <i class="fa fa-trash-o" style={{ fontSize: "18px" }}></i>
                    Delete
                  </button>
                  <button onClick={editBook} className={classes.updateBtn}>
                    <i class="fa fa-edit" style={{ fontSize: "18px" }}></i>
                    Update
                  </button>
                </div>
              )}
            </p>
          </div>
          {read ? <PdfViewer file={bookDetails.pdf_url}/> : null}
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
