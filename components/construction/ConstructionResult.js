import React from "react";
import { Table } from "react-bootstrap";

const ConstructionResult = (props) => {
    const items = props.data;
    return (
        <Table striped hover bordered>
            <thead>
                <tr>
                    <th>Items</th>
                    <th className="text-end">Quantity</th>
                    <th className="text-end">Rate</th>
                    <th className="text-end">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.length
                        ? items.map((i, index) => {
                            return (
                                <tr key={index}>
                                    <td>{i.name}</td>
                                    <td className="text-end">{i.qty}</td>
                                    <td className="text-end">{i.rate}</td>
                                    <td className="text-end">{i.total}</td>
                                </tr>
                            )
                        })
                        : null

                }
            </tbody>
        </Table>
    );

};
export default ConstructionResult;