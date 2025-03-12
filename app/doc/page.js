"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/doc/Add";
import Edit from "@/components/doc/Edit";
import Delete from "@/components/doc/Delete";
// import Print from "@/components/doc/Print";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDateDot, sortArray } from "@/lib/utils";



const Doc = () => {
    const [docs, setDocs] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromFirebase("doc");
                const title = data.map(unit => unit.title); // Get titles
                const newSet = new Set(title); // Create new set for unique title
                const uniqueTitle = Array.from(newSet); // Set to create array
                let dataArray = new Array(); // New array declartion
                // retern as {name: 'Miscellaneous Picture', length: 11 }
                for (let i = 0; i < uniqueTitle.length; i++) {
                    const matchData = data.filter(pic => pic.title === uniqueTitle[i]);
                    dataArray.push({name:uniqueTitle[i], length: matchData.length});
                }

                console.log(dataArray);


              //  const sortedData = data.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
              //  console.log(sortedData);
                setDocs(dataArray);
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
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Documents</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>
            <div className="px-4 lg:px-6">
                <div className="p-4 overflow-auto">
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-1">SL</th>
                                <th className="text-start border-b border-gray-200 px-4 py-1">Category</th>
                                <th className="text-center border-b border-gray-200 px-4 py-1">Pics No</th>
     
                            </tr>
                        </thead>
                        <tbody>
                            {docs.length ? (
                                docs.map((doc,i) => (
                                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={i}>
                                        <td className="text-center py-1 px-4">{i+1}</td>
                                        <td className="text-start py-1 px-4">{doc.name}</td>
                                        <td className="text-center py-1 px-4">{doc.length}</td>
          
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-10 px-4">
                                        Data not available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default Doc;

