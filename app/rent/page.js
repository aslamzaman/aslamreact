"use client";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { BtnSubmit, DropdownEn, TextDt } from "@/components/Form";
import { formatedDate, formatedDateDot } from "@/lib/utils";

require("@/app/fonts/SUTOM_MJ-normal");
require("@/app/fonts/SUTOM_MJ-bold");



const dtAdd15Days = (d1) => {
  const dt1 = new Date(d1);
  const dt2 = dt1.getTime() + (15 * 24 * 60 * 60 * 1000);
  return formatedDate(new Date(dt2));
}



const rentFormate = ({ doc }, m, y, dt) => {

  doc.addImage("/images/formats/rent1.png", "PNG", 0, 0, 210, 297);
  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(16);
  doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 53.5, null, null, "left");
  doc.setFontSize(14);
  doc.text(`${formatedDateDot(dt, true)}`, 150, 34, null, null, "left");
  doc.text(`- ${m} ${y}`, 15, 106, null, null, "left");
  doc.text(`${m} ${y} gv‡mi evwo`, 174.347, 105, null, null, "center");


  //------------------------------------------------------------------
  doc.addPage("a4", "p");
  doc.addImage("/images/formats/rent2.png", "PNG", 0, 0, 210, 297);
  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(16);
  doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 25, 53.246, null, null, "left");
  doc.setFontSize(14);
  doc.text(formatedDateDot(dt), 175, 35.173, null, null, "left");
  doc.text(`${formatedDateDot(dt, true)}`, 50, 59, null, null, "left");
  doc.text(`${formatedDateDot(dtAdd15Days(dt), true)}`, 150, 59, null, null, "center");

  doc.text(`- ${m} ${y}`, 15, 112, null, null, "left");
  doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm`, 167, 110, null, null, "center");

  //--------------------------------------------------------------------
  doc.addPage("a4", "p");
  doc.addImage("/images/formats/rent3.png", "PNG", 0, 0, 210, 297);

  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(16);
  doc.text(formatedDateDot(dt, true), 175, 41.75, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${m} ${y} gv‡mi evwo fvov I M¨vm wej`, 30, 70, null, null, "left");
  doc.text(`- ${m} ${y} evwo fvov`, 30, 77, null, null, "left");

}




const Houserent = () => {
  const [msg, setMsg] = useState("");
  const [dt, setDt] = useState("");
  const [mnth, setMnth] = useState("Rvbyqvix");
  const [yr, setYr] = useState("");


  useEffect(() => {
    setDt(formatedDate(new Date()));
    const d = new Date();
    const d2 = d.getFullYear();
    setYr(d2);
  }, [msg])



  const createHouseRent = (e) => {
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
      rentFormate({ doc }, mnth, yr, dt);
      doc.save(new Date().toISOString() + "-House rent.pdf");
      setMsg("");
    }, 0);
  }


  return (
    <>
      <div className="w-full mb-3 mt-8">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">House Rent</h1>
        <p className="w-full text-center text-lg text-blue-300">&nbsp;{msg}&nbsp;</p>
      </div>


      <div className="w-full lg:w-3/4 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
        <div className="w-full p-4">
          <form onSubmit={createHouseRent}>
            <div className="grid grid-cols-1 gap-2 my-2">
              <TextDt Title="Date" Id="dt" Change={(e) => setDt(e.target.value)} Value={dt} />
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
            <BtnSubmit Title="Create Pdf" Class="bg-blue-600 hover:bg-blue-800 text-white" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Houserent;