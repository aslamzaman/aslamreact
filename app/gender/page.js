"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/gender/Add";
import Edit from "@/components/gender/Edit";
import Delete from "@/components/gender/Delete";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



const Gender = () => {
  const [genders, setGenders] = useState([]);
  const [waitMsg, setWaitMsg] = useState("");
  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {
    const getData = async () => {
      setWaitMsg('Please Wait...');
      try {
        const data = await getDataFromFirebase("gender");
        const sortedData = data.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
        setGenders(sortedData);
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
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Gender</h1>
        <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
        <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
      </div>



        <div className="w-full lg:w-3/4 mx-auto  p-4 border-2 shadow-md rounded-md overflow-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="text-center border-b border-gray-200 px-4 py-1">Name</th>
                <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                  <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                    {/* <Print data={genders} /> */}
                    <Add message={messageHandler} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {genders.length ? (
                genders.map(gender => (
                  <tr className="border-b border-gray-200 hover:bg-gray-100" key={gender.id}>
                    <td className="text-center py-1 px-4">{gender.name}</td>
                    <td className="text-center py-2">
                      <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                        <Edit message={messageHandler} id={gender.id} data={gender} />
                        <Delete message={messageHandler} id={gender.id} data={gender} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center py-10 px-4">
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

export default Gender;

