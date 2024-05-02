import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/mobile/Add";
import Edit from "../../components/mobile/Edit";
import Delete from "../../components/mobile/Delete";
import Print from "../../components/mobile/Print";

import { getItems } from "../../components/LocalDatabase"

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const [msg, setMsg] = useState("Data ready");
  const [total, setTotal] = useState("0");


  useEffect(() => {


    const mobile = getItems("mobile");
    setMobiles(mobile);
    const taka = mobile.reduce((t, c) => t + parseFloat(c.taka), 0);
    setTotal(taka);
  }, [msg]);


  const msgHandler = (data) => {
    setMsg(data);
  }


  return (
    <Layout Title="Mobile Bill">


      <div className="w-full">
        <h1 className="w-full text-2xl md:text-3xl font-extrabold text-slate-900">Mobile</h1>
        <p className="w-full text-lg md:text-xl text-slate-700">Service centre mobile phone number</p>
        <p className="w-full text-indigo-500">Categroy: Bill</p>
      </div>

      <div className="w-full mt-10">
        <div className="flex justify-between items-center">         
            <p className="w-full py-2 text-md text-red-700 text-center">{msg}</p>          
        </div>
        <div className="overflow-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="text-center border-b border-gray-200 py-2">Name</th>
                <th className="text-center border-b border-gray-200 py-2">Num</th>
                <th className="text-center border-b border-gray-200 py-2">Taka</th>
                <th className="font-normal text-start flex justify-end mt-1">
                  <Add Msg={msgHandler} />
                  <Print Msg={msgHandler} />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                mobiles.length
                  ? mobiles.map((mobile) => {
                    return (
                      <tr className="border-b border-gray-200 hover:bg-gray-100" key={mobile.id}>
                        <td className="text-center py-2 px-4">{mobile.name}</td>
                        <td className="text-center py-2 px-4">{mobile.num}</td>
                        <td className="text-center py-2 px-4">{mobile.taka}</td>
                        <td className="flex justify-end items-center mt-1">
                          <Edit Msg={msgHandler} Id={mobile.id} />
                          <Delete Msg={msgHandler} Id={mobile.id} />
                        </td>
                      </tr>
                    )
                  })
                  : null
              }
              <tr className="font-bold">
                <td className="text-center py-2 px-4">Total</td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4">{total}</td>
                <td className="flex justify-end items-center mt-1">

                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </Layout>
  );


};
export default Mobile;
