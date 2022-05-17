import React, {Component} from "react"

class Formulario extends Component{

    // refs para los campos del formulario
    nombreGasto = React.createRef()
    cantidadGasto = React.createRef()

    crearGasto = (e) =>{
        // prevenir el default
        e.preventDefault()

        // crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value,
        }

        // agregarlo y enviarlo por props
        this.props.agregarGasto(gasto)

        // resetear el formulario (opcional)
        e.currentTarget.reset()
    }

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGasto} className="" type="text" placeholder="Ej. Transporte" />
                </div>
                <br/>
                <div className="">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGasto} className="" type="text" placeholder="Ej. 300" />
                </div>
                <br/>
                <input className="" type="submit" value="Agregar" />
            </form>
        )
    }
}

export default Formulario