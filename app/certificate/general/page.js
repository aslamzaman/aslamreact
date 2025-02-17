"use client";
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
require("@/app/fonts/Lobster-Regular-normal");
require("@/app/fonts/OpenSansCondensed-Light-normal");
import { BtnSubmit, DropdownEn, TextDt, TextEn } from "@/components/Form";
import { formatedDateSlash, formatedDate } from "@/lib/utils";



const CertificateGeneral = () => {
    const [name, setName] = useState("Aslam Zaman");
    const [trade, setTrade] = useState("Computer Technology");
    const [reg, setReg] = useState("CMES-JAL-0001");
    const [period, setPeriod] = useState("11/10/2021 to 22/12/2021");
    const [grade, setGrade] = useState("A+");
    const [dt, setDt] = useState("");

    const [msg, setMsg] = useState("Seclect an excel file");

    useEffect(() => {
        setDt(formatedDate(new Date()));
    }, [msg])


    const createPdfHanler = (e) => {
        e.preventDefault();

        const oldSerial = localStorage.getItem('general_certificate_sl');
        if (oldSerial) {
            const newSerial = parseInt(Date.now() / (60000));
            console.log({ oldSerial, newSerial })
            if (parseInt(oldSerial) === parseInt(newSerial)) {
                setMsg("Please wait a minute to prepare another certificate.");
                return false;
            }
        }
        //-------------------------------------


        const doc = new jsPDF({
            orientation: 'l',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });

        setMsg("Please wait...");

        setTimeout(() => {

            doc.addImage("/images/certificate/Cirtificate_general.png", "PNG", 0, 0, 297, 210);

            doc.setFont("Lobster-Regular", "normal");
            doc.setFontSize(24);
            doc.text(`${name}`, 148.5, 75, null, null, "center");

            doc.setFont("OpenSansCondensed-Light", "normal");
            doc.setFontSize(14);
            doc.text(`Registration no: ${reg}`, 148.5, 81, null, null, "center");

            doc.setFont("Lobster-Regular", "normal");
            doc.setFontSize(17);
            doc.text(`${trade.trim()}`, 162.7, 105, null, null, "center");
            doc.text(`${period.trim()}`, 86.5, 114, null, null, "center");
            doc.text(`${grade.trim()}`, 145, 122, null, null, "center");
            doc.setFontSize(16)
            doc.setFont("Lobster-Regular", "normal");

            doc.setFontSize(12);

            const sl = parseInt(Date.now() / (60000));
            localStorage.setItem('general_certificate_sl', sl);

            doc.text(`${sl}`, 66, 182.25);
            doc.text(`${formatedDateSlash(dt)}`, 194, 182);

            doc.save(`${name.trim()}_${sl}.pdf`);
            setMsg(`Ceritficate Created_${sl}`);
        }, 1000);
    }


    return (
        <>
            <div className="p-4">
                <div className="w-full my-[50px] flex flex-col items-center border border-gray-300 rounded-lg drop-shadow-lg bg-white z-50">
                    <div className="w-full bg-gray-100 border-b rounded-t-lg">
                        <h1 className="py-2.5 text-center font-semibold text-[calc(1.40rem+0.3vw)]">Certificate General</h1>
                    </div>
                    <p className="py-1.5 text-start text-xs font-bold">{msg}</p>
                    <form onSubmit={createPdfHanler} className="w-full p-4">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
                            <TextEn Title="Name" Id="name" Change={e => setName(e.target.value)} Value={name} Chr={150} />
                            <TextEn Title="Trade" Id="trade" Change={e => setTrade(e.target.value)} Value={trade} Chr={150} />
                            <TextEn Title="Registration No (CMES-JAL-0001)" Id="reg" Change={e => setReg(e.target.value)} Value={reg} Chr={150} />
                            <TextEn Title="Period (11/10/2021 to 22/12/2021)" Id="period" Change={e => setPeriod(e.target.value)} Value={period} Chr={150} />
                            <TextEn Title="Grade (A+)" Id="grade" Change={e => setGrade(e.target.value)} Value={grade} Chr={150} />
                            <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
                        </div>
                        <div className="w-full flex justify-start">
                            <BtnSubmit Title="Create Certificate" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CertificateGeneral;