

import pdfDoc from ".././assets/pdf.pdf";
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdfDoc} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}