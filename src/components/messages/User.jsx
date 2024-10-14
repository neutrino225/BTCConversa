import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const UserMessage = ({ message }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div className={`flex justify-end message ${isVisible ? "visible" : ""}`}>
			<div className="bg-gray-600 p-3 rounded-lg max-w-[50%] shadow">
				<p className="text-white">{message}</p>
			</div>
		</div>
	);
};

export default UserMessage;
