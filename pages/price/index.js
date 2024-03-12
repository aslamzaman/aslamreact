import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Edit from "../../components/price/Edit";
import { fetchAll, insertBulkOrUpdate } from "../../components/DexieDatabase";

const pricePreset = [
	{
		"id": 1698059596125,
		"items": "Brick",
		"rate": "13.50"
	},
	{
		"id": 1698059708238,
		"items": "Cement",
		"rate": "551"
	},
	{
		"id": 1698059717559,
		"items": "Sand",
		"rate": "19"
	},
	{
		"id": 1698059725302,
		"items": "Khoa",
		"rate": "115.5"
	},
	{
		"id": 1698059734238,
		"items": "Rod",
		"rate": 100
	},
	{
		"id": 1698059745542,
		"items": "Paint",
		"rate": 1500
	},
	{
		"id": 1698059754062,
		"items": "Tiles",
		"rate": 80
	},
	{
		"id": 1698059893014,
		"items": "Flatbar",
		"rate": 105
	},
	{
		"id": 1698059904246,
		"items": "Anglebar",
		"rate": 105
	},
	{
		"id": 1698059912318,
		"items": "Mason",
		"rate": 600
	},
	{
		"id": 1698059919663,
		"items": "Labour",
		"rate": 400
	}
]


const Price = () => {
	const [prices, setPrices] = useState([]);
	const [msg, setMsg] = useState("Data ready");


	useEffect(() => {
		const load = async () => {
			let data = await fetchAll("price");
			console.log(data);
			if (data.length > 0) {
				setPrices(data);
			} else {
				await insertBulkOrUpdate("price", pricePreset);
				let presetData = await fetchAll("price");
				setPrices(presetData);
			}
		};
		load();
	}, [msg]);



	const msgHandler = (data) => {
		setMsg(data);
	}


	return (
		<Layout Title="Price">

			<div className="p-6">
				<div className="w-full bg-gray-100 p-3">
					<h1 className="w-full text-3xl font-bold text-center py-2 text-blue-800">Price</h1>
				</div>

				<div className="w-full mt-10">
					<div className="flex justify-between items-center">
						<p className="w-full text-sm text-red-700">{msg}</p>
					</div>

					<div>
						<table className="w-full border border-gray-200">
							<thead>
								<tr className="w-full bg-gray-200">
									<th className="text-center border-b border-gray-200 py-2">SL</th>
									<th className="text-center border-b border-gray-200 py-2">Items</th>
									<th className="text-center border-b border-gray-200 py-2">Rate</th>
									<th className="font-normal text-start flex justify-end mt-1">
									</th>
								</tr>
							</thead>
							<tbody>
								{
									prices.length ? prices.map((price, i) => {
										return (
											<tr className="border-b border-gray-200 hover:bg-gray-100" key={price.id}>
												<td className="text-center py-2 px-4">{i + 1}</td>
												<td className="text-center py-2 px-4">{price.items}</td>
												<td className="text-center py-2 px-4">{price.rate}</td>
												<td className="flex justify-end items-center mt-1">
													<Edit Msg={msgHandler} Id={price.id} />
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
		</Layout>
	);


};
export default Price;
