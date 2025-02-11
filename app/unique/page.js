"use client";
import React, { useState } from "react";
import { TextEn, BtnEn } from "@/components/Form";
import { customIdForFirebase } from "@/lib/utils";



const Unique = () => {
    const [uniq, setUniq] = useState("");
    const [uniq2, setUniq2] = useState("");
    const [uniq3, setUniq3] = useState("");
    const [msg, setMsg] = useState("");


    const uniqHandler = () => {
        setUniq(Date.now());
        setUniq2(new Date().toISOString());
        setUniq3(customIdForFirebase());

        let x = [];
        for (let i = 0; i < 50000; i++) {
          x.push(customIdForFirebase());
        }
        const result = [...new Set(x)];
        console.log(result);
        setMsg("Multiple unique IDs in the console");
    }




    return (
        <>
            <div className="w-full lg:w-1/2 mx-auto p-4 mt-10 border-2 border-gray-300 rounded-md shadow-md">
                <div className="w-full mt-4">
                    <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Unique</h1>
                </div>

                <div className="w-full overflow-auto">
                    <div className="mt-6 px-2">
                        <div className="grid grid-cols-1 gap-y-4">
                            <TextEn Title="Result" Id="uniq" Change={e => setUniq(e.target.value)} Value={uniq} Chr="100" />
                            <TextEn Title="Result2" Id="uniq2" Change={e => setUniq2(e.target.value)} Value={uniq2} Chr="100" />
                            <TextEn Title="Result3" Id="uniq3" Change={e => setUniq3(e.target.value)} Value={uniq3} Chr="100" />
                                <div className="w-full flex space-x-4 items-center">
                            <BtnEn Title="Unique static" Click={uniqHandler} Class="w-36 bg-gray-600 hover:bg-gray-800 text-white" />
                            <p>{msg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Unique;
