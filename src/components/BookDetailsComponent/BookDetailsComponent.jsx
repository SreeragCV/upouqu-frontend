import React, { useState } from "react";
import classes from "./BookDetailsComponent.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal";
import img from "../../assets/chat.png";

function BookDetailsComponent({ bookDetails }) {
  const [showMore, setShowMore] = useState(false);
  const data = useSelector((state) => state.auth);
  const currentUser = bookDetails.user_id === data.user_id;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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
        toast.success("Book deleted successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate("/books");
      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleLogin() {
    navigate("/login");
  }

  function openModal() {
    setShowModal(true);
  }

  function removModal() {
    setShowModal(false);
  }

  function editBook() {
    navigate(`/books/${bookDetails.book_id}/edit`);
  }

  return (
    <>
      {showModal && (
        <Modal
          className="text-center text-xl justify-center items-center"
          open={showModal}
        >
          <span
            className="absolute font-extrabold top-2 right-3 cursor-pointer"
            onClick={removModal}
          >
            &times;
          </span>
          <div className=" mt-32 font-medium text-2xl">
            <h3 className="mb-1">You must login to read books...</h3>
            <p
              className=" text-cyan-800 p-1 cursor-pointer"
              onClick={handleLogin}
            >
              login here
            </p>
          </div>
        </Modal>
      )}
      {bookDetails && (
        <div className={classes.top}>
          <div className={classes.container}>
            <div className={classes.card}>
              <img
                className={classes.image}
                src={bookDetails.image_url}
                alt=""
              />
              <div className={classes.author}>
                <p className={classes.full_name}>by {bookDetails.full_name}</p>
                <img src={img} alt="" />
              </div>
              <div className={classes.btnDiv}>
                {data && data.isVerified ? (
                  <button
                    onClick={() =>
                      window.open(
                        `/books/${bookDetails.book_id}/read`,
                        "_blank"
                      )
                    }
                    className={classes.button}
                  >
                    <span>Read</span>
                  </button>
                ) : (
                  <button onClick={openModal} className={classes.button}>
                    <span>Read</span>
                  </button>
                )}
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
        </div>
      )}
    </>
  );
}

export default BookDetailsComponent;
