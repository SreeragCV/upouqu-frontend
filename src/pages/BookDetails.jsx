import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailsComponent from "../components/BookDetailsComponent/BookDetailsComponent";
import CustomError from "./CustomError";

function BookDetails() {
  const params = useParams();
  const [fetchBookDetails, setFetchBookDetails] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    const callingBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/books/${params.id}`
        );
        const book = response.data.bookDetails;
        setFetchBookDetails(book);
      } catch (error) {
        console.log("Error fetching book details:", error.message);
        setError(error);
      }
    };
    callingBookDetails();
  }, []);

  if(error && !fetchBookDetails){
    return <CustomError/>
  }
  
  return (
    <>
      <div>
        {fetchBookDetails && (
          <BookDetailsComponent bookDetails={fetchBookDetails} />
        )}
      </div>
    </>
  );
}

export default BookDetails;
