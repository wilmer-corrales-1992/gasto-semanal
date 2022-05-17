import React, {Component} from 'react';
import '../css/index.css';
import Header from "./Header"
import {Row, Col, Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./Formulario"
import Listado from "./Listado"

class App extends Component {

  state = {
    gastos: {},
    presupuesto: "",
    restante: ""
  }

  agregarGasto = (gasto) => {
    // tomar una copia del state actual
    const gastos = {...this.state.gastos}

    // agregar el gasto al state
    gastos[`gasto${Date.now()}`] = gasto

    console.log(gastos)

    // poner en state
    this.setState({
      gastos
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
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
