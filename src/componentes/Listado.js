import React, {Component} from "react"
import Gasto from "./Gasto"
import PropTypes from 'prop-types';

class Listado extends Component {
    render(){
        return(
            <div>
                <h2>Listado</h2>
                {
                    Object.keys(this.props.gastos).map(key => (
                        <Gasto key={key} gasto = {this.props.gastos[key]}></Gasto>
                    ))
                }
                
            </div>
        )
    }
}
Listado.propTypes = {
    gastos: PropTypes.object.isRequired
}
export default Listado