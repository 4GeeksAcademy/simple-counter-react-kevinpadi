import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./secondsCounter";

//create your first component
const Home = ({number1, number2, number3, number4, number5, number6 }) => {
	return (
		<div className="container-fluid pt-5 bg-black vh-100">
			<SecondsCounter number1={number1} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6} />
		</div>
	);
};

export default Home;
