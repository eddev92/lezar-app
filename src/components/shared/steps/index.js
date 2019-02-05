import React from "react";
import '../../../styles/step.css';

const StepsComponent = ({ onSelect = () => {}, travelSelected = { driver: '' } }) => {
    return (
            <div className="container">
                <ul className="progressbar row">
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(1)}>INGRESO</li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(2)}>GASTO DE VIAJE</li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(3)}>COMBUSTIBLE</li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(4)}>PLANILLA</li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(5)}>CONSUMOS</li>
                    </ul>  
            </div>
        );
}

export default StepsComponent;
