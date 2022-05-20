import React, {Component} from "react"
import PropTypes from 'prop-types';

class Gasto extends Component {
    render(){
        const {cantidadGasto, nombreGasto} = this.props.gasto
        return(
            <li>
                {nombreGasto}
                <span className="">$ {cantidadGasto}</span>
            </li>
        )
    }
}
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto