import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import classes from "./PdfViewer.module.css";

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [data, setData] = useState("");

  const params = useParams();

  useEffect(() => {
    async function fetchBook() {
      const response = await axios.get(
        `http://localhost:8080/books/${params.id}`
      );
      const book = response.data.bookDetails;
      setData(book);
    }

    fetchBook();
  }, []);

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {data && (
        <div className={classes.container}>
          {data && numPages && (
            <div className={classes.title}>
              <h1>{data.book_name.toUpperCase()}</h1>
            </div>
          )}
          <div className={classes.pdfContainer}>
            <Document file={data.pdf_url} onLoadSuccess={onDocumentSuccess}>
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page, i) => {
                  return (
                    <>
                      <p>{i + 1}</p>
                      <Page
                        key={i}
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        />
                    </>
                  );
                })}
            </Document>
          </div>
        </div>
      )}
    </>
  );
}

export default PdfViewer;
