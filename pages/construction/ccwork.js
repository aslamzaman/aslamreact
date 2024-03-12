import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { BtnSubmit, TextEn, DropdownEn } from "../../components/Form";

import { fetchOne } from "@/components/DexieDatabase";


const CcWork = () => {
    const [items, setItems] = useState([]);
    const [w, setW] = useState("100");
    const [cft, setCft] = useState('1');
    const [r1, setR1] = useState('1');
    const [r2, setR2] = useState('3');
    const [r3, setR3] = useState('6');

    const [totalTaka, setTotalTaka] = useState(0);

    const [cementPrice, setCementPrice] = useState(0);
    const [sandPrice, setSandPrice] = useState(0);
    const [khoaPrice, setKhoaPrice] = useState(0);


    useEffect(() => {
        const load = async () => {
            try {
                const [c, s, k] = await Promise.all([
                    fetchOne("price", 1698059708238),
                    fetchOne("price", 1698059717559),
                    fetchOne("price", 1698059725302)
                ]);
               
                setCementPrice(c===undefined?0:c.rate);
                setSandPrice(s===undefined?0:s.rate);
                setKhoaPrice(k===undefined?0:k.rate);
               
            } catch (error) {
                console.error("Error loading prices:", error);
            }
        };
        load();
    }, [])



    const resultHandler = async (e) => {
        e.preventDefault();

        let x = eval(w);
        let ratio = 0;
        let cement = 0;
        let sand = 0;
        let khoa = 0;
        let rd = 0;


        if (cft === "1") {
            ratio = parseFloat(r1) + parseFloat(r2) + parseFloat(r3);
            cement = (((x * 1.5) / ratio) * r1) / 1.25;
            sand = ((x * 1.5) / ratio) * r2;
            khoa = ((x * 1.5) / ratio) * r3;
        }
        else {
            ratio = parseFloat(r1) + parseFloat(r2) + parseFloat(r3);
            cement = (((x * 35.3147 * 1.5) / ratio) * r1) / 1.25;
            sand = ((x * 1.5) / ratio) * r2;
            khoa = ((x * 1.5) / ratio) * r3;
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
                rate: cft === "1" ? parseFloat(sandPrice).toFixed(2) : (parseFloat(sandPrice) * 35.3147).toFixed(2),
                total: cft === "1" ? (parseFloat(sandPrice) * sand).toFixed(2) : (parseFloat(sandPrice) * sand * 35.3147).toFixed(2)
            },
            {
                name: "Khoa",
                qty: khoa.toFixed(2),
                rate: cft === "1" ? parseFloat(khoaPrice).toFixed(2) : (parseFloat(khoaPrice) * 35.3147).toFixed(2),
                total: cft === "1" ? (parseFloat(khoaPrice) * khoa).toFixed(2) : (parseFloat(khoaPrice) * khoa * 35.3147).toFixed(2)
            }
        ];
        let t = dataArr.reduce((t, taka) => {
            return t + parseFloat(taka.total);
        }, 0);
        setTotalTaka(t);
        setItems(dataArr);
    }

    return (
        <Layout Title="CC Works">

            <div className="w-full md:w-9/12 mx-auto border border-gray-200 rounded-lg shadow-md">
                <div className="w-full border-b border-gray-200 rounded-t-lg">
                    <h3 className="w-full text-center text-2xl py-3 text-blue-700 font-bold">CC Works</h3>
                </div>

                <div className="w-full p-4">
                    <form onSubmit={resultHandler}>
                        <div className="grid grid-cols-4 gap-2 md:gap-4">
                            <div className="w-full col-span-3">
                                <TextEn Title="Total Works" Id="w" Change={(e) => { setW(e.target.value); }} Value={w} Chr="50" />
                            </div>
                            <div className="w-full">
                                <DropdownEn Title="Option" Id="cft" Change={(e) => { setCft(e.target.value); }} Value={cft}>
                                    <option value="0">m3</option>
                                    <option value="1">cft</option>
                                </DropdownEn>
                            </div>
                            <div className="w-full">
                                <TextEn Title="Ratio" Id="r1" Change={(e) => { setR1(e.target.value); }} Value={r1} Chr="50" />
                            </div>
                            <div className="w-full">
                                <TextEn Title="&nbsp;" Id="r2" Change={(e) => { setR2(e.target.value); }} Value={r2} Chr="50" />
                            </div>
                            <div className="w-full">
                                <TextEn Title="&nbsp;" Id="r3" Change={(e) => { setR3(e.target.value); }} Value={r3} Chr="50" />
                            </div>
                        </div>
                        <BtnSubmit Title="Calculate" Class="bg-indigo-700 hover:bg-indigo-900 text-white w-48" />
                    </form>
                </div>



                <div className="w-full overflow-auto">
                    <table className="w-full my-3 border border-gray-200 rounded-lg">
                        <thead className="rounded-t-lg">
                            <tr className="bg-gray-200  border border-gray-200 rounded-t-lg">
                                <th className="px-4 py-2">Items</th>
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
                                <td className="px-4 py-2 text-right">{totalTaka.toFixed(2)}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>

        </Layout>
    );
};

export default CcWork;
