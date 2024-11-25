/* eslint-disable react/prop-types */
const PromptCard = ({ prompt, response }) => {
	return (
		<div
			className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-md sm:shadow-lg text-white transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-2xl hover:from-blue-800 hover:to-blue-700 border-l-4 border-red-500"
			style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}>
			<h3 className="text-2xl font-bold mb-2 antialiased">Prompt:</h3>
			<p className="text-lg text-gray-200 mb-4 antialiased">
				&quot;{prompt}&quot;
			</p>
			<h3 className="text-xl font-semibold text-blue-400 mb-2 antialiased">
				Response:
			</h3>
			<p className="text-gray-100 antialiased">&quot;{response}&quot;</p>
		</div>
	);
};

export default PromptCard;
