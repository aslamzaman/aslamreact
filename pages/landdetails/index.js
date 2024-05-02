import React, { useState, useEffect } from "react";
import { fetchAll } from "../../components/DexieDatabase";
import { Close } from "@/components/Icons";
import { useRouter } from "next/router";


const Landdetails = () => {
    const [lands, setLands] = useState([]);

    const [unit, setUnit] = useState([]);
    const [total, setTotal] = useState("0");
    const router = useRouter();

    useEffect(() => {
        const loadLandData = async () => {
            try {
                const unitId = sessionStorage.getItem("unitId");
                const [landData, units] = await Promise.all([fetchAll("land"), fetchAll("unit")]);

                // setup unit name
                const matchUnit = units.find(u => parseInt(u.id) === parseInt(unitId));
                setUnit(matchUnit);


                const MatchOneUnitLand = landData.filter(l => parseInt(l.unit_id) === parseInt(unitId));
                setLands(MatchOneUnitLand || []);
                console.log(MatchOneUnitLand)

                // Grand total of land
                const total_Land = MatchOneUnitLand.reduce((t, c) => t + parseFloat(c.qty), 0);
                setTotal(total_Land);
            } catch (error) {
                console.log(`Error loading land data: ${error}`);
            }

        };
        loadLandData();
    }, []);

    const goBackHandler = () => {
        router.push("/land");
    }

    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Unit: {unit.nm_en} = {parseFloat(total).toFixed(2)} Decimal</h1>
                        <Close Click={goBackHandler} Size="w-8 h-8" />

                    </div>

                    <div className="px-6 pb-6 text-black">
                        <table className="w-full border border-gray-200">
                            <thead>
                                <tr className="w-full bg-gray-200">
                                    <th className="text-start border-b border-gray-200 px-4 py-2">School</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lands.length ? lands.map((land) => {
                                        return (
                                            <tr className="border-b border-gray-200" key={land.id}>
                                                <td className="text-start py-2 px-4">
                                                    {land.school === 'RTC' ? (<span className="font-bold">School Name: {land.school}</span>) : (<span>School Name: {land.school}</span>)}<br />
                                                    Land (Decimal): {land.qty}<br />
                                                    Registration Date: {land.reg_dt}<br />
                                                    Donors: {land.donors}<br />
                                                    <span className="text-xs text-gray-400">{land.remarks}</span>
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
            </div>

        </>
    )
}
export default Landdetails;
