"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/movie/Add";
import Edit from "@/components/movie/Edit";
import Delete from "@/components/movie/Delete";
import Download from "@/components/movie/Download"
import Upload from "@/components/movie/Upload";
import { getDataFromIndexedDB } from "@/lib/DatabaseIndexedDB";


const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("");


    useEffect(() => {
        const load = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromIndexedDB("movie");
                const result = data.sort((a, b) => parseInt(b.id) > parseInt(a.id) ? 1 : -1);
                setMovies(result);
                setWaitMsg('');
            } catch (error) {
                console.log(error);
            }
        };
        load();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    return (
        <>
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Movie</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div className="w-full bg-white border-2 border-gray-200 p-4 shadow-md rounded-md">
                <div className="w-full overflow-auto">
                    <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
                    <div className="w-full flex justify-end">
                        <div className="w-auto flex items-center">
                            <Download message={messageHandler} /> 
                            <Upload message={messageHandler} />
                        </div>
                    </div>
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                                <th className="text-start border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-start border-b border-gray-200 px-4 py-2">Category</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Date</th>
                                <th className="w-[100px] font-normal">
                                    <div className="w-full flex justify-end items-center pr-2.5 font-normal">
                                        <Add message={messageHandler} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.length ? movies.map((movie,i) => {
                                    const isTrailer = movie.trailer;
                                    return (
                                        <tr className={`border-b border-gray-200 hover:bg-gray-100 ${isTrailer?'text-blue-700':'text-black'}`} key={movie.id}>
                                            <td className="text-center py-2 px-4">{i+1}</td>
                                            <td className="text-start py-2 px-4">{movie.name}</td>
                                            <td className="text-start py-2 px-4">{movie.category}</td>
                                            <td className="text-center py-2 px-4">{movie.date}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit message={messageHandler} id={movie.id} data={movie} />
                                                <Delete message={messageHandler} id={movie.id} data={movie} />
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
        </>
    );
};

export default Movie;

