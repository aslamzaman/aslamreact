import React, { useState } from 'react'
import Layout from "../../components/Layout";
import { BtnEn } from "../../components/Form";
import { recover, recoverDataFromFile } from "../../components/DexieDatabase";

const Recover = () => {
    const [datas, setDatas] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [fileLoad, setFileLoad] = useState(false);



    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.log("Please select a file");
            return;
        }

        try {
            setFileLoad(true);
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                const result = JSON.parse(reader.result);
                setDatas(result);
            };
        } catch (error) {
            console.error("Error parsing file:", error);
        }
    };



    const recoverHandler = async () => {
        if (datas.length < 1) {
            setMsg("Invalid input parameter: Please select a file.");
            return false
        }
        try {
            await recover(datas);
            setMsg("Database recover successfully completed.")
        } catch (error) {
            console.error('Error occurred during database recovery:', error)
        }
    }


    return (
        <Layout Title="Database Recover">
            <p className="w-full text-sm text-red-700">{msg}</p>
            <input type="file" onChange={fileChangeHandler} className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" accept="application/json" />
            <BtnEn Click={recoverHandler} Title="Uplaoad File" Class="bg-indigo-500 hover:bg-indigo-800 text-white" />
        </Layout>
    )

}

export default Recover;
