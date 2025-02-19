"use client";
import React, { useState, useEffect, useRef } from "react";
import { TextNum, BtnSubmit } from "@/components/Form";
import { registerEntry, leftSide, rightSide } from "@/helpers/leavecalculation";
import { jsPDF } from "jspdf";
require("@/public/fonts/SUTOM_MJ-normal");
require("@/public/fonts/SUTOM_MJ-bold");


const Leavecalculation = () => {
    const [req, setReq] = useState(2);
    const [cl, setCl] = useState(16);
    const [el, setEl] = useState(18);

    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState({ color: "blue" });
    const [url, setUrl] = useState("/images/formats/leave.png");

    const pageRef = useRef();

    useEffect(() => {
        setResult("Result");
    }, [])

    const calculateHandler = (e) => {
        e.preventDefault();
        const balanceCl = parseFloat(cl);
        const balanceEl = parseFloat(el);
        const requestedLeave = parseFloat(req);

        const registerBalance = registerEntry(balanceCl, balanceEl, requestedLeave);
        const leftApplicaion = leftSide(balanceCl, balanceEl, requestedLeave);
        const rightApplicaion = rightSide(balanceCl, balanceEl, requestedLeave);

        const st = `Register: ${registerBalance.newBalanceCl}, ${registerBalance.newBalanceEl} ||  Left Side: ${leftApplicaion.consumeCl}, ${leftApplicaion.consumeEl}, ${leftApplicaion.requestedLeave}, ${leftApplicaion.totalConsume} || Right Side: ${rightApplicaion.quarter}, ${rightApplicaion.lastConsume}, ${rightApplicaion.requestedLeave}, ${rightApplicaion.balance}`;
        setResult(st);

        // import { jsPDF } from "jspdf";
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16
        });
        const y = 10;
        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.line(70, 5, 70, 42);
        doc.line(5, 11, 150, 11);

        doc.text("PjwZ eQ‡i †fvMK…Z QywUi cÖK…wZ:", 5, y, null, null, "left");
        doc.text("ˆbwgwËK QywU       =", 5, y + 7, null, null, "left");
        doc.text("AwR©Z QywU       =", 5, y + 14, null, null, "left");
        doc.text("Av‡e`bK…Z QywU  =", 5, y + 21, null, null, "left");
        doc.text("†gvU QywU  =", 5, y + 29, null, null, "left");
        //-------------------------------------------------------------------

        doc.text("w`b", 60, y + 7, null, null, "left");
        doc.text("w`b", 60, y + 14, null, null, "left");
        doc.text("w`b", 60, y + 21, null, null, "left");
        doc.text("w`b", 60, y + 29, null, null, "left");
        //-----------------------------------------
        doc.text("QywUi Z_¨:               ", 150, y, null, null, "right");
        doc.text("1g, 2q, 3q, 4_© †KvqvU©v‡i cÖvc¨ QywU =       w`b", 150, y + 7, null, null, "right");
        doc.text("BwZc~‡e© †fvMK…Z QywU =       w`b", 150, y + 14, null, null, "right");
        doc.text("Av‡e`bK…Z QywU =               w`b", 150, y + 21, null, null, "right");
        doc.text("Aewkó/AwZwi³  QywU =               w`b", 150, y + 29, null, null, "right");

        //----------- Left ----------------------------------------------------------------

        doc.text(`${leftApplicaion.consumeCl}`, 50, y + 7, null, null, "left");
        doc.text(`${leftApplicaion.consumeEl}`, 50, y + 14, null, null, "left");
        doc.text(`${leftApplicaion.requestedLeave}`, 50, y + 21, null, null, "left");
        doc.text(`${leftApplicaion.totalConsume} `, 50, y + 29, null, null, "left");
        // ------------- Right --------------------------------------------
        doc.text(`${rightApplicaion.quarter}`, 142, y + 7, null, null, "right");
        doc.text(`${rightApplicaion.lastConsume}`, 142, y + 14, null, null, "right");
        doc.text(`${rightApplicaion.requestedLeave}`, 142, y + 21, null, null, "right");
        doc.text(`${rightApplicaion.balance}`, 142, y + 29, null, null, "right");




        doc.setFont("times", "normal");
        doc.setFontSize(10);
        doc.text("(CL)", 25, y + 7, null, null, "left");
        doc.text("(EL)", 22, y + 14, null, null, "left");

        doc.line(5, 34, 66, 34);
        doc.line(80, 34, 150, 34);


        doc.setDocumentProperties({ title: "Leave Calculator", subject: "Leave entry calculation", author: "Aslam Zaman", keywords: "leave, calculator, aslam", creator: "aslamreact.web.app" });
        const dataUrlString = doc.output('bloburl');
        console.log(dataUrlString);

        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', dataUrlString);
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('style', 'width:100%; height:300px; border:2px solid red; zoom: 0.70')

        const divRef = pageRef.current;
        divRef.appendChild(iframe);
    }

    return (
        <>
            <div className="w-full my-6 lg:my-10">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Leave Calculation</h1>
            </div>

            <div className="px-4 lg:px-6">
                <div className="w-11/12 md:w-1/2 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="w-full p-4">
                        <p className={`w-full text-center text-xl text-red-700 ${resultColor}`}>{result}</p>
                        <form onSubmit={calculateHandler}>
                            <div className="grid grid-cols-2 gap-4 my-2">
                                <div className="w-full col-span-2">
                                    <TextNum Title="Requested leave (Days)" Id="req" Change={e => setReq(e.target.value)} Value={req} />
                                </div>
                                <TextNum Title="Register CL (Days)" Id="cl" Change={e => setCl(e.target.value)} Value={cl} />
                                <TextNum Title="Register EL (Days)" Id="el" Change={e => setEl(e.target.value)} Value={el} />
                            </div>
                            <div className="w-full flex justify-start">
                                <BtnSubmit Title="Create Pdf" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                            </div>
                        </form>
                    </div>

                    <div ref={pageRef} className="p-4"> </div>

                </div>
            </div>
        </>
    )
};
export default Leavecalculation;

