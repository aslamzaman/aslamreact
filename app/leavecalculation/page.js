"use client";
import React, { useState, useEffect } from "react";
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

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });

        doc.setFont("SutonnyMJ", "normal");
        doc.setFontSize(14);
        doc.text("Aslam Zaman", 10, 10, null, null, "left");
        doc.text("Aslam Zaman", 10, 20, null, null, "left");
        doc.text("Aslam Zaman", 10, 30, null, null, "left");
        doc.text("Aslam Zaman", 10, 40, null, null, "left");
        const x = doc.output('datauristring');
       
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', x);
        iframe.setAttribute('width', '500px');
        iframe.setAttribute('height', '300px');
        iframe.setAttribute('style', 'margin-left: auto; margin-right: auto; margin-bottom:50px');
        document.body.appendChild(iframe);
       
        console.log(x);

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

                </div>
            </div>
        </>
    )
};
export default Leavecalculation;

