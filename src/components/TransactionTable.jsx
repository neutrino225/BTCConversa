/* eslint-disable react/prop-types */
const TransactionTable = ({ transactions }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white shadow-md rounded-lg">
				<thead className="bg-gray-800 text-white">
					<tr>
						<th className="py-3 px-6 text-left">Date</th>
						<th className="py-3 px-6 text-left">Description</th>
						<th className="py-3 px-6 text-right">Amount</th>
						<th className="py-3 px-6 text-right">Type</th>
					</tr>
				</thead>
				<tbody className="text-gray-700">
					{transactions.map((transaction, index) => (
						<tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
							<td className="py-3 px-6 text-left">{transaction.date}</td>
							<td className="py-3 px-6 text-left">{transaction.description}</td>
							<td className="py-3 px-6 text-right">
								${transaction.amount.toFixed(2)}
							</td>
							<td className="py-3 px-6 text-right">
								<span
									className={`py-1 px-3 rounded-full ${
										transaction.type === "credit"
											? "bg-green-200 text-green-800"
											: "bg-red-200 text-red-800"
									}`}>
									{transaction.type}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
