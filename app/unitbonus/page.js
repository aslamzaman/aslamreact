"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/unitbonus/Add";
import Edit from "@/components/unitbonus/Edit";
import Delete from "@/components/unitbonus/Delete";
import Print from "@/components/unitbonus/Print";
import { numberWithComma } from "@/lib/utils";
import { UnitbonusHelper } from "@/helpers/unitBonusHelpers";

const Unitbonus = () => {
    const [unitbonuss, setUnitbonuss] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");

    const [total, setTotal] = useState('0');


    useEffect(() => {

        const loadData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const helpers = await UnitbonusHelper();
                // console.log({ helpers });
                setUnitbonuss(helpers.data);
                setTotal(helpers.total);
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
                <h1 className="w-full text-xl lg:text-4xl font-bold text-center text-blue-700">Unit Staff Bonus: {numberWithComma(parseFloat(total))}/-</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div className="w-full px-2 overflow-auto">
                <p className="w-full text-sm text-red-700">{msg}</p>
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                            <th className="text-start border-b border-gray-200 px-4 py-2">Staff</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Bonus</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                            <th className="w-[100px] font-normal">
                                <div className="w-full flex justify-end space-x-1 py-0.5">
                                    <Add message={messageHandler} />
                                    <Print data={unitbonuss} message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {unitbonuss.length ? (
                            unitbonuss.map((bonus, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={bonus.id}>
                                    <td className="text-center py-2 px-4">{i + 1}</td>
                                    <td className="text-start py-2 px-4"><span className="font-bold">Employee Id: {bonus.staff.empId}</span><br />{bonus.staff.nmEn} ({bonus.staff.post.nmEn})</td>
                                    <td className="text-center py-2 px-4">{bonus.staff.unit.nmEn}</td>
                                    <td className="text-center py-2 px-4">{bonus.bonus}</td>
                                    <td className="text-center py-2 px-4 font-sutonnyN">{bonus.remarks}</td>
                                    <td className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                        <Edit message={messageHandler} id={bonus.id} data={bonus} />
                                        <Delete message={messageHandler} id={bonus.id} data={bonus} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-10 px-4">
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

export default Unitbonus;


