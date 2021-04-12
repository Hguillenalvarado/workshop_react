import React, { useState, useEffect } from "react";
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
function Home(props) {
	const [count, setCount] = useState(0);

	{
		/*  useEffect(() => {
		// efectos secundarios
		const URL = "https://reqres.in/api/users?page=2";
		const additionalSettings = {
			headers: {
				"Content-Type": "application/json"
			},
			method: "GET"
		};

		fetch(URL, additionalSettings)
			.then(response => response.json())
			.then(data => {
				console.log(">>DATA API:", data);
			});
	}, []);
*/
	}
	return (
		<div className="text-center mt-5">
			<h1> {props.title} </h1>
			<span>{"count:" + count} </span>
			<p>
				{count > 2 ? (
					<img
						src={
							props.img === ""
								? "https://www.google.com/search?q=imagenes&rlz=1C1CHZN_esCR926CR927&sxsrf=ALeKk01nXV7Vz-fC_2bu1ry67JUM64yHUQ:1618240123316&tbm=isch&source=iu&ictx=1&fir=QUOv_rpoZt4zCM%252CYGl5kRGw4lfrHM%252C_&vet=1&usg=AI4_-kRYaz_igTJWuqHLDsA-36GLgVY9Jw&sa=X&ved=2ahUKEwikodid_vjvAhVCLKwKHWwjAmMQ9QF6BAgIEAE#imgrc=QUOv_rpoZt4zCM"
								: props.img
						}
					/>
				) : null}
			</p>
			<a
				href="#"
				onclik={() => {
					setCount(count + 1);
				}}
				className="btn btn-success">
				sumar
			</a>
			<a
				href="#"
				onclik={() => {
					if (count !== 0) setCount(count - 1);
				}}
				className="btn btn-success">
				Restar
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

	return (
		<div>
			<Home title="hola" img={""} />
			{/* <Home title="grupo" img={rigoImage}
			
			<Home title="Part time" img={rigoImage} /> */}
		</div>
	);
};

export default Container;
