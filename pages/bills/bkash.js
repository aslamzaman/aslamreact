import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/bkash/Add";
import Edit from "../../components/bkash/Edit";
import Delete from "../../components/bkash/Delete";
import Print from "../../components/bkash/Print";
import { getItems } from "../../components/LocalDatabase";


const Bkash = () => {
  const [bkashs, setBkashs] = useState([]);
  const [msg, setMsg] = useState("Data ready");
  const [total, setTotal] = useState("0");


  useEffect(() => {
    const data = getItems("bkash");
    setBkashs(data);
    const taka = data.reduce((t, c) => t + parseFloat(c.taka), 0);
    setTotal(taka);
  }, [msg]);


  const msgHandler = (data) => {
    setMsg(data);
  }


  return (
    <Layout Title="Bkash Bill">

      <div className="w-full">
        <div className="w-full bg-gray-100 p-3">
          <h1 className="w-full text-3xl font-bold text-center py-2 text-blue-800">Bkash</h1>
        </div>

        <div className="w-full mt-10">
          <div className="flex justify-between items-center">
            <div className='w-full'>
              <p className='w-full py-2 text-md text-red-600 text-center'>{msg}</p>
            </div>
          </div>
          <div>
            <table className="w-full border border-gray-200">
              <thead>
                <tr className="w-full bg-gray-200">
                  <th className="text-center border-b border-gray-200 py-2">Unit</th>
                  <th className="text-center border-b border-gray-200 py-2">Taka</th>
                  <th className="font-normal text-start flex justify-end mt-1">
                    <Add Msg={msgHandler} />
                    <Print Msg={msgHandler} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  bkashs.length ? bkashs.map((bkash) => {
                    return (
                      <tr className="border-b border-gray-200 hover:bg-gray-100" key={bkash.id}>
                        <td className="text-center py-2 px-4 font-SutonnyMJ_Regular">{bkash.unit}</td>
                        <td className="text-center py-2 px-4">{bkash.taka}</td>
                        <td className="flex justify-end items-center mt-1">
                          <Edit Msg={msgHandler} Id={bkash.id} />
                          <Delete Msg={msgHandler} Id={bkash.id} />
                        </td>
                      </tr>
                    )
                  })
                    : null
                }
                <tr className="font-bold">
                  <td className="text-center py-2 px-4">Total</td>
                  <td className="text-center py-2 px-4">{total}</td>
                  <td className="flex justify-end items-center mt-1">

                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </Layout>
  );


};
export default Bkash;
