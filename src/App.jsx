import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<main className="w-screen min-h-screen overflow-hidden flex flex-col justify-start items-start bg-gradient-to-b from-[#00274d] to-[#537895]">
			<Header />

			{/* Hero Section */}
			<section className="relative w-full min-h-screen pb-10 px-10 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden flex justify-center items-center">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
					<div className="max-w-xl mx-auto text-center">
						<h1 className="text-4xl font-bold sm:text-6xl">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
								Your Personalized Banking Assistant
							</span>
						</h1>
						<p className="mt-5 text-base text-white sm:text-xl">
							{`BTC Conversa uses conversational AI to simplify your banking experience. 
							Manage your account, view transactions, and get personalized insights—effortlessly.`}
						</p>

						<a
							href="#"
							className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
							role="button">
							Get Started
							<svg
								className="w-6 h-6 ml-8 -mr-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="relative w-full py-20 px-10 sm:py-24 sm:px-16 lg:px-24 bg-gradient-to-b from-[#537895] to-[#09203f]">
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					{/* Heading */}
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-4xl font-bold text-white sm:text-5xl">
							Features
						</h2>
						<p className="mt-4 text-base text-gray-300 sm:text-lg">
							{`BTC Conversa offers a range of features to help you manage your finances. 
							From account management to personalized insights, we've got you covered.`}
						</p>
					</div>

					{/* Features Grid */}
					<div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
						{/* Feature 1: Real-time Transactions */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Real-time Transactions
								</h3>
								<p className="mt-2 text-gray-300">
									View all your transactions instantly and stay up to date with
									your finances.
								</p>
							</div>
						</div>

						{/* Feature 2: Automated Responses */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Automated Responses
								</h3>
								<p className="mt-2 text-gray-300">
									Get quick answers to common queries with our AI-powered
									chatbot.
								</p>
							</div>
						</div>

						{/* Feature 3: Personalized Insights */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Personalized Insights
								</h3>
								<p className="mt-2 text-gray-300">
									Receive tailored financial advice based on your transaction
									history.
								</p>
							</div>
						</div>

						{/* Feature 4: Fund Transfers */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Fund Transfers
								</h3>
								<p className="mt-2 text-gray-300">
									Make seamless fund transfers between your accounts or to other
									banks.
								</p>
							</div>
						</div>

						{/* Feature 5: Secure Payments */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Secure Payments
								</h3>
								<p className="mt-2 text-gray-300">
									Ensure your payments are processed securely with advanced
									encryption.
								</p>
							</div>
						</div>

						{/* Feature 6: Spend Analytics */}
						<div className="p-8 bg-[#1E2A2A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="text-center">
								<svg
									className="w-12 h-12 mx-auto text-blue-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-white">
									Spend Analytics
								</h3>
								<p className="mt-2 text-gray-300">
									Track your spending patterns and get tips on how to improve
									your budget.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</main>
	);
}

export default App;
