import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Edit from "../../components/honda/Edit";
import { fetchAll } from "../../components/DexieDatabase";


const Honda = () => {
    const [hondas, setHondas] = useState([]);
    const [msg, setMsg] = useState("Data ready");

    const router = useRouter();

    useEffect(() => {
        const loadHondaData = async () => {
            try {
                const [hondaData, ProjectData, unitData] = await Promise.all([fetchAll("honda"), fetchAll("project"), fetchAll("unit")]);
                const data = hondaData.map(h => {
                    const matchProject = ProjectData.find(p => parseInt(p.id) === parseInt(h.project_id));
                    const matchUnit = unitData.find(u => parseInt(u.id) === parseInt(h.unit_id));
                    return {
                        ...h,
                        project: matchProject.name,
                        unit: matchUnit.nm_en
                    }
                })
                console.log(data);
                setHondas(data || []); 
            } catch (error) {
                console.log(`Error loading honda data: ${error}`);
            }
        };
        loadHondaData();
    }, [msg]);


    const msgHandler = (data) => {
        setMsg(data);
    }

    const goDetailPage = (id) => {
        sessionStorage.setItem("hondaId", id);
        router.push("/hondalocation");
    }



    return (
        <Layout Title="Honda">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Honda</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>


                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Registration</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Reg_dt</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Chassis</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Engine</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Cc</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Seat</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Made_year</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Status</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Project</th>
                                <th className="text-end border-b border-gray-200 px-4 py-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hondas.length ? hondas.map((honda, i) => {
                                    return (
                                        <tr className={`border-b border-gray-200 ${honda.status === '0' ? 'text-red-500' : 'text-black'}`} key={honda.id}>
                                            <td className="text-center py-2 px-4">{i + 1}</td>
                                            <td className="text-center py-2 px-4">{honda.registration}</td>
                                            <td className="text-center py-2 px-4">{honda.reg_dt}</td>
                                            <td className="text-center py-2 px-4">{honda.chassis}</td>
                                            <td className="text-center py-2 px-4">{honda.engine}</td>
                                            <td className="text-center py-2 px-4">{honda.cc}</td>
                                            <td className="text-center py-2 px-4">{honda.seat}</td>
                                            <td className="text-center py-2 px-4">{honda.made_year}</td>
                                            <td className="text-center py-2 px-4">{honda.status}</td>
                                            <td className="text-center py-2 px-4">{honda.unit}</td>
                                            <td className="text-center py-2 px-4">{honda.project}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={honda.id} />
                                                <button onClick={() => goDetailPage(honda.id)} title="Edit" className="w-8 h-8 rounded-full hover:bg-gray-200 mr-1 flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                    </svg>
                                                </button>
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
export default Honda;
