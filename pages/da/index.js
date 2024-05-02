import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/da/Add";
import Edit from "../../components/da/Edit";
import Delete from "../../components/da/Delete";
import { fetchAll } from "../../components/DexieDatabase";


const Da = () => {
    const [das, setDas] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadDaData = async () => {
            try {

                const [daData, posts] = await Promise.all([fetchAll("da"), fetchAll("post")]);
                const result = daData.map(d=>{
                    const matchUnit = posts.find(p=>parseInt(p.id)===parseInt(d.post_id));
                    return {
                        ...d,
                        post: matchUnit.nm_en
                    }
                })
                console.log(result);
                setDas(result || []);
            } catch (error) {
                console.log(`Error loading da data: ${error}`);
            }
        };
        loadDaData();

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
        <Layout Title="Da">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">DA</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Post</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Tk</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />                   
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                das.length ? das.map((da) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={da.id}>
                                            <td className="text-center py-2 px-4">{da.post}</td>
                                            <td className="text-center py-2 px-4">{da.tk}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={da.id} />                                                
                                                {user ?  <Delete Msg={msgHandler} Id={da.id} /> : null}
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
export default Da;
