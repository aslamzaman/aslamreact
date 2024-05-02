import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/ta/Add";
import Edit from "../../components/ta/Edit";
import Delete from "../../components/ta/Delete";
import { fetchAll } from "../../components/DexieDatabase";


const Ta = () => {
    const [tas, setTas] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadTaData = async () => {
            try {
                const [taData, units] = await Promise.all([fetchAll("ta"), fetchAll("unit")]);
                const result = taData.map(t => {
                    const matchUnit = units.find(u => parseInt(u.id) === parseInt(t.unit_id));
                    return {
                        ...t,
                        unit: matchUnit.nm_en
                    }
                })
                console.log(result);
                setTas(result || []);
            } catch (error) {
                console.log(`Error loading ta data: ${error}`);
            }
        };
        loadTaData();

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


    return (
        <Layout Title="Ta">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">TA</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Tk</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tas.length ? tas.map((ta, i) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={ta.id}>
                                            <td className="text-center py-2 px-4">{i + 1}. {ta.unit}</td>
                                            <td className="text-center py-2 px-4">{ta.tk}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={ta.id} />
                                                {user ? <Delete Msg={msgHandler} Id={ta.id} /> : null}
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
export default Ta;
