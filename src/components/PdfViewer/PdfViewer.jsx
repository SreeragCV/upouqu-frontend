import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../../assets/pdf.pdf";

function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function prevPage(){
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)
  }

  function nextPage(){
    setPageNumber(pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1)
  }

  return (
    <div className="flex items-center justify-center mt-24 flex-col">
      <div className="flex items-center">
        <button onClick={prevPage}>left</button>....
        <button onClick={nextPage}>right</button>
      </div>
      <Document file={file} onLoadSuccess={onDocumentSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default PdfViewer;
