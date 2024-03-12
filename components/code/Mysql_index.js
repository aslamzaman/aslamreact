
//----------------------------------
const IndexPage = (tbl, datas) => {
  const titleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const splitData = datas.split(",");
  const data = splitData.map(s => s.trim());
  data.shift();
  console.log(data)


  const stringData = data.map(t => ` ${t}`).toString();
  const stringQuestions = data.map(t => ` ?`).toString();
  const updateQyery = data.map(t => ` ${t} = ?`).toString();
  let ss = "";
  data.map((d, i) => {
    i === (data.length - 1)
      ? ss = ss + `<th className="text-center border-b border-gray-200 px-4 py-2">${titleCase(d)}</th>`
      : ss = ss + `<th className="text-center border-b border-gray-200 px-4 py-2">${titleCase(d)}</th>\n`
  }
  );


  let dd = "";
  data.map((d, i) => {
    i === (data.length - 1) 
    ?dd = dd + `<td className="text-center py-2 px-4">{${tbl}.${d}}</td>`
    :dd = dd + `<td className="text-center py-2 px-4">{${tbl}.${d}}</td>\n`
  }
    );

 
const  url = "`${Lib.url}/"+tbl+"/read_all`" ; 

  const str = `import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import Add from "../../components/${tbl}/Add";
import Edit from "../../components/${tbl}/Edit";
import Delete from "../../components/${tbl}/Delete";
import Print from "../../components/${tbl}/Print";
import { Lib } from "@/utils/Lib";


const ${titleCase(tbl)} = () => {
  const [${tbl}s, set${titleCase(tbl)}s] = useState([]);
  const [msg, setMsg] = useState("Data ready");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(${url});
        set${titleCase(tbl)}s(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadData();
  }, [msg]);

  const handleMsg = (data) => {
    setMsg(data);
  };

  return (
    <Layout Title="${titleCase(tbl)}">
      <div className="w-full mt-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">
        ${titleCase(tbl)}
        </h1>
      </div>
      <div className="w-full overflow-auto mt-6">
        <p className="w-full text-sm text-red-700">{msg}</p>

        <table className="w-full border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-200">
            ${ss}            
              <th className="font-normal text-start flex justify-end mt-1">
                <Add Msg={handleMsg} />
                <Print Msg={handleMsg} />
              </th>
            </tr>
          </thead>
          <tbody>
            {${tbl}s.length ? (
              ${tbl}s.map((${tbl}) => (
                <tr className="border-b border-gray-200" key={${tbl}.id}>
                  ${dd}                  
                  <td className="flex justify-end items-center mt-1">
                    <Edit Msg={handleMsg} Id={${tbl}.id} />
                    <Delete Msg={handleMsg} Id={${tbl}.id} />
                  </td>
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ${titleCase(tbl)};
`
  return str;
}


export default IndexPage;