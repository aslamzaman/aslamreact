export const PanelHeader = ({ children, Class }) => {
    return (
        <div className={`w-full border-b border-gray-300 rounded-t-lg font-bold text-gray-400 text-[calc(0.7rem+0.6vw)] px-4 py-1 ${Class}`}>
                {children}
        </div>
    )
}



export const PanelFooter = ({ children }) => {
    return (
        <div className="w-full px-4 pb-3 border-t border-gray-300 rounded-b-lg">
            {children}
        </div>
    )
}



export const PanelBody = ({ children }) => {
    return (
        <div className="w-full p-4 overflow-auto">
            {children}
        </div>
    )
}




export const Panel = ({ children }) => {
    return (
        <div className="w-full border border-gray-300 shadow-sm shadow-gray-300 rounded-md">
            {children}
        </div>
    )
}

