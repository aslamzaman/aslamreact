"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/ta/Add";
import Edit from "@/components/ta/Edit";
import Delete from "@/components/ta/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";


const Ta = () => {
    const [tas, setTas] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [tas, units] = await Promise.all([
                    getDataFromFirebase("ta"),
                    getDataFromFirebase("unit")
                ]);

                const joinCollection = tas.map(ta => {
                    const matchUnit = units.find(unit => unit.id === ta.unitId);
                    return {
                        ...ta,
                        unit: matchUnit,
                        unitName: matchUnit.nmEn
                    }
                });

                const sortedData = joinCollection.sort((a, b) => sortArray(a.unitName.toUpperCase(), b.unitName.toUpperCase()));
                 console.log(sortedData);
                setTas(sortedData);
                setWaitMsg('');;
            } catch (error) {
                console.error("Error fetching data:", error);
                setWaitMsg('Failed to fetch data. Please try again.');
            }
        };
        fetchData();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">TA</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>

            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <p className="w-full text-sm text-red-700">{msg}</p>
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-start border-b border-gray-200 px-4 py-2">Unit</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Taka</th>
                            <th className="w-[100px] font-normal">
                                <div className="w-full flex justify-end py-0.5 pr-4">
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tas.length ? (
                            tas.map((ta, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={ta.id}>
                                    <td className="text-start py-2 px-4">{i + 1}.  {ta.unit.nmEn}</td>
                                    <td className="text-center py-2 px-4">{ta.tk}</td>
                                    <td className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                        <Edit message={messageHandler} id={ta.id} data={ta} />
                                        <Delete message={messageHandler} id={ta.id} data={ta} />
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

export default Ta;


