import { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import logo from "../assets/Conversa.png";
import Chatbot from "../components/Chatbot";
import useChatStore from "../store/useChatStore";

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const clearMessages = useChatStore((state) => state.clearMessages);

	const toggleSidebar = () => setIsOpen(!isOpen);

	const handleLogout = () => {
		clearMessages();
		localStorage.removeItem("user");
		window.location.href = "/";
	};

	return (
		<>
			{/* Main content and Sidebar Panel Group */}
			<PanelGroup direction="horizontal">
				<Panel minSize={50}>
					<div className="h-screen bg-gradient-to-b from-[#537895] to-[#09203f] flex flex-col">
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
									CONVERSA
								</span>
							</a>

							<button
								onClick={handleLogout}
								className="relative py-2 px-8 text-black text-base font-bold overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
								Logout
							</button>
						</header>

						<main className="flex h-screen pt-32 overflow-y-auto">
							{/* Main content */}
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
