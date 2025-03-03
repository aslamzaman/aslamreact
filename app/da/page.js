"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/da/Add";
import Edit from "@/components/da/Edit";
import Delete from "@/components/da/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";


const Da = () => {
    const [das, setDas] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [das, posts] = await Promise.all([
                    getDataFromFirebase("da"),
                    getDataFromFirebase("post")
                ]);


                const joinCollection = das.map(da => {
                    const matchPost = posts.find(post => post.id === da.postId);
                    return {
                        ...da,
                        post: matchPost,
                        postName: matchPost.nmEn
                    }
                });

                const sortedData = joinCollection.sort((a, b) => sortArray(a.postName.toUpperCase(), b.postName.toUpperCase()));
                console.log(joinCollection)
                setDas(sortedData);
                setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
                setWaitMsg("Failed to fetch data");
            }
        };
        fetchData();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }



    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">DA</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <p className="w-full text-sm text-red-700">{msg}</p>
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-start border-b border-gray-200 px-4 py-2">Post</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Taka</th>
                            <th className="w-[100px] font-normal">
                                <div className="w-full flex justify-end py-0.5 pr-4">
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {das.length ? (
                            das.map((da, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={da.id}>
                                    <td className="text-start py-2 px-4">{i + 1}. {da.post.nmEn}</td>
                                    <td className="text-center py-2 px-4">{da.tk}</td>
                                    <td className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                        <Edit message={messageHandler} id={da.id} data={da} />
                                        <Delete message={messageHandler} id={da.id} data={da} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="text-center py-10 px-4">
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

export default Da;


