import React from "react";
import { Form } from "react-router-dom";

function BookForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark mt-6 mb-0">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Submit your book!
        </h2>
        <form
          method="POST"
          className="flex flex-col"
          encType="multipart/form-data"
        >
          <input
            name="book_name"
            placeholder="Book Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
            name="genre"
            placeholder="Genre"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
            name="price"
            placeholder="Price"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <textarea
            placeholder="Description"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="description"
          ></textarea>
          <label htmlFor="book">Book (pdf)</label>
          <input
            name="book"
            id="book"
            placeholder="book"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
            accept="application/pdf"
          />
          <label htmlFor="image">Cover Image</label>
          <input
            id="image"
            name="image"
            placeholder="image"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="file"
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
