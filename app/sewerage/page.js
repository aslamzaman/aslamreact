"use client";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

require("@/app/fonts/SUTOM_MJ-normal");
require("@/app/fonts/SUTOM_MJ-bold");

import { TextNum, DropdownEn, BtnSubmit, TextDt } from "@/components/Form";
import { numberWithComma, inwordBangla, formatedDate, formatedDateDot } from "@/lib/utils";

const dtAdd15Days = (d1) => {
  const dt1 = new Date(d1);
  const dt2 = dt1.getTime() + (15 * 24 * 60 * 60 * 1000);
  return formatedDate(new Date(dt2));
}


const Sewerage = {

  Page1({ doc }, m, y, tk, dt) {
    doc.addImage("/images/formats/sewerage_1.png", "PNG", 0, 0, 210, 297);
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(14);
    doc.text(formatedDateDot(dt, true), 150, 33.5, null, null, "left");
    doc.text(`- ${m} ${y}`, 15, 108.25, null, null, "left");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 132, 108.25, null, null, "right");

    // TOR
    doc.text(`${m} ${y} cvwb I`, 174.347, 108.25, null, null, "center");
    doc.text(`bv‡g ${numberWithComma(parseFloat(tk))}/- UvKvi`, 174.347, 155, null, null, "center");

    doc.setFont("SutonnyMJ", "bold");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 132, 218, null, null, "right");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`${inwordBangla(tk)} UvKv gvÎ`, 60, 226.144, null, null, "left");

  },
  Page2({ doc }, m, y, tk, dt) {
    doc.addImage("/images/formats/sewerage_2.png", "PNG", 0, 0, 210, 297);
    doc.setFontSize(14);
    doc.text(formatedDateDot(dt, true), 172, 35.173, null, null, "left");
    doc.text(`${formatedDateDot(dt, true)}`, 50, 59.304, null, null, "left");
    doc.text(`${formatedDateDot(dtAdd15Days(dt), true)}`, 135.293, 59.304, null, null, "center");
    doc.text(`- ${m} ${y}`, 15, 115.25, null, null, "left");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 132, 115.25, null, null, "right");

    // TOR
    doc.text(`${m} ${y} cvwb I`, 167, 115.25, null, null, "center");
    doc.text(`bv‡g ${numberWithComma(parseFloat(tk))}/- UvKvi`, 167, 150, null, null, "center");

    doc.setFont("SutonnyMJ", "bold");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 132, 226.803, null, null, "right");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`${inwordBangla(tk)} UvKv gvÎ`, 40, 239.429, null, null, "left");

  },
  Go({ doc }, m, y, tk, dt) {
    doc.addImage("/images/formats/sewerage_3.png", "PNG", 0, 0, 210, 297);
 
    doc.setFontSize(16);
    doc.text(`${formatedDateDot(dt, true)}`, 174, 42, null, null, "left");

    doc.text(`- ${m} ${y} `, 30, 77, null, null, "left");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 130, 77, null, null, "right");

    doc.setFont("SutonnyMJ", "bold");
    doc.text(`${numberWithComma(parseFloat(tk))}/-`, 130, 187, null, null, "right");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`${inwordBangla(tk)} UvKv gvÎ`, 56, 196, null, null, "left");
  }
}




const Sewerage_page = () => {
  const [msg, setMsg] = useState("");
  const [tk, setTk] = useState("1673");
  const [mnth, setMnth] = useState("Rvbyqvix");
  const [yr, setYr] = useState("2024");
  const [dt, setDt] = useState("");



  useEffect(() => {
    setDt(formatedDate(new Date()));
    const d = new Date();
    const d2 = d.getFullYear();
    setYr(d2);
  }, [msg])



  const createSewerage = (e) => {
    e.preventDefault();
    setMsg("Please wait...");
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    setTimeout(() => {
      Sewerage.Page1({ doc }, mnth, yr, tk, dt);
      doc.addPage("a4", "p");
      Sewerage.Page2({ doc }, mnth, yr, tk, dt);
      doc.addPage("a4", "p");
      Sewerage.Go({ doc }, mnth, yr, tk, dt);
      doc.save(new Date().toISOString() + "_Sewerage_Bill.pdf");
      setMsg("");
    }, 0);
  }



  return (
    <>
      <div className="w-full mb-3 mt-8">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Sewerage Bill</h1>
        <p className="w-full text-center text-lg text-blue-300">&nbsp;{msg}&nbsp;</p>
      </div>


      <div className="w-full lg:w-3/4 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
        <div className="w-full p-4">
          <form onSubmit={createSewerage}>
            <div className="grid grid-cols-1 gap-2 my-2">
              <TextDt Title="Date" Id="dt" Change={(e) => setDt(e.target.value)} Value={dt} />
              <TextNum Title="Taka" Id="tk" Change={(e) => { setTk(e.target.value) }} Value={tk} Class="" />
              <DropdownEn Title="Select Month" Id="mnth" Change={(e) => { setMnth(e.target.value) }} Value={mnth}>
                <option value="Rvbyqvix">January</option>
                <option value="†deªæqvix">February</option>
                <option value="gvP©">March</option>
                <option value="GwcÖj">April</option>
                <option value="†g">May</option>
                <option value="Ryb">June</option>
                <option value="RyjvB">July</option>
                <option value="AvMó">August</option>
                <option value="†m‡Þ¤^i">September</option>
                <option value="A‡±vei">October</option>
                <option value="b‡f¤^i">November</option>
                <option value="wW‡m¤^i">December</option>
              </DropdownEn>

              <DropdownEn Title="Select Year" Id="yr" Change={(e) => { setYr(e.target.value) }} Value={yr}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </DropdownEn>
            </div>
            <div className="w-full flex justify-start">
              <BtnSubmit Title="Create Pdf" Class="bg-blue-600 hover:bg-blue-800 text-white" />
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Sewerage_page;