"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/author/Add";
import Edit from "@/components/author/Edit";
import Delete from "@/components/author/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [authors, posts] = await Promise.all([
                    getDataFromFirebase("author"),
                    getDataFromFirebase("post")
                ]);


                const joinCollection = authors.map(author => {
                    return {
                        ...author,
                        post: posts.find(post => post.id === author.postId) || {}
                    }
                });

                const sortedData = joinCollection.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
                console.log(sortedData)
                setAuthors(sortedData);
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
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Author</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-1">Name</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">PostId</th>
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={authors} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.length ? (
                            authors.map(author => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={author.id}>
                                    <td className="text-center py-1 px-4">{author.name}</td>
                                    <td className="text-center py-1 px-4">{author.post.nmEn}</td>
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={author.id} data={author} />
                                            <Delete message={messageHandler} id={author.id} data={author} />
                                        </div>
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

export default Author;

