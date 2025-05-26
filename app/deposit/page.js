"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/deposit/Add";
import Edit from "@/components/deposit/Edit";
import Delete from "@/components/deposit/Delete";
import { getDataFromIndexedDB } from "@/lib/DatabaseIndexedDB";
import { formatedDate, inwordEnglish, numberWithComma, titleCamelCase } from "@/lib/utils";
import { jsPDF } from "jspdf";
import { set, del } from "idb-keyval";


const initialData = [
    {
        "id": 1748235535742,
        "name": "Eassy Dhaka (Ground Floor)",
        "bank": "Modhumoti Bank PLC. Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235663022,
        "name": "Weber Power Solution (First Floor)",
        "bank": "United Commercial Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235728117,
        "name": "Weber Power Solution (First Floor)",
        "bank": "United Commercial Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235766117,
        "name": "Weber Power Solution (Second Floor)",
        "bank": "United Commercial Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235801557,
        "name": "Weber Power Solution (Second Floor)",
        "bank": "United Commercial Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235856869,
        "name": "Globe Forwarding & Freight (Fourth Floor)",
        "bank": "Dhaka Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235882941,
        "name": "Zepto Engineering Services  (Fifth Floor)",
        "bank": "Shahjalal Islami Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    },
    {
        "id": 1748235904077,
        "name": "Zepto Engineering Services  (Fifth Floor)",
        "bank": "Shahjalal Islami Bank PLC Uttara Branch",
        "cheque": "",
        "dt": formatedDate(new Date()),
        "tk": ""
    }
]




const Deposit = () => {
    const [deposits, setDeposits] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("");

    const [gt, setGt] = useState("");




    useEffect(() => {
        const load = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromIndexedDB("deposit");
                const result = data.sort((a, b) => parseInt(b.id) > parseInt(a.id) ? -1 : 1);
                console.log(result)
                const total = result.reduce((t, c) => t + parseFloat(c.tk), 0);
                setGt(total);
                setDeposits(result);
                setWaitMsg('');
            } catch (error) {
                console.log(error);
            }
        };
        load();
    }, [msg]);




    const messageHandler = (data) => {
        setMsg(data);
    }



    const printHandler = async () => {
        if (deposits.length < 1) {
            setWaitMsg("No data found!");
            return false;
        }

        setWaitMsg("Please wait...");

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16
        });
        doc.setFont("times", "normal");
        doc.setFontSize(10);
        doc.addImage("/images/chairman/cheque_deposit_slip_1.png", "PNG", 0, 0, 210, 297);
        doc.text(`${formatedDate(new Date())}`, 196.5, 61.5, null, null, "right");


        let y = 81;
        doc.line(19.7, 62.9, 196.5, 62.9); // Horizontal line
        doc.line(19.7, 76.3, 196.5, 76.3); // Horizontal line
        for (let i = 0; i < deposits.length; i++) {
            doc.text(`${i + 1}`, 23, y, null, null, "center");
            doc.text(`${deposits[i].name}`, 27.25, y, { maxWidth: 37, align: 'left' });
            doc.text(`${deposits[i].bank}`, 92, y, { maxWidth: 52, align: 'center' });
            doc.text(`${deposits[i].cheque}`, 133, y, null, null, "center");
            doc.text(`${deposits[i].dt}`, 159, y, null, null, "center");
            doc.text(`${numberWithComma(deposits[i].tk)}`, 194, y, null, null, "right");
            doc.line(19.7, y + 6.5, 196.5, y + 6.5); // Horizontal line
            y = y + 12

        }
        doc.line(19.7, 62.9, 19.7, y + 2);
        doc.line(25.8, 62.9, 25.8, y + 2);
        doc.line(66.2, 62.9, 66.2, y + 2);
        doc.line(118.9, 62.9, 118.9, y + 2);
        doc.line(147.3, 62.9, 147.3, y + 2);
        doc.line(171, 62.9, 171, y + 2);
        doc.line(196.5, 62.9, 196.5, y + 2);


        doc.line(19.7, y + 2, 196.5, y + 2); // Horizontal line for Total
        doc.setFont("times", "bold");
        doc.text("Total", 27.25, y - 1, null, null, "left");
        doc.text(`${numberWithComma(gt)}`, 194, y - 1, null, null, "right");
        doc.setFont("times", "normal");
        doc.text(`In-Word: ${titleCamelCase(inwordEnglish(gt))} Only`, 19, y + 7, null, null, "left");


        doc.text("Depositor:", 19, y + 20, null, null, "left");

        doc.text("Signature:", 19, y + 40, null, null, "left");
        doc.text("Name: Aslam Zaman", 19, y + 45.5, null, null, "left");
        doc.text("Address: House# 5/4, Block -F, Lalmatia, Dhaka -1207", 19, y + 51, null, null, "left");
        doc.text("Mobile Number: 01720025151", 19, y + 56.5, null, null, "left");
        doc.text("NID Number: 779 602 1652", 19, y + 62, null, null, "left");
        doc.text("Relationship With A/C Holder: Service", 19, y + 67.5, null, null, "left");
        doc.text("Source of Fund: House Rent", 19, y + 73, null, null, "left");


        doc.save(new Date().toISOString() + "-Deposit_Slip.pdf");
    }



    const initialDataHandler = async () => {
        try {
            await del("deposit");
            await set("deposit", initialData);
            setMsg(`Data added successfully. ${Date.now()}`);
        } catch (err) {
            console.error(err);

        }

    }




    return (
        <>
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Deposit</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div className="w-full bg-white border-2 border-gray-200 p-4 shadow-md rounded-md">
                <div className="w-full overflow-auto">
                    <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
                    <button onClick={initialDataHandler}>Initial Data</button>
                    <div className="w-full flex justify-end">

                    </div>
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                                <th className="text-start border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Cheque</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Date</th>
                                <th className="text-end border-b border-gray-200 px-4 py-2">Taka</th>
                                <th className="w-[100px] font-normal">
                                    <div className="w-full flex justify-end items-center pr-2.5 font-normal">
                                        <button onClick={printHandler}>Print</button>
                                        <Add message={messageHandler} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                deposits.length ? deposits.map((deposit, i) => {
                                    return (
                                        <tr className="border-b border-gray-200 hover:bg-gray-100" key={deposit.id}>
                                            <td className="text-center py-2 px-4">{i + 1}</td>
                                            <td className="text-start py-2 px-4">{deposit.name}<br />{deposit.bank}</td>
                                            <td className="text-center py-2 px-4">{deposit.cheque}</td>
                                            <td className="text-center py-2 px-4">{deposit.dt}</td>
                                            <td className="text-end py-2 px-4">{numberWithComma(deposit.tk)}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit message={messageHandler} id={deposit.id} data={deposit} />
                                                <Delete message={messageHandler} id={deposit.id} data={deposit} />
                                            </td>
                                        </tr>
                                    )
                                })
                                    : null
                            }
                            <tr className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                                <td className="text-center py-2 px-4"></td>
                                <td className="text-start py-2 px-4">Total</td>
                                <td className="text-center py-2 px-4"></td>
                                <td className="text-center py-2 px-4"></td>
                                <td className="text-end py-2 px-4">{numberWithComma(gt)}</td>
                                <td className="flex justify-end items-center mt-1">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Deposit;

