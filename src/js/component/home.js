import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//ejemplo de funcion formato antiguo
////function suma(a,b){
//    return a+b
//}

// la funcion anterior en formato moderno: funcion flecha

//const suma=(a,b)=>{
// return a+b
//}

// crear un componente min31

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5">
			<h1> {props.title} </h1>
			<p>
				<img src={props.img} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

Home.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
};

const Container = () => {
	//parámetros deben ser objetos o sea props
	// retorna una funcion.  Como ejemplo la de linea 28. debe estar en un div
	return (
		<div>
			<Home title="hola" img={rigoImage} />
			<Home title="grupo" img={rigoImage} />
			<Home title="Part time" img={rigoImage} />
		</div>
	);
};

export default Container;
