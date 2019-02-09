import React from "react";
import './../../../styles/steps.css';

const StepsComponent = ({ onSelect = () => {}, travelSelected = { driver: '' }, toggleModal = () => {} }) => {
    return (
            <div className="container">
                <ul className="progressbar row">
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(1)}>
                        <i class="fas fa-hand-holding-usd" onClick={toggleModal}/>INGRESO
                    </li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(2)}>
                        <i class="fas fa-map-marked" />GASTO DE VIAJE
                    </li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(3)}>
                       <i class="fas fa-truck-moving" />COMBUSTIBLE
                    </li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(4)}>
                      <i class="fas fa-file-invoice-dollar" />PLANILLA
                    </li>
                    <li className={travelSelected.driver && 'active'} onClick={onSelect(5)}>
                        <i class="fas fa-shopping-cart" />CONSUMOS
                    </li>
                </ul>  
            </div>
        );
}

export default StepsComponent;
