"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/land/Add";
import Edit from "@/components/land/Edit";
import Delete from "@/components/land/Delete";
// import Print from "@/components/land/Print";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDateDot, sortArray } from "@/lib/utils";
import Detail from "@/components/land/Detail";
import Print from "@/components/land/Print";



const Land = () => {
    const [allLands, setAllLands] = useState([]);
    const [lands, setLands] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");
    const [total, setTotal] = useState(0);
    const [gt, setGt] = useState(0);




    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromFirebase("land");
                setAllLands(data);
                console.log(data)
                const rtcData = data.filter(rtc => rtc.school === 'RTC');
                const sortedData = rtcData.sort((a, b) => sortArray(a.unit, b.unit));
                console.log(sortedData);

                setLands(sortedData);
                setWaitMsg('');
                //--------------------------------
                const rtcTotal = rtcData.reduce((t, c) => t + parseFloat(c.qty), 0);
                const gtTotal = data.reduce((t, c) => t + parseFloat(c.qty), 0);
                setTotal(rtcTotal);
                setGt(gtTotal);


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Land</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>



            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <Print data={allLands} />
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-1">SL</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Unit</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Qty</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">RegDt</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Donors</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Remarks</th>
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={lands} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {lands.length ? (
                            lands.map((land, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={land.id}>
                                    <td className="text-center py-1 px-4">{i + 1}</td>
                                    <td className="text-center py-1 px-4">{land.unit}</td>
                                    <td className="text-center py-1 px-4">{land.qty}</td>
                                    <td className="text-center py-1 px-4">{formatedDateDot(land.regDt, true)}</td>
                                    <td className="text-center py-1 px-4">{land.donors}</td>
                                    <td className="text-center py-1 px-4">{land.remarks}</td>
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={land.id} data={land} />
                                            <Delete message={messageHandler} id={land.id} data={land} />
                                            <Detail data={allLands} unitName={land.unit} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="text-center py-10 px-4">
                                    Data not available.
                                </td>
                            </tr>
                        )}

                        <tr className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                            <td className="text-center py-1 px-4"></td>
                            <td className="text-center py-1 px-4">Total Land</td>
                            <td colSpan="5" className="text-start py-1 px-4">RTC: {total.toFixed(2)} decimal;  Grand Total: {gt.toFixed(2)} decimal</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );

};

export default Land;

