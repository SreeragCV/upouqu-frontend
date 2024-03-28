import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm/BookForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomError from "./CustomError";
import BookEditForm from "../components/BookEditForm/BookEditForm";

function EditBook() {
  const params = useParams();
  const id = params.id;
  const [fetchBookDetails, setFetchBookDetails] = useState("");
  const data = useSelector((state) => state.auth);
  const [error, setError] = useState();

  useEffect(() => {
    const callingBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        const book = response.data.bookDetails;
        setFetchBookDetails(book);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    callingBookDetails();
  }, []);

  if (!data.isVerified && data.user_id !== fetchBookDetails.user_id) {
    return <CustomError title="An Error Occured" message="Page not found" />;
  }

  return (
    <div className="my-24 mx-4">
      {error && <CustomError/>}
      {data.isVerified && data.user_id === fetchBookDetails.user_id && !error && (
        <BookEditForm value={fetchBookDetails} />
      )}
    </div>
  );
}

export default EditBook;
