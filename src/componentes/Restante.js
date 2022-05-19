import React, {Component} from "react"
import { revisarPresupuesto } from "../helper"

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

export default Restante