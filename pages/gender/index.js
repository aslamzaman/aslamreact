import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/gender/Add";
import Edit from "../../components/gender/Edit";
import Delete from "../../components/gender/Delete";
import Print from "../../components/gender/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Gender = () => {
    const [genders, setGenders] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadGenderData = async () => {
            try {
                const genderData = await fetchAll("gender");
                console.log(genderData)
                setGenders(genderData || []);
            } catch (error) {
                console.log(`Error loading gender data: ${error}`);
            }
        };
        loadGenderData();

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
        <Layout Title="Gender">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Gender</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                genders.length ? genders.map((gender) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={gender.id}>
                                            <td className="text-center py-2 px-4">{gender.name}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={gender.id} />                                                
                                                {user?<Delete Msg={msgHandler} Id={gender.id} />:null}
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
export default Gender;
