import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//ejemplo de funcion formato antiguo
////function (a,b){
//    return a+b
//}

// la funcion anterior en formato moderno: funcion flecha

//const suma=(a,b)=>{
// return a+b
//}

// crear un componente min31
const Container = props => {
	//parámetros deben ser objetos o sea props
	// retorna una funcion.  Como ejemplo la de linea 28. debe estar en un div
	return (
		<div>
			<Home />
			<Home />
			<Home />
		</div>
	);
};

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
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
