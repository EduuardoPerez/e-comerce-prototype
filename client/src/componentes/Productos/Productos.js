import React, { Component } from "react";
import Producto from "../Producto/Producto";
import Buscador from "../Buscador/Buscador";
import "./Productos.css";

class Productos extends Component {

	state = {
		productos: [],
		terminoBusqueda: ''
	}

	componentWillMount() {
		this.queryAPI();
	}

	queryAPI = () => {
		console.log(this.props.auth);
	}

	login = () => {
		this.props.auth.login();
	}

  render() {

		const { isAuthenticated } = this.props.auth;

    return (
      <div className="productos">
        <h2>Nuestros Productos</h2>
        <Buscador
					busqueda={this.props.busquedaProducto} 
				/>
        <ul className="lista-productos">
					{/* {Object.keys(this.props.productos).map(producto => (
						<Producto
							informacion={this.props.productos[producto]}
							key={producto}
						/>
					))} */}
        </ul>
				{
					!isAuthenticated() &&  (
						<div className="contenedor-boton">
							<p>Para ver el contenido debes estar logueado:</p>
							<a className="boton" onClick={ this.login }>Iniciar sesión</a>
						</div>
					)
				}
      </div>
    );
  }
}

export default Productos;
