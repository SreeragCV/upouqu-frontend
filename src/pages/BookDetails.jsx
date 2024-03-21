import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailsComponent from "../components/BookDetailsComponent/BookDetailsComponent";

function BookDetails() {
  const params = useParams();
  const [fetchBookDetails, setFetchBookDetails] = useState("");

  useEffect(() => {
    try {
      const callingBookDetails = async () => {
        const response = await axios.get(
          `http://localhost:8080/books/${params.id}`
        );
        const book = response.data.bookDetails;
        setFetchBookDetails(book);
      };
      callingBookDetails();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className=" mt-28">
      {fetchBookDetails && (
        <BookDetailsComponent
          bookDetails={fetchBookDetails}
        />
      )}
    </div>
  );
}

export default BookDetails;
