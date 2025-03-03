"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/staffresign/Add";
import Edit from "@/components/staffresign/Edit";
import Delete from "@/components/staffresign/Delete";
// import Print from "@/components/staffresign/Print";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



const Staffresign = () => {
    const [staffresigns, setStaffresigns] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [staffresigns, staffs] = await Promise.all([
                    getDataFromFirebase("staffresign"),
                    getDataFromFirebase("staff")
                ]);


                const joinCollection = staffresigns.map(staffresign => {
                    return {
                        ...staffresign,
                        staff: staffs.find(staff => staff.id === staffresign.staffId) || {}
                    }
                });

                const sortedData = joinCollection.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
                console.log(sortedData)
                setStaffresigns(sortedData);
                setWaitMsg('');
            } catch (err) {
                console.log(err);
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
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Staff Resign</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>



            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-1">Staff</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Date</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Cause</th>
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={staffresigns} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffresigns.length ? (
                            staffresigns.map(staffresign => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={staffresign.id}>
                                    <td className="text-center py-1 px-4">{staffresign.staff.nmEn}</td>
                                    <td className="text-center py-1 px-4">{staffresign.dt}</td>
                                    <td className="text-center py-1 px-4">{staffresign.cause}</td>
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={staffresign.id} data={staffresign} />
                                            <Delete message={messageHandler} id={staffresign.id} data={staffresign} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-10 px-4">
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

export default Staffresign;

