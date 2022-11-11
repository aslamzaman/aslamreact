import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CloudDownload } from "react-bootstrap-icons";
import { saveAs } from "file-saver";


const LocaltaDownload = (props) => {
  const Message = props.DownloadMsg;


  const downloadHandler = () => {
    let localData = localStorage.getItem("localta");
    if (localData) {
      const blob = new Blob([localData], { type: "application/json" });
      saveAs(blob, `${Date.now()}-localta.js`);
      Message("Data download successfully.");
    } else {
      Message("Data not available.");
    }
  }


  return (
    <Button size="sm" variant="success me-2" onClick={downloadHandler} title="Save"><CloudDownload size={15} /></Button>
  );


};
export default LocaltaDownload;
