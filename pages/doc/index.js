import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Img } from "../../components/Icons";
import { Modal, ModallHeader, ModalBody } from "../../components/Modal";

import { fetchAll } from "../../components/DexieDatabase";


const Doc = () => {
  const [docs, setDocs] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  const [show, setShow] = useState(false);
  const [getAlldocs, setGetAllDocs] = useState([]);
  const [catDoc, setCatDoc] = useState([]);
  const [catTitle, setCatTitle] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [docData, allData] = await Promise.all([fetchAll("doc_cat"), fetchAll("doc")]);
        setDocs(docData);
        setGetAllDocs(allData);

      } catch (err) {
        console.log(err);
      }
    }
    loadData();

  }, [msg]);




  const ImageShowHandler = (cat_id) => {
    setShow(true);
    let findedData = getAlldocs.filter(t => t.cat_id === cat_id);
    setCatTitle(docs.find(t => t.id === cat_id).title);
    setCatDoc(findedData);
  }




  return (
    <Layout Title="Doc">

      <div className="w-full mt-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Doc</h1>
      </div>

      <div className="w-full overflow-auto">
        <div className="mt-6">
          <p className="w-full text-sm text-red-700">{msg}</p>
          <div className="overflow-auto">
            <table className="w-full border border-gray-200">
              <thead>
                <tr className="w-full bg-gray-200">
                  <th className="text-left border-b border-gray-200 py-2">Title</th>
                  <th className="font-normal text-start flex justify-end mt-1">

                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  docs.length ? docs.map((doc, i) => {
                    return (
                      <tr className="border-b border-gray-200" key={i}>
                        <td className="text-left py-2 px-4">{i + 1}. {doc.title}</td>
                        <td className="flex justify-end items-center mt-1">
                          <Img Click={() => ImageShowHandler(doc.id)} Size="w-7 h-7" />
                        </td>
                      </tr>
                    )
                  })
                    : null
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal Show={show} Hide={() => setShow(false)} Class="w-full md:w-10/12">
        <ModallHeader Hide={() => setShow(false)}>
          {catTitle}
        </ModallHeader>
        <ModalBody>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
              catDoc ? catDoc.map(c => {
                return (
                  <div className="flex justify-center items-center bg-gray-200" key={c.id}>
                    <img className="w-full" src={c.picurl} alt={c.cat_id} />
                  </div>
                )
              }
              ) : null
            }
          </div>
        </ModalBody>
      </Modal>

    </Layout>
  );

};
export default Doc;
