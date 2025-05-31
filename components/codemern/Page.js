import { importToPageHeader, pageStateVariables, th, td } from "./Fnc";
const Page = (tbl, datas) => {

    const titleCase = (str) => {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    const replaceQutation = datas.replaceAll('`', '');
    const splitData = replaceQutation.split(",");
    const data = splitData.map(s => s.trim());
  

    const str = `${importToPageHeader(tbl)}
import { getDataFromMongoDB } from "@/lib/mongodbFunction";



const ${titleCase(tbl)} = () => {
${pageStateVariables(tbl)}


    useEffect(() => {

        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const url = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/${tbl}\`;
                const data = await getDataFromMongoDB(url, '${tbl}');
                // console.log(data);
                set${titleCase(tbl)}s(data);
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
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">${titleCase(tbl)}</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full p-4 bg-white border-2 border-gray-300 shadow-md rounded-md overflow-auto">
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
${th(data)}  
                            <th className="w-[95px] border-b border-gray-200 px-4 py-2">
                                <div className="w-[90px] h-[45px] flex justify-end space-x-2 p-1 font-normal">
                                    {/* <Print data={${tbl}s} /> */}
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {${tbl}s.length ? (
                            ${tbl}s.map(${tbl} => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={${tbl}._id}>  
${td(tbl, data)}                                      
                                    <td className="text-center py-2">
                                        <div className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={${tbl}._id} />
                                            <Delete message={messageHandler} id={${tbl}._id} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={${data.length}} className="text-center py-10 px-4">
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

export default ${titleCase(tbl)};

`;
    return str;
}
export default Page;
