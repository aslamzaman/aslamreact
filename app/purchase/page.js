"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/purchase/Add";
import Edit from "@/components/purchase/Edit";
import Delete from "@/components/purchase/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDate, sortArray } from "@/lib/utils";


const Purchase = () => {
    const [purchases, setPurchases] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = await getDataFromFirebase("purchase");
                const sortedData = data.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
               
                console.log(typeof sortedData);
               
                setPurchases(sortedData);
            
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
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Purchase</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                             <th className="text-center border-b border-gray-200 px-4 py-1">ProductId</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">VendorId</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Dt</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Qty</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">PurchasePrice</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">SalePrice</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">Tax</th>
                            <th className="text-center border-b border-gray-200 px-4 py-1">UserId</th> 
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={purchases} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {purchases.length ? (
                            purchases.map(purchase => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={purchase.id}>  
                                    <td className="text-center py-1 px-4">{purchase.productId}</td>
                                    <td className="text-center py-1 px-4">{purchase.vendorId}</td>
                                    <td className="text-center py-1 px-4">{formatedDate(purchase.dt)}</td>
                                    <td className="text-center py-1 px-4">{purchase.qty}</td>
                                    <td className="text-center py-1 px-4">{purchase.purchasePrice}</td>
                                    <td className="text-center py-1 px-4">{purchase.salePrice}</td>
                                    <td className="text-center py-1 px-4">{purchase.tax}</td>
                                    <td className="text-center py-1 px-4">{purchase.userId}</td>                                     
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={purchase.id} data={purchase} />
                                            <Delete message={messageHandler} id={purchase.id} data={purchase} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center py-10 px-4">
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

export default Purchase;

