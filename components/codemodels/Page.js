
const Page = (tbl, datas) => {

    const titleCase = (str) => {
        return str.split(" ")
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .join(" ");
    }


    const splitData = datas.split(",");
    const data = splitData.map(s => s.trim());


    let thStr = "";
    for (let i = 0; i < data.length; i++) {
        if (i < (data.length - 1)) {
            thStr = thStr + `                            <th className="text-center border-b border-gray-200 px-4 py-1">${titleCase(data[i])}</th>\n`;
        } else {
            thStr = thStr + `                            <th className="text-center border-b border-gray-200 px-4 py-1">${titleCase(data[i])}</th>`;
        }
    }

    let tdStr = "";
    for (let i = 0; i < data.length; i++) {
        if (i < (data.length - 1)) {
            tdStr = tdStr + `                                    <td className="text-center py-1 px-4">{${tbl}.${data[i]}}</td>\n`;
        } else {
            tdStr = tdStr + `                                    <td className="text-center py-1 px-4">{${tbl}.${data[i]}}</td>`;
        }
    }






    const str = `"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/${tbl}/Add";
import Edit from "@/components/${tbl}/Edit";
import Delete from "@/components/${tbl}/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";


const ${titleCase(tbl)} = () => {
    const [${tbl}s, set${titleCase(tbl)}s] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const userId = sessionStorage.getItem('user');
                const data = await getDataFromFirebase("${tbl}", userId);
                const sortedData = data.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
                console.log(sortedData);
                set${titleCase(tbl)}s(sortedData);
                setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">${titleCase(tbl)}</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full p-4 mt-8 border-2 border-gray-300 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
 ${thStr} 
                            <th className="font-normal flex justify-end border-b border-gray-200 px-4 py-1">
                                <Add message={messageHandler} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {${tbl}s.length ? (
                            ${tbl}s.map(${tbl} => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={${tbl}.id}>  
${tdStr}                                     
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={${tbl}.id} data={${tbl}} />
                                            <Delete message={messageHandler} id={${tbl}.id} data={${tbl}} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={${data.length}} className="text-center py-10 px-4">
                                    Data not available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );

};

export default ${titleCase(tbl)};

`;
    return str;
}
export default Page;
