import React, {useState, useRef } from 'react'
import { jsPDF } from "jspdf";
import Layout from "../../components/Layout";

require("../../utils/fonts/SUTOM_MJ-bold");
require("../../utils/fonts/SUTOM_MJ-normal");


import { BtnEn } from "../../components/Form";


const Format = () => {
  const pdfRef = useRef();


  const leaveHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/leave.png", "PNG", 0, 0, 210, 297);
    doc.save(`Leave-Format-${Date.now()}`);
  }

  const LocaltaHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/localta.png", "PNG", 0, 0, 210, 297);
    doc.save(`Local-TA-${Date.now()}`);
  }

  const tabillHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/tabill.png", "PNG", 0, 0, 210, 297);
    doc.save(`TA-Bill-${Date.now()}`);

  }

  const bayprostab = () => {

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/bayprostab1.png", "PNG", 0, 0, 210, 297);
    doc.addPage("a4", "p");
    doc.addImage("/images/formats/bayprostab2.png", "PNG", 0, 0, 210, 297);
    doc.addPage("a4", "p");
    doc.addImage("/images/formats/bayprostab3.png", "PNG", 0, 0, 210, 297);
    doc.save(`Bayprostab-Format-${Date.now()}`);

  }

  const go = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/go.png", "PNG", 0, 0, 210, 297);
    doc.save(`GO-Format-${Date.now()}`);

  }

  const tourPlan = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/tourplan1.png", "PNG", 0, 0, 210, 297);
    doc.addPage("a4", "p");
    doc.addImage("/images/formats/tourplan2.png", "PNG", 0, 0, 210, 297);
    doc.save(`Tour-Plan-${Date.now()}`);
  }

  const tourExecution = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/tourexecution1.png", "PNG", 0, 0, 210, 297);
    doc.addPage("a4", "p");
    doc.addImage("/images/formats/tourexecution2.png", "PNG", 0, 0, 210, 297);
    doc.save(`Tour-Execution-${Date.now()}`);
  }

  const localMovement = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/localmovement.png", "PNG", 0, 0, 297, 210);
    doc.save(`Local-Movement-${Date.now()}`);
  }

  const gatePassHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/gatepass.png", "PNG", 0, 0, 210, 297);
    doc.save(`Gate-Pass-${Date.now()}`);
  }

  const chalanHandler = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/challan.png", "PNG", 0, 0, 297, 210);
    doc.save(`Challan-Format-${Date.now()}`);

  }

  const SlipPadHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/slippad.png", "PNG", 0, 0, 210, 297);
    doc.save(`Slip-Pad-${Date.now()}`);
  }

  const bearer = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/bearer.png", "PNG", 0, 0, 210, 297);
    doc.save(`Bearer-Cheque-Format-${Date.now()}`);
  }

  const torUnit = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.addImage("/images/formats/unittor.png", "PNG", 0, 0, 210, 297);
    doc.save(`TOR-Unit-${Date.now()}`);
  }

  const requisitionHandler = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    doc.addImage("/images/formats/requisition.png", "PNG", 0, 0, 297, 210);
    doc.save(`Requisition-Format-${Date.now()}`);
  }




  return (
    <Layout>
      <div className='w-full my-12'>
        <h1 className='w-full text-center text-5xl font-bold text-gray-500'>Format</h1>      
      </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          <BtnEn Title="Leave" Click={leaveHandler} Class="bg-blue-500 hover:bg-blue-600 text-white" />
          <BtnEn Title="Local TA Bill" Click={LocaltaHandler} Class="bg-gray-500 hover:bg-gray-600 text-white" />
          <BtnEn Title="TA Bill" Click={tabillHandler} Class="bg-blue-400 hover:bg-blue-600 text-white" />
          <BtnEn Title="Bayprostab" Click={bayprostab} Class="bg-green-400 hover:bg-green-600 text-white" />
          <BtnEn Title="GO Format" Click={go} Class="bg-red-400 hover:bg-red-600 text-white" />
          <BtnEn Title="Tour Plan" Click={tourPlan} Class="bg-red-700 hover:bg-red-900 text-white" />
          <BtnEn Title="Tour Execution" Click={tourExecution} Class="bg-teal-600 hover:bg-teal-800 text-white" />
          <BtnEn Title="Local Movement" Click={localMovement} Class="bg-gray-800 hover:bg-gray-900 text-white" />
          <BtnEn Title="Gate Pass" Click={gatePassHandler} Class="bg-indigo-700 hover:bg-gray-900 text-white" />
          <BtnEn Title="Chalan" Click={chalanHandler} Class="bg-teal-700 hover:bg-teal-900 text-white" />
          <BtnEn Title="Slip Pad" Click={SlipPadHandler} Class="bg-teal-700 hover:bg-teal-900 text-white" />
          <BtnEn Title="Bearer" Click={bearer} Class="bg-teal-700 hover:bg-teal-900 text-white" />
          <BtnEn Title="TorUnit" Click={torUnit} Class="bg-green-700 hover:bg-green-900 text-white" />
          <BtnEn Title="Requisition" Click={requisitionHandler} Class="bg-gray-500 hover:bg-gray-600 text-white" />
        </div>   
    </Layout>
  )
}

export default Format;