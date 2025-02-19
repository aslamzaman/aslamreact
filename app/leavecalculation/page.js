"use client";
import React, { useState, useEffect } from "react";
import { TextNum, BtnSubmit, DropdownEn } from "@/components/Form";


const Leavecalculation = () => {
    const [req, setReq] = useState(2);
    const [cl, setCl] = useState(18);
    const [el, setEl] = useState(18);

    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState({ color: "blue" });


    useEffect(() => {
        setResult("Result");
    }, [])


    const registerEntry = (balanceCl, balanceEl, requestedLeave) => {
        //--------- Consume --------------------
        const consumeCl = 20 - balanceCl;
        const consumeEl = 18 - balanceEl;
        let newBalanceCl = 0;

        const totalReqCl = consumeCl + requestedLeave;

        let extraCl = 0;

        if (totalReqCl > 20) {
            extraCl = totalReqCl - 20;
            newBalanceCl = 0;
        } else {
            extraCl = 0;
            newBalanceCl = 20 - totalReqCl;
        }
        const totalReqEl = extraCl + consumeEl;

        const newBalanceEl = 18 - totalReqEl;
        return { newBalanceCl, newBalanceEl };
    }


    const leftSide = (balanceCl, balanceEl, requestedLeave) => {
        const consumeCl = 20 - balanceCl;
        const consumeEl = 18 - balanceEl;
        const totalConsume = consumeCl + consumeEl + requestedLeave;
        return { consumeCl, consumeEl, requestedLeave, totalConsume }

    }

    const rightSide = (balanceCl, balanceEl, requestedLeave) => {
        const registerBalance = registerEntry(balanceCl, balanceEl, requestedLeave);
        const totalConsume = 38 - (registerBalance.newBalanceCl + registerBalance.newBalanceEl);
        let quarter = 0;
        if (totalConsume > 20) {
            quarter = 38;
        } else {
            quarter = 20;
        }
        const lastConsume = totalConsume - requestedLeave;
        const balance = quarter - (lastConsume + requestedLeave);
        return { quarter, lastConsume, requestedLeave, balance };
    }




    const calculateHandler = (e) => {
        e.preventDefault();
        const balanceCl = parseFloat(cl);
        const balanceEl = parseFloat(el);
        const requestedLeave = parseFloat(req);

        const registerBalance = registerEntry(balanceCl, balanceEl, requestedLeave);
        const leftApplicaion = leftSide(balanceCl, balanceEl, requestedLeave);
        const rightApplicaion = rightSide(balanceCl, balanceEl, requestedLeave);

        //  console.log(registerBalance)
        //  console.log(leftApplicaion)
        //  console.log(rightApplicaion)

        const st = `Register: ${registerBalance.newBalanceCl}, ${registerBalance.newBalanceEl} ||  Left Side: ${leftApplicaion.consumeCl}, ${leftApplicaion.consumeEl}, ${leftApplicaion.requestedLeave}, ${leftApplicaion.totalConsume} || Right Side: ${rightApplicaion.quarter}, ${rightApplicaion.lastConsume}, ${rightApplicaion.requestedLeave}, ${rightApplicaion.balance}`;
        setResult(st);
    }

    return (
        <>
            <div className="w-full my-6 lg:my-10">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Octen</h1>
            </div>

            <div className="px-4 lg:px-6">
                <div className="w-11/12 md:w-1/2 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="w-full p-4">
                        <p className={`w-full text-center text-xl text-red-700 ${resultColor}`}>{result}</p>
                        <form onSubmit={calculateHandler}>
                            <div className="grid grid-cols-2 gap-4 my-2">
                                <div className="w-full col-span-2">
                                    <TextNum Title="Requested leave (Days)" Id="req" Change={e => setReq(e.target.value)} Value={req} />
                                </div>
                                <TextNum Title="Register CL (Days)" Id="cl" Change={e => setCl(e.target.value)} Value={cl} />
                                <TextNum Title="Register EL (Days)" Id="el" Change={e => setEl(e.target.value)} Value={el} />
                            </div>
                            <div className="w-full flex justify-start">
                                <BtnSubmit Title="Create Pdf" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Leavecalculation;

