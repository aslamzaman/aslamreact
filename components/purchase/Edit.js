import React, { useState } from "react";
import { TextEn, BtnSubmit } from "@/components/Form";
import { updateDataToFirebase } from "@/lib/firebaseFunction";
import { purchaseSchema } from "@/lib/Schema";
import LoadingDot from "../LoadingDot";



const Edit = ({ message, id, data }) => {
    const [productId, setProductId] = useState('');
    const [vendorId, setVendorId] = useState('');
    const [dt, setDt] = useState('');
    const [qty, setQty] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [tax, setTax] = useState('');
    const [userId, setUserId] = useState('');


    const [show, setShow] = useState(false);
    const [busy, setBusy] = useState(false);

    const showEditForm = () => {
        setShow(true);
        const { productId, vendorId, dt, qty, purchasePrice, salePrice, tax, userId } = data;
        setProductId(productId);
        setVendorId(vendorId);
        setDt(dt);
        setQty(qty);
        setPurchasePrice(purchasePrice);
        setSalePrice(salePrice);
        setTax(tax);
        setUserId(userId);
    };


    const closeEditForm = () => {
        setShow(false);
    };



    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            setBusy(true);
            // 8 objects ------
            const data = purchaseSchema([productId, vendorId, dt, qty, purchasePrice, salePrice, tax, userId]);
            const msg = await updateDataToFirebase("purchase", id, data);
            message(msg);
        } catch (error) {
            console.error("Error saving purchase data:", error);
            message("Error saving purchase data.");
        } finally {
            setBusy(false);
            setShow(false);
        }
    }


    return (
        <>
            {busy ? <LoadingDot message="Please wait" /> : null}
            {show && (
                <div className="fixed left-0 top-[60px] right-0 bottom-0 p-4 bg-black bg-opacity-30 backdrop-blur-sm z-10 overflow-auto">
                    <div className="w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 mx-auto my-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-500">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Edit Existing Data</h1>
                            <button onClick={closeEditForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>
                        <div className="px-6 pb-6 text-black">
                            <form onSubmit={saveHandler} >
                                <div className="grid grid-cols-1 gap-4 my-4">
                                    <TextEn Title="ProductId" Id="productId" Change={e => setProductId(e.target.value)} Value={productId} Chr={50} />
                                    <TextEn Title="VendorId" Id="vendorId" Change={e => setVendorId(e.target.value)} Value={vendorId} Chr={50} />
                                    <TextEn Title="Dt" Id="dt" Change={e => setDt(e.target.value)} Value={dt} Chr={50} />
                                    <TextEn Title="Qty" Id="qty" Change={e => setQty(e.target.value)} Value={qty} Chr={50} />
                                    <TextEn Title="PurchasePrice" Id="purchasePrice" Change={e => setPurchasePrice(e.target.value)} Value={purchasePrice} Chr={50} />
                                    <TextEn Title="SalePrice" Id="salePrice" Change={e => setSalePrice(e.target.value)} Value={salePrice} Chr={50} />
                                    <TextEn Title="Tax" Id="tax" Change={e => setTax(e.target.value)} Value={tax} Chr={50} />
                                    <TextEn Title="UserId" Id="userId" Change={e => setUserId(e.target.value)} Value={userId} Chr={50} />
                                </div>
                                <div className="w-full mt-4 flex justify-start pointer-events-auto">
                                    <input type="button" onClick={closeEditForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showEditForm} title="Edit" className="px-1 py-1 hover:bg-teal-300 rounded-md transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-black hover:stroke-blue-800 transition duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;






