import React, { Component } from "react";
import "./Contacto.css";

class Contacto extends Component {

	render(){

		const { isAuthenticated } = this.props.auth;
		
		return (
			<React.Fragment>
				{
					isAuthenticated() && (
						<form>
							<legend>Formulario de Contacto</legend>
							<div className="input-field">
								<label>Nombre: </label>
								<input type="text" placeholder="Tu Nombre" />
							</div>
							<div className="input-field">
								<label>Email: </label>
								<input type="email" placeholder="Tu Email" />
							</div>
							<div className="input-field">
								<label>Mensaje: </label>
								<textarea></textarea>
							</div>
							<div className="input-field enviar">
								<input type="submit" value="Enviar" />
							</div>
						</form>
					)
				}

				{
					!isAuthenticated() &&  (
						<div className="contenedor-boton">
							<p>Para enviar un mensaje debes estar logueado:</p>
							<a href="!#" className="boton" onClick={ this.login }>Iniciar sesión</a>
						</div>
					)
				}
			</React.Fragment>
		);
	};
};

export default Contacto;
