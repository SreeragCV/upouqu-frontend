import React from 'react'
import PdfViewer from '../components/pdfViewer/PdfViewer'
import withAuth from '../HOC/withAuth'

function ReadBook() {
  return (
    <div>
      <PdfViewer/>
    </div>
  )
}

export default withAuth(ReadBook)
