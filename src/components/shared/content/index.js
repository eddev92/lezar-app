import React from 'react';
import '../../../styles/content.css';
import {TRAVELS} from '../../../constants/constants'

const ContentComponent = ({ optionSelected = 0, valueFiltered = '', travelsLoaded, handleValue = () => {}, handleTravel = () => {} }) => {
    const date = 'Tue Feb 05 2019 10:40:37';

    return (
        <div className="main-content">
            {!travelsLoaded 
            ?
                <h1>NO SE HA CARGADO VIAJES</h1>
            :
            <div className="travels">
                <select>
                    <option>Selecciona</option>
                    <option>Conductor</option>
                    <option>Placa</option>
                </select>
            <input type="text" value={valueFiltered} onChange={handleValue}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Destino</th>
                            <th>Fecha de salida</th>
                            <th>Conductor</th>
                            <th>Placa</th>
                            <th>Saldo</th>
                            <th>Inspeccionar</th>
                        </tr>
                        {travelsLoaded && TRAVELS.length
                        ?
                        TRAVELS.map((travel, index) => (
                            <tr key={index}>
                                <td>{travel.destinity}</td>
                                <td>{travel.dateTravel}</td>
                                <td>{travel.driver}</td>
                                <td>{travel.plate}</td>
                                <td>{travel.amount}</td>
                                <td onClick={handleTravel.bind(this, travel)}>Click aquí</td>
                            </tr>
                        ))
                        : null
                    }                    
                    </tbody>                    
                </table>
            </div>
            }
        </div>
    );
}

export default ContentComponent;
