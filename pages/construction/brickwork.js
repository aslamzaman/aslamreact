import React, { useState, useEffect } from "react";
import ConstructionResult from "../../components/construction/ConstructionResult";
import { BtnSubmit, TextEn, DropdownEn } from "../../components/Form";
import Layout from "../../components/Layout";

import { fetchOne } from "@/components/DexieDatabase";

const BrickWork = () => {
    const [items, setItems] = useState([]);

    const [w, setW] = useState("100");
    const [cft, setCft] = useState('1');
    const [r1, setR1] = useState('1');
    const [r2, setR2] = useState('5');

    const [totalTaka, setTotalTaka] = useState(0);
    const [brickPrice, setBrickPrice] = useState(0);
    const [cementPrice, setCementPrice] = useState(0);
    const [sandPrice, setSandPrice] = useState(0);

    useEffect(() => {
        const load = async () => {
            try {
                const [b, c, s] = await Promise.all([
                    fetchOne("price", 1698059596125),
                    fetchOne("price", 1698059708238),
                    fetchOne("price", 1698059717559)
                ]);

                setBrickPrice(b===undefined?0:b.rate);
                setCementPrice(c===undefined?0:c.rate);
                setSandPrice(s===undefined?0:s.rate);
    
            } catch (error) {
                console.error("Error loading prices:", error);
            }
        };
        load();
    }, [])




    const resultHandler = (e) => {
        e.preventDefault();

        let x = eval(w);
        let brick = 0;
        let cement = 0;
        let sand = 0;
        let sandRate = 0;

        let newW = parseFloat(x) * 0.30 * 1.5;
        let r = parseFloat(r1) + parseFloat(r2);

        if (cft === "1") {
            brick = parseFloat(x) * 12;
            cement = ((newW / r) * parseFloat(r1)) / 1.25;
            sand = (newW / r) * parseFloat(r2);
            sandRate = parseFloat(sandPrice);
        }
        else {
            brick = parseFloat(x) * 12 * 35.3147;
            cement = ((newW / r) * parseFloat(r1) * 35.3147) / 1.25;
            sand = (newW / r) * parseFloat(r2);
            sandRate = parseFloat(sandPrice) * 35.3147;
        }

        let dataArr = [
            {
                name: "Brick",
                qty: brick.toFixed(2),
                rate: parseFloat(brickPrice).toFixed(2),
                total: (parseFloat(brickPrice) * brick).toFixed(2)
            },
            {
                name: "Cement",
                qty: cement.toFixed(2),
                rate: parseFloat(cementPrice).toFixed(2),
                total: (parseFloat(cementPrice) * cement).toFixed(2)
            },
            {
                name: "Sand",
                qty: sand.toFixed(2),
                rate: sandRate.toFixed(2),
                total: (sandRate * sand).toFixed(2)
            }
        ];
        let t = dataArr.reduce((t, taka) => {
            return t + parseFloat(taka.total);
        }, 0);
        setTotalTaka(t);
        setItems(dataArr);

    }

    return (
        <Layout Title="Brick Works">

            <div className="border border-gray-300 shadow-lg rounded-lg flex flex-col mx-auto w-full md:w-3/4">

                <div className="w-full h-[50px] flex items-center border-b border-gray-300 rouded-t-xl">
                    <h1 className="w-full text-[calc(1.275rem+0.3vw)] font-semibold text-center">Brick Works</h1>
                </div>

                <div className="w-full p-4 flex flex-col">
                    <form onSubmit={resultHandler}>
                        <div className="w-full grid grid-cols-4 gap-2 md:gap-4">
                            <div className="w-full col-span-3">
                                <TextEn Title="Total Works" Id="w" Change={(e) => { setW(e.target.value) }} Value={w} Chr="50" />
                            </div>
                            <div className="w-full">
                                <DropdownEn Title="Option" Id="cft" Change={(e) => { setCft(e.target.value) }} Value={cft}>
                                    <option value="0">M3</option>
                                    <option value="1">CFT</option>
                                </DropdownEn>
                            </div>

                            <div className="w-full">
                                <TextEn Title="Ratio" Id="r1" Change={(e) => { setR1(e.target.value) }} Value={r1} Chr="10" />
                            </div>
                            <div className="w-full">
                                <TextEn Title="Ratio" Id="r2" Change={(e) => { setR2(e.target.value) }} Value={r2} Chr="10" />
                            </div>
                        </div>
                        <BtnSubmit Title="Calculate" Class="bg-blue-700 hover:bg-blue-900 text-white w-32" />

                    </form>
                </div>

            </div >




            <div className="py-4 text-black overflow-auto">
                <ConstructionResult data={items} />
                <div className="text-end font-bold">{totalTaka.toFixed(2)}&nbsp;&nbsp;&nbsp;</div>
            </div>



        </Layout>
    );
};

export default BrickWork;
