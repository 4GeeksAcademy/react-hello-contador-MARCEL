import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Set up the interval
		const intervalId = setInterval(() => {
			// Use the functional form of setCount to get the correct previous state
			setCount(prevCount => prevCount + 1);
		}, 1000); // 1000 milliseconds = 1 second

		// Cleanup function to clear the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<div className="text-center">
{ count}


		</div>
	);
};

export default Home;