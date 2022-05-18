import React, {Component} from "react"
import Presupuesto from "./Presupuesto"
import Restante from "./Restante"

class ControlPresupuesto extends Component {
    render(){
        return(
            <div>
                <Presupuesto/>
                <Restante/>
            </div>
        )
    }
}

export default ControlPresupuesto