import React, {Component} from "react"

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

export default Gasto