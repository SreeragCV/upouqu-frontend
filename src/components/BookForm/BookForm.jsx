import React, { useState } from "react";
import axios from "axios";
import Errors from "../../pages/Error";
import { isNumber } from "../../utils/validations";

function BookForm() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [bookPdf, setBookPdf] = useState("");
  const [serverError, setServerError] = useState("");
  const [fileError, setFileError] = useState();
  const [didEdit, setDidEdit] = useState({
    name: false,
    genre: false,
    price: false,
    description: false,
  });

  const nameIsInvalid = didEdit.name && name === "";
  const genreIsInvalid = didEdit.genre && genre === "";
  const priceIsInvalid = didEdit.price && !isNumber(price);
  const descriptionIsInvalid = didEdit.description && description === "";

  const disableButton =
    name === "" ||
    genre === "" ||
    price === "" ||
    description === "" ||
    !isNumber(price);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      let fileErrors = {};

      if (!image || !image.type.startsWith("image/")) {
        console.log("hello");
        fileErrors.image = "Choose a proper image ( .jpg, .png, .jpeg etc...)";
      }

      if (!bookPdf || bookPdf.type !== "application/pdf") {
        console.log("pdf");
        fileErrors.pdf = "Choose a proper pdf (eg- .pdf)";
      }

      if (Object.keys(fileErrors).length > 0) {
        return setFileError(fileErrors);
      }

      const formData = new FormData();
      formData.append("book_name", name);
      formData.append("genre", genre);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("book", bookPdf);
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8080/contribute",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data", token: token },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e);
      if (!e.status === 422) {
        setServerError(e);
      }
    }
  };

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: true,
      };
    });
  }

  if (serverError) {
    return <Errors />;
  }

  console.log(fileError);

  return (
    <div className="flex flex-col items-center justify-center h-screen dark mt-6 mb-0">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Submit your book!
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            name="book_name"
            placeholder="Book Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  name: false,
                };
              });
            }}
            onBlur={() => handleBlur("name")}
          />
          {nameIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">Enter a valid book name</p>
          ) : null}

          <select
            name="genre"
            placeholder="genre"
            className="bg-gray-700 text-gray-200 mt-4 border-0 rounded-md p-3 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => {
              setGenre(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  genre: false,
                };
              });
            }}
            onBlur={() => handleBlur("genre")}
          >
            <option value="">--genre--</option>
            <option value="horror">horror</option>
            <option value="comedy">comdey</option>
            <option value="psychology">psychology</option>
            <option value="philosophy">philosophy</option>
          </select>
          {genreIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">Enter a valid genre</p>
          ) : null}

          <input
            name="price"
            placeholder="Price"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mt-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  price: false,
                };
              });
            }}
            onBlur={() => handleBlur("price")}
          />
          {priceIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">Price must be a number</p>
          ) : null}

          <textarea
            placeholder="Description"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mt-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
              setDidEdit((prevEdit) => {
                return {
                  ...prevEdit,
                  description: false,
                };
              });
            }}
            onBlur={() => handleBlur("description")}
          ></textarea>
          {descriptionIsInvalid ? (
            <p className="mt-1 text-sm text-red-500">
              Enter a valid description
            </p>
          ) : null}

          <label className="mt-4" htmlFor="book">
            Book (pdf)
          </label>
          <input
            name="book"
            id="book"
            placeholder="book"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
            onChange={(e) => setBookPdf(e.target.files[0])}
          />
          {fileError && fileError.pdf ? (
            <p className="mt-1 text-sm text-red-500">{fileError.pdf}</p>
          ) : null}

          <label className="mt-4" htmlFor="image">
            Cover Image
          </label>
          <input
            id="image"
            name="image"
            placeholder="image"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {fileError && fileError.image ? (
            <p className="mt-1 text-sm text-red-500">{fileError.image}</p>
          ) : null}

          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
            disabled={disableButton}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
