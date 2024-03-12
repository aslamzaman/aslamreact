import React, { useState, useEffect } from "react";
import { DropdownEn, TextEn, BtnEn } from "../../components/Form";
import Layout from "../../components/Layout";

import { Panel, PanelHeader, PanelBody, PanelFooter } from "../../components/Panel";

import {fetchOne } from "@/components/DexieDatabase";

const BrickFlatSolling = () => {
    const [items, setItems] = useState({});

    const [w, setW] = useState("100");
    const [sft, setSft] = useState('1');
    const [totalTaka, setTotalTaka] = useState(0);
    const [brickPrice, setBrickPrice] = useState(0);
    const [sandPrice, setSandPrice] = useState(0);


    useEffect(() => {
        const load = async () => {
            try {
                const [b, s] = await Promise.all([
                  fetchOne("price", 1698059596125),
                  fetchOne("price", 1698059717559)
                ]);

                setBrickPrice(b===undefined?0:b.rate);
                setSandPrice(s===undefined?0:s.rate);
              } catch (error) { 
                console.error("Error loading prices:", error);
              }
        };
        load();
    }, [])



    const resultHandler = async (e) => {
        e.preventDefault();
        
        let x = eval(w);
        let brick = 0;
        let sand = 0;
        let sandRate = 0;

        if (sft === "1") {
            brick = parseFloat(x) * 3;
            sand = parseFloat(x) * 0.05;
            sandRate = parseFloat(sandPrice);
        }
        else {
            brick = parseFloat(x) * 3 * 10.76;
            sand = (parseFloat(x) * 0.05 * 10.76) / 35.31;
            sandRate = parseFloat(sandPrice) * 35.31;
        }

        let dataArr = [
            {
                name: "Brick",
                qty: brick.toFixed(2),
                rate: parseFloat(brickPrice).toFixed(2),
                total: (parseFloat(brickPrice) * brick).toFixed(2)
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
        <Layout Title="BFS">
            <div className="w-full md:w-10/12 lg:w-8/12 mx-auto py-6">
                <Panel>
                    <PanelHeader Class="bg-gray-100">
                        Brick Flat Solling
                    </PanelHeader>
                    <PanelBody>
                        <form>
                            <TextEn Title="Total Works" Id="w" Change={(e) => { setW(e.target.value); }} Value={w} Chr="50" />
                            <DropdownEn Title="Option" Id="sft" Change={(e) => { setSft(e.target.value); }} Value={sft}>
                                <option value="0">m2</option>
                                <option value="1">sft</option>
                            </DropdownEn>                            
                        </form>
                    </PanelBody>
                    <PanelFooter>
                        <BtnEn Click={resultHandler} Title="Calculate" Class="bg-indigo-800 hover:bg-indigo-900 text-white" />
                    </PanelFooter>
                </Panel>
            </div>



            <div className="overflow-auto">
                <table className="w-full text-black border border-gray-200">
                    <thead className="rounded-t-lg">
                        <tr className="bg-gray-200  border border-gray-200 rounded-t-lg">
                            <th className="px-4 py-2 text-left">Items</th>
                            <th className="px-4 py-2 text-right">Quantity</th>
                            <th className="px-4 py-2 text-right">Rate</th>
                            <th className="px-4 py-2 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.length
                                ? items.map((i, index) => {
                                    return (
                                        <tr className="hover:bg-gray-100 cursor-pointer border border-gray-200" key={index}>
                                            <td className="px-4 py-2">{i.name}</td>
                                            <td className="px-4 py-2 text-right">{i.qty}</td>
                                            <td className="px-4 py-2 text-right">{i.rate}</td>
                                            <td className="px-4 py-2 text-right">{i.total}</td>
                                        </tr>
                                    )
                                })
                                : null
                        }
                        <tr className="hover:bg-gray-100 font-bold cursor-pointer border border-gray-200">
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2 text-right"></td>
                            <td className="px-4 py-2 text-right"></td>
                            <td className="px-4 py-2 text-right">{totalTaka > 0 ? totalTaka.toFixed(2) : 0}</td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </Layout>
    );
};



export default BrickFlatSolling;




