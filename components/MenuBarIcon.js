import React from 'react';


const MenuBarIcon = ({ click }) => {
    return <button onClick={click}><svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8 L28 8 M2 15 L28 15 M2 22 L28 22"
            className="fill-none stroke-gray-500" style={{ strokeWidth: '4px' }} />
    </svg></button>
}

export default MenuBarIcon;
