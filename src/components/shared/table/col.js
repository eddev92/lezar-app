import React from 'react';
import '../../../styles/col.css';

const ColComponent = ({ element, index, handleTravel = () => {} }) => {
    if (element.isLink) {
        return (
            <td key={index}>
               {element && <div className="select-item" onClick={handleTravel}>{element.label}</div>}
            </td>
        )  
    }
        return (
            <td key={index}>
               {element && <div>{element.label}</div>}
            </td>
        )   
}

export default ColComponent;
