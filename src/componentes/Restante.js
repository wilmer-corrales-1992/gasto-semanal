import React, {Component} from "react"
import { revisarPresupuesto } from "../helper"
import PropTypes from 'prop-types';

class Restante extends Component {
    render(){
        const restante = this.props.restante
        const presupuesto = this.props.presupuesto
        const clase = revisarPresupuesto(presupuesto, restante)
        return(
            <div className={clase}>
                Restante: $ {restante}
            </div>
        )
    }
}
Restante.propTypes = {
    restante: PropTypes.string.isRequired,
    presupuesto: PropTypes.string.isRequired,
}
export default Restante