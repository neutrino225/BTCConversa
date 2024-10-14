import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const BotMessage = ({ message }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className={`flex justify-start message ${isVisible ? "visible" : ""}`}>
			<div className="bg-blue-500 p-3 rounded-lg max-w-[50%] shadow">
				<p className="text-white">{message}</p>
			</div>
		</div>
	);
};

export default BotMessage;
