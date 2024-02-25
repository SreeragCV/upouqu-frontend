import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    } catch (e) {}
  }, []);

  return (
    <div className="mt-24">
      {fetchBookDetails && <h1>{fetchBookDetails.book_name}</h1>
      
      }
    </div>
  );
}

export default BookDetails;
