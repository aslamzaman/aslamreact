import React from "react";


const ConstructionResult = ({data}) => {

    return (
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
                    data.length
                        ? data.map((i, index) => {
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
            </tbody>
        </table>
   
   
   );

};
export default ConstructionResult;