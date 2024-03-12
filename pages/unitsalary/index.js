import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/unitsalary/Add";
import Edit from "../../components/unitsalary/Edit";
import Delete from "../../components/unitsalary/Delete";
import Print from "../../components/unitsalary/Print";
import { fetchAll } from "../../components/DexieDatabase";
import { Lib } from "@/utils/Lib";


const Unitsalary = () => {
    const [unitsalarys, setUnitsalarys] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [totalTaka, setTotalTaka] = useState("");


    useEffect(() => {
        const loadUnitsalaryData = async () => {
            try {
                const [unitsalaryData, staffData] = await Promise.all([fetchAll("unitsalary"), fetchAll("staff")]);
                const result = unitsalaryData.map(u => {
                    const matchStaff = staffData.find(s => parseInt(s.id) === parseInt(u.staff_id));
                    
                    return {
                        ...u,
                        staff: matchStaff.nm_en

                    }
                })
                console.log(result)
                setUnitsalarys(result ? result : []);
       


                const tt = result.reduce((a, c)=>parseFloat(a)+ (parseFloat(c.arear)+parseFloat(c.sal1)+parseFloat(c.sal2)),0);
                setTotalTaka(tt);



            } catch (error) {
                console.log(`Error loading unitsalary data: ${error}`);
            }
        };
        loadUnitsalaryData();
    }, [msg]);


    const msgHandler = (data) => {
        setMsg(data);
    }


    return (
        <Layout Title="Unit Salary">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Unit Salary={Lib.util.numberWithCommas(totalTaka)} </h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Staff</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Arear</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Salary-1</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Salary-2</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                unitsalarys.length ? unitsalarys.map((unitsalary, i) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={unitsalary.id}>
                                            <td className="text-center py-2 px-4">{i+1}</td>
                                            <td className="text-center py-2 px-4">{unitsalary.staff}</td>
                                            <td className="text-center py-2 px-4">{unitsalary.arear}</td>
                                            <td className="text-center py-2 px-4">{unitsalary.sal1}</td>
                                            <td className="text-center py-2 px-4">{unitsalary.sal2}</td>
                                            <td className="text-center py-2 px-4">{unitsalary.remarks}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={unitsalary.id} />
                                                <Delete Msg={msgHandler} Id={unitsalary.id} />
                                            </td>
                                        </tr>
                                    )
                                })
                                    : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );

};
export default Unitsalary;
