import React, {Component} from 'react';
import '../css/index.css';
import Header from "./Header"
import {Row, Col, Container} from "reactstrap"
import Formulario from "./Formulario"
import Listado from "./Listado"
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  state = {
    gastos: {},
    presupuesto: "",
    restante: ""
  }

  componentDidMount(){
    this.obtenerPresupuesto()
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es el presupuesto?')
    let resultado = validarPresupuesto(presupuesto)
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto()
    }
  }

  agregarGasto = (gasto) => {
    // tomar una copia del state actual
    const gastos = {...this.state.gastos}

    // agregar el gasto al state
    gastos[`gasto${Date.now()}`] = gasto

    // restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto)

    // poner en state
    this.setState({
      gastos
    })
  }

  restarPresupuesto = cantidad => {
    // leer el gasto
    let restar = Number(cantidad)
    // tomar una copia del state actual
    let restante = this.state.restante
    // lo restamos
    restante -= restar
    // agregamos al nuevo state
    this.setState({
      restante
    })
  }


  render(){
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal"></Header>
        <div className="contenido-principal contenido">
            <Row>
              <Col>
                <Formulario agregarGasto={this.agregarGasto}></Formulario>
              </Col>
              <Col>
                <Listado gastos={this.state.gastos}></Listado>
                <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                >
                </ControlPresupuesto>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
