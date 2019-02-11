import React from 'react';
import ColComponent from './col';
import '../../../styles/row.css';
import TransformData from '../../../utils/transform';

const RowComponent = ({ element = {}, handleTravel = () => {} }) => {
  let cols = [];

  cols = TransformData.getCols(element);
    return (
            <tr>
                {  cols.map((elmt, index) => (
                    <ColComponent element={elmt} key={index} handleTravel={handleTravel}/>
                ))
                }
            </tr>
            )
}

export default RowComponent;
