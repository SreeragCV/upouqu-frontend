import React, { useState } from "react";
import axios from "axios";

function BookForm() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [bookPdf, setBookPdf] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("book_name", name);
    formData.append("genre", genre);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("book", bookPdf);
    console.log(image);
    console.log(bookPdf);
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8080/contribute",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data", token: token },
      }
    );
  };

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
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="genre"
            placeholder="Genre"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            name="price"
            placeholder="Price"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="book">Book (pdf)</label>
          <input
            name="book"
            id="book"
            placeholder="book"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
            onChange={(e) => setBookPdf(e.target.files[0])}
          />
          <label htmlFor="image">Cover Image</label>
          <input
            id="image"
            name="image"
            placeholder="image"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
