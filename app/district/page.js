"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/district/Add";
import Edit from "@/components/district/Edit";
import Delete from "@/components/district/Delete";
// import Print from "@/components/district/Print";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



const District = () => {
    const [districts, setDistricts] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromFirebase("district");
                const sortedData = data.sort((a, b) => sortArray(a.nmEn, b.nmEn));
                console.log(sortedData);
                setDistricts(sortedData);
                setWaitMsg('');
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
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">District</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-1">SL</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Name (English)</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Name (Unicode)</th>
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={districts} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {districts.length ? (
                            districts.map((district, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={district.id}>
                                    <td className="text-center py-1 px-4">{i + 1}</td>
                                    <td className="text-center py-1 px-4">{district.nmEn}</td>
                                    <td className="text-center py-1 px-4 font-tiroN">{district.nmUn}</td>
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={district.id} data={district} />
                                            <Delete message={messageHandler} id={district.id} data={district} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center py-10 px-4">
                                    Data not available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );

};

export default District;

