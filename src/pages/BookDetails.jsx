import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetailsComponent from "../components/BookDetailsComponent/BookDetailsComponent";

function BookDetails() {
  const params = useParams();
  const [fetchBookDetails, setFetchBookDetails] = useState("");
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    try {
      const callingBookDetails = async () => {
        const response = await axios.get(
          `http://localhost:8080/books/${params.id}`
        );
        const book = response.data.bookDetails;
        const user = response.data.userDetails;
        setFetchBookDetails(book);
        setUserDetails(user);
      };
      callingBookDetails();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(fetchBookDetails);

  return (
    <div className="mt-36">
      {fetchBookDetails && (
        <BookDetailsComponent
          bookDetails={fetchBookDetails}
          userDetails={userDetails}
        />
      )}
    </div>
  );
}

export default BookDetails;
