import { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import logo from "../assets/Conversa.png";
import Chatbot from "../components/Chatbot";
import useChatStore from "../store/useChatStore";
import btclogo from "../assets/BTC.png";
import { FeatureIcon, FeatureCard } from "../components/Features";

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const clearMessages = useChatStore((state) => state.clearMessages);

	const toggleSidebar = () => setIsOpen(!isOpen);

	const handleLogout = () => {
		clearMessages();
		localStorage.removeItem("user");
		window.location.href = "/";
	};

	const features = [
		{
			icon: <FeatureIcon d="M13 10V3L4 14h7v7l9-11h-7z" />,
			title: "Real-time Transactions",
			description:
				"View all your transactions instantly and stay up to date with your finances.",
		},
		{
			icon: (
				<FeatureIcon d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
			),
			title: "Automated Responses",
			description:
				"Get quick answers to common queries with our AI-powered chatbot.",
		},
		{
			icon: (
				<FeatureIcon d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
			),
			title: "Personalized Insights",
			description:
				"Receive tailored financial advice based on your transaction history.",
		},
		{
			icon: (
				<FeatureIcon d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
			),
			title: "Fund Transfers",
			description:
				"Make seamless fund transfers between your accounts or to other banks.",
		},
		{
			icon: (
				<FeatureIcon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
			),
			title: "Secure Payments",
			description: "Make secure payments to merchants with just a few clicks.",
		},
		{
			icon: (
				<FeatureIcon d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
			),
			title: "Notifications",
			description:
				"Receive real-time notifications about your account activities.",
		},
	];

	return (
		<>
			{/* Main content and Sidebar Panel Group */}
			<PanelGroup direction="horizontal">
				<Panel minSize={50}>
					<div className="h-screen flex flex-col bg-gray-900">
						{/* Header inside the resizable panel */}
						<header className="w-9/12 mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-transparent">
							{/* Logo */}
							<a className="flex gap-2 items-center">
								<img
									className="h-8 w-auto"
									src={logo}
									alt="BTC Conversa Logo"
								/>
								<span className="text-lg text-white font-poppins tracking-wide font-extrabold">
									COVERSA
								</span>
							</a>

							<button
								onClick={handleLogout}
								className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
								Logout
							</button>
						</header>

						{/* <main className="flex h-screen pt-32 overflow-y-auto">
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
								<h1 className="text-3xl font-semibold text-white">
									Welcome to Conversa
								</h1>
								<p className="text-white mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									ullamcorper, nunc et ultrices posuere, turpis felis ultrices
									odio, nec dictum nulla nunc ac nisi. Nullam auctor, libero
									eget ultricies ultricies, purus turpis aliquam justo, in
									sollicitudin lorem libero vitae eros.
								</p>
							</div>
						</main> */}
						<main className="flex flex-col h-screen pt-32 overflow-y-auto bg-gray-900">
							{/* Hero Section */}
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
								<h1 className="text-6xl font-semibold text-white">
									Welcome to <span className="text-red-600">Conversa</span>
								</h1>
								<p className="text-white mt-4">
									Simplifying your banking experience with AI-powered
									conversations.
								</p>
								{/* Chat button instruction */}
								<p className="text-white mt-6 text-lg font-bold">
									Click the chat button on the right to start talking to the
									Conversa bot!
								</p>
							</div>

							{/* Sample Prompts Section */}
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
								<h2 className="text-3xl font-semibold text-white">
									How to Talk to Conversa?
								</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
									{/* First Card: Account Balance */}
									<div className="bg-blue-900 p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl">
										<h3 className="text-2xl font-semibold ">Prompt:</h3>
										<p className="mt-2 text-lg text-gray-200">
											&quot;What’s my account balance?&quot;
										</p>
										<h3 className="text-xl mt-4 font-semibold text-red-400">
											Response:
										</h3>
										<p className="text-gray-100">
											&quot;Your account balance is $1,250.&quot;
										</p>
									</div>

									{/* Second Card: Transaction History */}
									<div className="bg-blue-900 p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl">
										<h3 className="text-2xl font-semibold">Prompt:</h3>
										<p className="mt-2 text-lg text-gray-200">
											&quot;Show me my transaction history.&quot;
										</p>
										<h3 className="text-xl mt-4 font-semibold text-red-400">
											Response:
										</h3>
										<p className="text-gray-100">
											&quot;Here are your last 5 transactions.&quot;
										</p>
									</div>
									<div className="bg-blue-900 p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-xl">
										<h3 className="text-2xl font-semibold ">Prompt:</h3>
										<p className="mt-2 text-lg text-gray-200">
											&quot;Transfer $500 to John Doe.&quot;
										</p>
										<h3 className="text-xl mt-4 font-semibold text-red-400">
											Response:
										</h3>
										<p className="text-gray-100">
											&quot;$500 has been successfully transferred to John
											Doe.&quot;
										</p>
									</div>
								</div>
							</div>

							{/* Features Section */}
							<div className="flex flex-col gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
								<h2 className="text-3xl font-semibold text-white">
									Why Choose Conversa?
								</h2>

								<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
									{features.map((feature, index) => (
										<FeatureCard key={index} {...feature} />
									))}
								</div>
							</div>

							{/* Footer */}
							<footer className="mt-auto bg-gray-800 py-4">
								<div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
									<div className="flex justify-center items-center gap-2">
										<p className="text-white/80 text-lg font-bold">
											Powered by
										</p>
										<img src={btclogo} alt="BluTech Logo" className="h-5" />
									</div>
								</div>
							</footer>
						</main>
					</div>
				</Panel>

				{/* Resizer Handle between panels */}
				{isOpen && (
					<PanelResizeHandle className="w-1 bg-gray-800 hover:bg-gray-700 cursor-col-resize" />
				)}

				{isOpen && (
					<Panel minSize={25} defaultSize={30}>
						{/* Sidebar */}
						<Chatbot toggleSidebar={toggleSidebar} />
					</Panel>
				)}
			</PanelGroup>

			{/* Chat toggle button */}
			<button
				onClick={toggleSidebar}
				className={`fixed bottom-4 right-4 z-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 ${
					isOpen ? "hidden" : ""
				}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
					/>
				</svg>
			</button>
		</>
	);
};

export default Main;
