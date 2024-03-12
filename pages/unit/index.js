import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/unit/Add";
import Edit from "../../components/unit/Edit";
import Delete from "../../components/unit/Delete";
import Print from "../../components/unit/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Unit = () => {
    const [units, setUnits] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadUnitData = async () => {
            try {
                const unitData = await fetchAll("unit");
                console.log(unitData)
                setUnits(unitData || []);
            } catch (error) {
                console.log(`Error loading unit data: ${error}`);
            }
        };
        loadUnitData();

        let log = sessionStorage.getItem("login");
        if (log === "login") {
            setUser(true);
        } else {
            setUser(false);
        }


    }, [msg]);


    const msgHandler = (data) => {
        setMsg(data);
    }

const dd = ()=>{
    const ss= [];
    for(let i=0; i< units.length;i++){
        for(let p =0; p < 2000; p++){console.log(p)}
        let obj = {
            id: Date.now(),
            nm_en:units[i].nm_en,
            nm_bn: units[i].nm_bn
        }
        ss.push(obj);
    }
    console.log(ss);
}
    return (
        <Layout Title="Unit">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Unit</h1>
            </div>
<button onClick={dd}>Click</button>
            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">English Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Bangla Name</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                units.length ? units.map((unit,i) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={unit.id}>
                                            <td className="text-center py-2 px-4">{i+1}. {unit.nm_en}</td>
                                            <td className="text-center py-2 px-4 font-SutonnyMJ_Regular">{unit.nm_bn}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={unit.id} />                                                
                                                {user?<Delete Msg={msgHandler} Id={unit.id} />:null}
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
export default Unit;
