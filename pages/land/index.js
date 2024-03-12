import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { fetchAll } from "../../components/DexieDatabase";
import { Lib } from "../../utils/Lib";
import { useRouter } from "next/router";
import { BtnEn } from "@/components/Form";

const Land = () => {
    const [lands, setLands] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [total, setTotal] = useState("0");

    const router = useRouter();



    useEffect(() => {
        const loadLandData = async () => {
            try {
                const [landData, unit] = await Promise.all([fetchAll("land"), fetchAll("unit")]);

                //  Filtering SAC and SC deduct from list and Unit wise lands quantity and total age of unit 
                const targetUnitId = [1699882797821, 1699882798135, 1699882798426, 1699882798771, 1699882799056, 1699882799331, 1699882799603, 1699882799878, 1699882800154, 1699882800430, 1699882800705, 1699882801034, 1699882801321, 1699882801598, 1699882801871, 1699882802141, 1699882802416, 1699882802685, 1699882802954, 1699882803235, 1699882803505, 1699882803780, 1699882804055, 1699882804335, 1699882804612, 1699882804882];
                const result = unit
                    .filter(u => targetUnitId.includes(parseInt(u.id)))
                    .map(u => {
                        const matchLand = landData.filter(land => land.unit_id === u.id);
                        const totalLand = matchLand.reduce((t, c) => t + parseFloat(c.qty), 0);
                        const findRegDt = landData.find(land => land.unit_id === u.id && land.school === 'RTC');

                        return {
                            ...u,
                            totalQty: totalLand,
                            regDt: findRegDt ? findRegDt.reg_dt : null,
                            age: findRegDt ? Lib.util.Age(findRegDt.reg_dt) : 0
                        }
                    })



                setLands(result || []);

                // Grand total of land
                const total_Land = landData.reduce((t, c) => t + parseFloat(c.qty), 0);
                setTotal(total_Land);



            } catch (error) {
                console.log(`Error loading land data: ${error}`);
            }

        };
        loadLandData();
    }, [msg]);


    const msgHandler = (data) => {
        setMsg(data);
    }


    const goDetailPage = (id) => {
        sessionStorage.setItem("unitId", id);
        router.push("/landdetails");
    }


    return (
        <Layout Title="Land">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Land</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Qty</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Reg_dt</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Age</th>
                                <th className="text-end border-b border-gray-200 px-4 py-2">Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lands.length ? lands.map((land) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={land.id}>
                                            <td className="text-center py-2 px-4">{land.nm_en}</td>
                                            <td className="text-center py-2 px-4">{land.totalQty}</td>
                                            <td className="text-center py-2 px-4">{land.regDt}</td>
                                            <td className="text-center py-2 px-4">{land.age}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <BtnEn Title="Detail" Click={() => goDetailPage(land.id)} Class="bg-gray-400 hover:bg-gray-500 text-white" />
                                            </td>
                                        </tr>
                                    )

                                })
                                    : null
                            }
                            <tr className="border-b border-gray-200 font-bold">
                                <td className="text-center py-2 px-4">Total</td>
                                <td className="text-center py-2 px-4">{parseFloat(total).toFixed(2)}</td>
                                <td className="text-center py-2 px-4"></td>
                                <td className="text-center py-2 px-4"></td>
                                <td className="flex justify-end items-center mt-1">

                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );

};
export default Land;
