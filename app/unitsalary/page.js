"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/unitsalary/Add";
import Edit from "@/components/unitsalary/Edit";
import Delete from "@/components/unitsalary/Delete";
import Print from "@/components/unitsalary/Print";
import { numberWithComma } from "@/lib/utils";
import { staffData, totalSallary } from "@/helpers/unitsalaryHelpers";



const Unitsalary = () => {
    const [unitsalarys, setUnitsalarys] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");

    const [total, setTotal] = useState('0');



    useEffect(() => {

        const loadData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const staff = await staffData();
                const totalTaka = await totalSallary();
                setUnitsalarys(staff);
                setTotal(totalTaka);
                console.log({ staff, totalTaka })
                setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
                setMsg("Failed to fetch data");
            }
        };
        loadData();

    }, [msg]);



    const messageHandler = (data) => {
        setMsg(data);
    }



    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-4xl font-bold text-center text-blue-700">Unit Salary: {numberWithComma(parseFloat(total))}/-</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>

            <div className="w-full overflow-auto">
                <p className="w-full text-sm text-red-700">{msg}</p>
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                            <th className="text-start border-b border-gray-200 px-4 py-2">Staff</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Arear</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Sal1</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Sal2</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                            <th className="w-[100px] font-normal">
                                <div className="w-full flex justify-end space-x-1 py-0.5">
                                    <Add message={messageHandler} />
                                    <Print data={unitsalarys} message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {unitsalarys.length ? (
                            unitsalarys.map((unitsalary, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={unitsalary.id}>
                                    <td className="text-center py-2 px-4">{i + 1}</td>
                                    <td className="text-start py-2 px-4"><span className="font-bold">Employee Id: {unitsalary.staff.empId}</span><br />{unitsalary.staff.nmEn} ({unitsalary.staff.post.nmEn})</td>
                                    <td className="text-center py-2 px-4">{unitsalary.staff.unit.nmEn}</td>
                                    <td className="text-center py-2 px-4">{unitsalary.arear}</td>
                                    <td className="text-center py-2 px-4">{unitsalary.sal1}</td>
                                    <td className="text-center py-2 px-4">{unitsalary.sal2}</td>
                                    <td className="text-center py-2 px-4 font-sutonnyN">{unitsalary.remarks}</td>
                                    <td className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                        <Edit message={messageHandler} id={unitsalary.id} data={unitsalary} />
                                        <Delete message={messageHandler} id={unitsalary.id} data={unitsalary} />
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
                    </tbody>
                </table>
            </div>

        </>
    );

};

export default Unitsalary;


