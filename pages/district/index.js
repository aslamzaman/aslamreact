import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/district/Add";
import Edit from "../../components/district/Edit";
import Delete from "../../components/district/Delete";
import Print from "../../components/district/Print";
import { fetchAll } from "../../components/DexieDatabase";


const District = () => {
    const [districts, setDistricts] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadDistrictData = async () => {
            try {
                const districtData = await fetchAll("district");
                console.log(districtData)
                setDistricts(districtData || []);
            } catch (error) {
                console.log(`Error loading district data: ${error}`);
            }
        };
        loadDistrictData();

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
        <Layout Title="District">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">District</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Bn_name</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                districts.length ? districts.map((district) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={district.id}>
                                            <td className="text-center py-2 px-4">{district.name}</td>
                                            <td className="text-center py-2 px-4">{district.bn_name}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={district.id} />                                                
                                                {user?<Delete Msg={msgHandler} Id={district.id} />:null}              
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
export default District;
