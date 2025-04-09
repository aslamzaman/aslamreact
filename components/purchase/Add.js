import React, { useState } from "react";
import { TextEn, BtnSubmit } from "@/components/Form";
import { addDataToFirebase } from "@/lib/firebaseFunction";
import { purchaseSchema } from "@/lib/Schema";
import LoadingDot from "../LoadingDot";

const Add = ({ message }) => {
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

    const showAddForm = () => {
        setShow(true);
        resetVariables();
    }


    const closeAddForm = () => {
        setShow(false);
    }


    const resetVariables = () => {
        setProductId('');
        setVendorId('');
        setDt('');
        setQty('');
        setPurchasePrice('');
        setSalePrice('');
        setTax('');
        setUserId('');
    }



    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            setBusy(true);
            // 8 objects ------
            const data = purchaseSchema([productId,vendorId,dt,qty,purchasePrice,salePrice,tax,userId]);
            const msg = await addDataToFirebase("purchase", data);
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
                        <div className="px-4 md:px-6 py-4 flex justify-between items-center border-b border-gray-300 rounded-t-md">
                            <h1 className="text-xl font-bold text-blue-600">Add New Data</h1>
                            <button onClick={closeAddForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 pb-6 border-0 text-black">
                            <div className="w-full overflow-auto">
                                <div className="p-4">
                                    <form onSubmit={saveHandler}>
                                        <div className="grid grid-cols-1 gap-4">
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
                                            <input type="button" onClick={closeAddForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showAddForm} className="px-1 py-1 bg-blue-500 hover:bg-blue-700 rounded-md transition duration-500" title="Add New">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-7 h-7 stroke-white hover:stroke-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;
  
