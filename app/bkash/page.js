"use client";
import React, { useState, useEffect } from "react";
import { BtnSubmit, DropdownEn, TextDt } from "@/components/Form";
import Add from "@/components/bkash/Add";
import Edit from "@/components/bkash/Edit";
import Delete from "@/components/bkash/Delete";
import { jsPDF } from "jspdf";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDate, formatedDateDot,  inwordBangla, sortArray } from "@/lib/utils";
require("@/app/fonts/SUTOM_MJ-normal");
require("@/app/fonts/SUTOM_MJ-bold");
import { localStorageGetItem } from "@/lib/DatabaseLocalStorage";


const Bkash = () => {
    const [bkashs, setBkashs] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");

    const [dt, setDt] = useState('');
    const [staff, setStaff] = useState('');
    const [total, setTotal] = useState(0);
    const [staffs, setStaffs] = useState([]);


    useEffect(() => {
        const load = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [staffs, posts] = await Promise.all([
                    getDataFromFirebase("staff"),
                    getDataFromFirebase("post")
                ]);


                const joinCollection = staffs.map(staff => {
                    return {
                        ...staff,
                        post: posts.find(post => post.id === staff.postId) || {}
                    }
                });
                const scStaff = joinCollection.filter(staff => staff.placeId === '6BtqRhIrKQ776jyywIC8');
                const sortedData = scStaff.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
                setStaffs(sortedData);
                //--------------------------------------------------------------------
                const data = localStorageGetItem("bkash");
                const result = data.sort((a, b) => sortArray(b.id, a.id));
                setBkashs(result);
                //-----------------------------------------------------------------------
                const grandTotal = data.reduce((t, c) => t + parseInt(c.taka), 0);
                setTotal(grandTotal);
                setWaitMsg('');
            } catch (error) {
                console.log(error);
            }
        };
        load();
        setDt(formatedDate(new Date()));
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    const handleCreate = async (e) => {
        e.preventDefault();
        setWaitMsg("Please wait...");

        const data = localStorageGetItem("bkash");
        if (data.length < 1) {
            setWaitMsg("No data to creating bkash.");
            return false;
        }

        try {
            setTimeout(() => {
                const doc = new jsPDF({
                    orientation: 'p',
                    unit: 'mm',
                    format: 'a4',
                    putOnlyUsedFonts: true,
                    floatPrecision: 16 // or "smart", default is 16
                });

                //--------------------------------------------------------------------

                doc.addImage("/images/formats/bkash.png", "PNG", 0, 0, 210, 297);
                doc.setFont("SutonnyMJ", "normal");
                doc.setFontSize(16);
                //doc.line(20,37,190,37); // horizontal line
                doc.setFont("SutonnyMJ", "normal");
                doc.text(`${formatedDateDot(dt)}`, 100, 55.5, null, null, "left");
                doc.setFontSize(16);

                let y = 85;
                let y1 = y;
                let t = 0;
                doc.setFont("SutonnyMJ", "bold");
                doc.line(20, y - 16, 190, y - 16); // horizontal line
                doc.line(20, y - 8, 190, y - 8); // horizontal line
                doc.text("µwgK bs", 32, y - 10, null, null, "center");
                doc.text("BDwbU", 65, y - 10, null, null, "left");
                doc.text("UvKv", 180, y - 10, null, null, "right");

                doc.setFont("SutonnyMJ", "normal");
                for (let i = 0; i < data.length; i++) {
                    doc.text(`${i + 1}`, 32, y - 2, null, null, "center");
                    doc.text(`${data[i].nmUnit}`, 65, y - 2, null, null, "left");
                    doc.text(`${data[i].taka}/-`, 180, y - 2, null, null, "right");
                    t = t + parseInt(data[i].taka);
                    doc.line(20, y, 190, y); // horizontal line
                    y = y + 8;
                }
                doc.line(20, y, 190, y); // horizontal line

                doc.line(20, y1 - 16, 20, y); // vertical line
                doc.line(45, y1 - 16, 45, y); // vertical line
                doc.line(145, y1 - 16, 145, y); // vertical line
                doc.line(190, y1 - 16, 190, y); // vertical line
                doc.setFont("SutonnyMJ", "bold");
                doc.text("†gvU UvKv", 65, y - 2, null, null, "left");
                doc.text(`${t}/-`, 180, y - 2, null, null, "right");
                doc.setFont("SutonnyMJ", "normal");
                doc.text(`UvKv K_vqt- ${inwordBangla(t)} UvKv gvÎ`, 20, y + 8 - 2, null, null, "left");


                doc.text(`${staff.split(",")[0]}`, 20, y + 42, null, null, "left");
                doc.text(`${staff.split(",")[1]}`, 20, y + 48, null, null, "left");
                doc.text(`wmGgBGm`, 20, y + 54, null, null, "left");

                //--------------------------------------------------------------------

                doc.save(new Date().toISOString() + "-Bkash.pdf");
                setWaitMsg("");
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }






    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Bkash Bill</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className="w-full p-4 border-2 shadow-md rounded-md">
                    <form onSubmit={handleCreate}>
                        <div className="grid grid-cols-1 gap-2 my-2">
                            <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
                            <DropdownEn Title="Staff" Id="staff" Change={e => setStaff(e.target.value)} Value={staff}>
                                {staffs.length ? staffs.map(staff => <option value={`${staff.nmBn},${staff.post.nmBn}`} key={staff.id}>{staff.nmEn}</option>) : null}
                            </DropdownEn>
                        </div>
                        <div className="w-full flex justify-start">
                            <BtnSubmit Title="Create PDF" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </div>
                    </form>
                </div>


                <div className="w-full lg:col-span-2 p-4 border-2 shadow-md rounded-md overflow-auto">
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Taka</th>
                                <th className="w-[100px] font-normal">
                                    <div className="w-full flex justify-end mt-1 pr-[3px] lg:pr-2">
                                        <Add message={messageHandler} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bkashs.length ? bkashs.map(bkash => {
                                    return (
                                        <tr className="border-b border-gray-200 hover:bg-gray-100" key={bkash.id}>
                                            <td className="text-center py-2 px-4 font-sutonnyN">{bkash.nmUnit}</td>
                                            <td className="text-center py-2 px-4 font-sutonnyN">{bkash.taka}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit message={messageHandler} id={bkash.id} data={bkash} />
                                                <Delete message={messageHandler} id={bkash.id} data={bkash} />
                                            </td>
                                        </tr>
                                    )
                                })
                                    : null
                            }

                            <tr className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                                <td className="text-center py-2 px-4 font-sutonnyN">†gvU</td>
                                <td className="text-center py-2 px-4 font-sutonnyN">{total}</td>
                                <td className="flex justify-end items-center mt-1"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    );
};

export default Bkash;



