import React, { useEffect, useState } from "react";
import BookForm from "../components/BookForm/BookForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomError from "./CustomError";

function EditBook() {
  const params = useParams();
  const id = params.id;
  const [fetchBookDetails, setFetchBookDetails] = useState("");
  const data = useSelector((state) => state.auth)
console.log(fetchBookDetails);

  useEffect(() => {
    try {
      const callingBookDetails = async () => {
        const response = await axios.get(
          `http://localhost:8080/books/${id}`
        );
        const book = response.data.bookDetails;
        setFetchBookDetails(book);
      };
      callingBookDetails();
    } catch (e) {
      console.log(e);
    }
  }, []);

  if(!data.isVerified || data.user_id !== fetchBookDetails.user_id){
    return <CustomError title="An Error Occured" message="Page not found" />
  }
  
  return (
    <div>
      {data.isVerified && data.user_id === fetchBookDetails.user_id && <BookForm method="PATCH" value={fetchBookDetails} />}
    </div>
  );
}

export default EditBook;
