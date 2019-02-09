import React, { Component } from 'react';
import TableComponent from '../shared/table/index';
import '../../styles/dashboard.css';
import Spinner from '../shared/spinner';
import StepsComponent from '../shared/steps';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                result: false,
                resultObj: [],
                msg: 'Ok'
            },
            travelSelected: {},
            user: {},            
            isLogged: props.isValid,
            userInfo: props.userInfo,
            listFiltered: [],
            valueToFilter: {
                type: '',
                key: ''
            },
            message: ''
        }
    }
    filterList = () => {
        const { data = []} = this.props;
        const { valueToFilter } = this.state;
        let filtereds = [];
        if (valueToFilter.type === 'Default') {
            alert('Ambos campos son requeridos para realizar la búsquedad')
            return this.setState({ listFiltered: data.resultObj });
        }
        if(valueToFilter.key && valueToFilter.type) {
            data.resultObj.forEach((elmt) => {
                if (elmt[valueToFilter.type].toString() === valueToFilter.key) {
                    filtereds.push(elmt);
                    this.setState({ listFiltered: filtereds })
                }
            })
        } else {
            return alert('Ambos campos son requeridos para realizar la búsquedad')
        }
        if (filtereds.length === 0) {
            this.setState({ listFiltered: data.resultObj })
            alert('No se encontraron registros con el valor: ' + " " + valueToFilter.key);
            
        }
    }
    handleValueToFilter = (value) => {
        const { valueToFilter } = this.state;

        if (value) {
            const val = value.target.value;
            const target = value.target.id;
            const aux = { ...valueToFilter };
            aux[target] = val;
            this.setState({ valueToFilter: aux })
        }

    }
    render() {
        const { isValid, data = [], token, toggleModal = () => {} } = this.props;
        const { valueToFilter, listFiltered, travelSelected } = this.state;
        const header = ['PLACA', 'INGRESO', 'SUELDO', 'COND. TRABAJO', 'VIÁTICOS', 'CONSUMOS', 'COMBUSTIBLE', 'DEPRECIACIÖN', 'UTILIDAD BRUTA', 'INSPECCIONAR'];
        const list = listFiltered.length ? listFiltered :  data.resultObj;

        return (
            <div className="row">
                { (data && data.resultObj.length > 0)  && <StepsComponent travelSelected={travelSelected} toggleModal={toggleModal}/> }
                <div className={(isValid || token) ? 'main-dashboard col-10 isLoged' : 'main-dashboard col-10'} >
                <div className="form-group">
                    <select className="form-control col-md-4" id="type" onChange={this.handleValueToFilter.bind(valueToFilter.type)} value={valueToFilter.type}>
                        <option value="Default">Seleccione</option>
                        <option value="Volumen">Volumen</option>
                        <option value="Precio">Precio</option>
                    </select>
                    <input type="email" id="key" className="form-control col-md-6 mail-user" onChange={this.handleValueToFilter.bind(valueToFilter.key)} value={valueToFilter.key} placeholder="Ingrese volumen" />
                    <button type="submit" className="btn btn-primary" onClick={this.filterList}>Buscar</button>
                </div>
                    {(data && data.resultObj.length > 0) 
                    ?
                        <TableComponent headerTitles={header} data={list}/>
                    :
                    <div className="empty">
                        <span>
                            La información se está cargado, espere un momento por favor.
                        </span>
                        <Spinner />
                    </div>
                    }
                </div>
            </div>
        )

    }
}

export default Dashboard;
