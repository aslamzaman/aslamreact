import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import ConstructionResult from "../../components/construction/ConstructionResult";
import {BtnSubmit, TextEn, DropdownEn } from "../../components/Form";

import { fetchOne } from "@/components/DexieDatabase";



const PlasterWorks = () => {
    const [items, setItems] = useState({});
    const [works, setWorks] = useState(100);
    const [r1, setR1] = useState(1);
    const [r2, setR2] = useState(4);
    const [depth, setDepth] = useState(1);
    const [depthString, setDepthString] = useState("inch");
    const [opt, setOpt] = useState("sft");

    const [totalTaka, setTotalTaka] = useState(0);

    const [cementPrice, setCementPrice] = useState(0);
    const [sandPrice, setSandPrice] = useState(0);


    useEffect(() => {
        const load = async () => {
            try {
                const [c, s] = await Promise.all([
                    fetchOne("price", 1698059708238),
                    fetchOne("price", 1698059717559)
                ]);

                setCementPrice(c===undefined?0:c.rate);
                setSandPrice(s===undefined?0:s.rate);
 
            } catch (error) {
                console.error("Error loading prices:", error);
            }
        };
        load();

        if (opt === "sft") {
            setDepthString("inch");
            setDepth(1);
        } else {
            setDepthString("mm")
            setDepth(25.4);
        }

    }, [opt])



    const resultHandler = (e) => {
        e.preventDefault();

        let x = eval(works);
        let cement = 0;
        let sand = 0;

        if (opt === "sft") {
            let ratio = (parseFloat(r1) + parseFloat(r2));
            let worksWt = (parseFloat(x) * (depth / 12) * 1.5);

            cement = (((worksWt / ratio) * parseFloat(r1)) / 1.25);
            sand = ((worksWt / ratio) * parseFloat(r2));
        }
        else {
            let ratio = (parseFloat(r1) + parseFloat(r2));
            let worksWt = (parseFloat(x) * (depth / 1000) * 1.5);
            cement = ((((worksWt / ratio) * parseFloat(r1)) * 35.3147) / 1.25);
            sand = ((worksWt / ratio) * parseFloat(r2));
        }

        let dataArr = [
            {
                name: "Cement",
                qty: cement.toFixed(2),
                rate: parseFloat(cementPrice).toFixed(2),
                total: (parseFloat(cementPrice) * cement).toFixed(2)
            },
            {
                name: "Sand",
                qty: sand.toFixed(2),
                rate: opt === "sft" ? parseFloat(sandPrice).toFixed(2) : (parseFloat(sandPrice) * 35.3147).toFixed(2),
                total: opt === "sft" ? (parseFloat(sandPrice) * sand).toFixed(2) : (parseFloat(sandPrice) * sand * 35.3147).toFixed(2)
            }
        ];

        let t = dataArr.reduce((t, taka) => {
            return t + parseFloat(taka.total);
        }, 0);
        setTotalTaka(t);
        setItems(dataArr);
    }

    return (
        <Layout Title="Plaster Works">

            <div className='w-full md:w-9/12 mx-auto border border-gray-200 rounded-lg shadow-lg'>
                <div className='w-full border-b border-gray-200 rounded-t-lg'>
                    <h1 className='w-full py-3 text-center text-2xl text-blue-600 font-bold'>Plaster Works</h1>
                </div>
                <div className='w-full p-4'>
                    <form onSubmit={resultHandler} className="pb-4">
                        <div className="grid grid-cols-4 gap-2 md:gap-4">
                            <div className="w-full col-span-3">
                                <TextEn Title="Total Works" Id="works" Change={(e) => { setWorks(e.target.value); }} Value={works} Chr="50" />
                            </div>
                            <div className="w-full">
                                <DropdownEn Title="&nbsp;" Id="opt" Change={(e) => { setOpt(e.target.value); }} Value={opt}>
                                    <option value="sft">SFT</option>
                                    <option value="m2">M2</option>
                                </DropdownEn>
                            </div>

                            <div className="w-full">
                                <TextEn Title="Ratio" Id="r1" Change={(e) => { setR1(e.target.value); }} Value={r1} Chr="50" />
                            </div>
                            <div className="w-full">
                                <TextEn Title="&nbsp;" Id="r2" Change={(e) => { setR2(e.target.value); }} Value={r2} Chr="50" />
                            </div>

                            <div className="w-full col-span-2">
                                <TextEn Title={`Depth (${depthString})`} Id="depth" Change={(e) => { setDepth(e.target.value); }} Value={depth} Chr="50" />
                            </div>
                        </div>

                        <BtnSubmit Title="Calcultate" Class="bg-indigo-700 hover:bg-indigo-900 text-white" />
                    </form>
                </div>


                <div className="p-4 overflow-auto">
                    <ConstructionResult data={items} />
                    <div className="text-end font-bold">{totalTaka.toFixed(2)}&nbsp;&nbsp;&nbsp;</div>
                </div>

            </div>
        </Layout>

    )

}

export default PlasterWorks;