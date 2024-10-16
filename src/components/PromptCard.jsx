// eslint-disable-next-line react/prop-types
const PromptCard = ({ prompt, response }) => {
	return (
		<div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-800 hover:to-blue-700 border-l-4 border-red-500">
			<h3 className="text-2xl font-bold mb-2">Prompt:</h3>
			<p className="text-lg text-gray-200 mb-4">&quot;{prompt}&quot;</p>
			<h3 className="text-xl font-semibold text-blue-400 mb-2">Response:</h3>
			<p className="text-gray-100">&quot;{response}&quot;</p>
		</div>
	);
};

export default PromptCard;
