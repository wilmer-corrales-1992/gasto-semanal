import React, {Component} from "react"

class Listado extends Component {
    render(){
        return(
            <div>
                <h2>Listado</h2>
                {console.log(this.props.gastos)}
            </div>
        )
    }
}

export default Listado