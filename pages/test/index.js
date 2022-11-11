import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { asLib } from "../../util/asLib";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const TestPage = () => {
  const [tests, setTests] = useState([]);





  useEffect(() => {
    setTests(asLib.cmes.doc);
    console.log(asLib.cmes.doc);
  }, []);



  const dd = () => {
    const data = tests.map((t, i) => [i + 1, t.picurl, t.unit]);
    console.log(data);

    const doc = new jsPDF()

let lw = 0.25;
let lc = 100;
let fs = 11;
let tc = [0,0,0];

    autoTable(doc, {
      startY: 80,
      tableLineWidth: lw,
      tableLineColor: lc,
      columnStyles: {
        0: {
          halign: 'center',
          cellWidth: 14,
          fontSize: fs,
          lineColor: lc,
          lineWidth: lw,
          textColor: tc
        },
        1: {
          halign: 'left',
          cellWidth: 100,
          fontSize: fs,
          lineColor: lc,
          lineWidth: lw,
          textColor: tc
        },
        2: {
          halign: 'right',
          fontSize: fs,          
          lineColor: lc,
          lineWidth: lw,
          textColor: tc

        },
      },
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontSize: 18,
        halign: 'center',
        lineColor: lc,
        lineWidth: lw,
        textColor: tc
      },

      head: [['ID', 'Url', 'Unit']],
      body: data,
      theme: 'grid',
    })



    doc.save('table.pdf')




  }


  return (
    <>
      <Header Title="Test" />



      <button onClick={dd}>Click me</button>
    </>
  );


};
export default TestPage;
