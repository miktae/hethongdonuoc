import React from 'react';
import pdf1File from '../../public/Thang1.pdf';
import pdf2File from '../../public/Thang2.pdf';
import pdf3File from '../../public/Thang3.pdf';
import './pdfview.css'

function PDFContent(props) {
  return (
    <div className="pdf-content">
      <embed src={ props.month == "2023-01" ?
        pdf1File : (props.month == "2023-02" ?
        pdf2File : (props.month == "2023-03" ?
        pdf3File : null))}
        type="application/pdf" 
        width="100%" height="800px" />
      </div>
  )
}
export default PDFContent;