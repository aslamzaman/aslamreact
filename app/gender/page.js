"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/gender/Add";
import Edit from "@/components/gender/Edit";
import Delete from "@/components/gender/Delete";
import  * as util from "@/lib/utils";
const Gender = () => {
  const [genders, setGenders] = useState([]);
  const [waitMsg, setWaitMsg] = useState("");
  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {
    const getData = async () => {
      setWaitMsg('Please Wait...');
      try {
        const data = await util.getDataFromFirebase1("gender");
        const sortedData = data.sort((a, b) => util.sortArray(new Date(b.createdAt), new Date(a.createdAt)));
        console.log(sortedData);
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


  const addHdle = () => {
    console.log(util.customIdForFirebase());
    /*
    let x = [];
    for (let i = 0; i < das.length; i++) {
      const p = posts.find(post => post._id === das[i].postId);
      x.push({ id: customIdForFirebase(), ...das[i], postId: p.id })
    }
    console.log(x);
    */
  }


  const uploadHanderl = () => {
    /*
        let i = 0;
        const myTimer = setInterval(async () => {
          let id = das[i].id;
    
    
          let data = {
            postId: das[i].postId,
            tk: das[i].tk,
            createdAt: das[i].createdAt
          }
    
          const msg = await addDataToFirebaseWithCustomId('da', id, data);
          console.log(msg)
          i = i + 1;
          if (i >= das.length) {
            clearInterval(myTimer);
            console.log("End");
          }
        }, 1000)
    */

  }




  return (
    <>
      <div className="w-full mb-3 mt-8">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Gender</h1>
        <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
        <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
      </div>
      <button onClick={addHdle}>Add Id</button><br /><br />
      <button onClick={uploadHanderl}>Upload</button>
      <div className="px-4 lg:px-6">
        <div className="p-4 overflow-auto">
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
      </div>
    </>
  );

};

export default Gender;

