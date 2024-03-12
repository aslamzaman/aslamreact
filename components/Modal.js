import {BtnEn} from "./Form";
import { Close } from "./Icons";
export const ModallHeader = ({ children, Hide }) => {
    return (
        <div className="flex justify-between items-center px-4 py-2 w-full bg-gray-50 border-b border-gray-300 rounded-t-lg">
            <div className="font-semibold text-[calc(0.8rem+0.8vw)]">
                {children}
            </div>
            <Close Click={() => Hide()} Size="w-8 h-8" />
        </div>
    )
}



export const ModalFooter = ({ children, Hide }) => {
    return (
        <div className="w-full px-4 pb-2 flex justify-start border-t border-gray-300 rounded-b-lg">
            <BtnEn Title="Close" Click={() => Hide()} Class="bg-red-500 hover:bg-red-700 text-white" />
            <div >
                {children}
            </div>
        </div>
    )
}



export const ModalBody = ({ children }) => {
    return (
        <div className="w-full p-4">
            {children}
        </div>
    )
}




export const Modal = ({ children, Show, Hide, Class }) => {
    const closeHandler = (e) => {
        if (e.target.id === "backdrop") {
            Hide();
        }
    }
    return (
        <div id="backdrop" onClick={closeHandler} className={`fixed inset-0 px-4 py-10 ${Show ? 'block' : 'hidden'} bg-black bg-opacity-40 overflow-auto`}>
            <div className={`${Class} mx-auto bg-white text-black border-2 border-gray-300 rounded-md shadow-md duration-300`}>
                {children}
            </div>
        </div>
    )
}

