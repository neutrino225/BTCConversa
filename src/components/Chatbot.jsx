import { useState, useEffect, useRef } from "react";
import UserMessage from "./messages/User";
import BotMessage from "./messages/Bot";
import useChatStore from "../store/useChatStore";

// eslint-disable-next-line react/prop-types
const Chatbot = ({ toggleSidebar }) => {
	const [inputValue, setInputValue] = useState("");
	const { messages, addMessage } = useChatStore();
	const messagesEndRef = useRef(null);

	const handleSendMessage = () => {
		if (inputValue.trim()) {
			// Add user message to store
			addMessage({ text: inputValue, sender: "user" });
			setInputValue("");

			setTimeout(() => {
				addMessage({
					text: "I'm a bot. I don't have any responses yet.",
					sender: "bot",
				});
			}, 1000);
		}
	};

	// Handle key down event
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			// Allow shift + enter for new line
			e.preventDefault(); // Prevent default form submission
			handleSendMessage(); // Call send message handler
		}
	};

	// Scroll to the bottom of the chat messages whenever messages change
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	return (
		<aside className="bg-[#0B2A3E] w-full h-screen flex flex-col">
			<div className="p-4 border-b border-[#1D3A54]">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-semibold text-white">Chat</h2>
					<button
						onClick={toggleSidebar}
						className="text-gray-400 hover:text-gray-600 transition-colors z-30">
						{" "}
						{/* Increased z-index */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Chat messages */}
			<div className="flex-grow overflow-y-auto bg-[#102D41] p-4">
				<div className="flex flex-col space-y-4 gap-4">
					{/* Render messages from Zustand store */}
					{messages.map((message, index) => {
						if (message.sender === "user") {
							return <UserMessage key={index} message={message.text} />;
						}
						return <BotMessage key={index} message={message.text} />;
					})}
					{/* Reference to the end of the messages */}
					<div ref={messagesEndRef} />
				</div>
			</div>

			{/* Message input and send button */}
			<div className="p-3 bg-[#0B2A3E] border-t border-[#1D3A54]">
				<div className="flex">
					<textarea
						placeholder="Type a message..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)} // Update input value
						onKeyDown={handleKeyDown} // Handle Enter key press
						className="flex-1 p-3 bg-[#1A4564] text-white border-none outline-none placeholder-gray-400 resize-none" // Added resize-none
						rows="1" // Set default height
						style={{ overflow: "hidden" }} // Hide scrollbar initially
					/>
					<button
						onClick={handleSendMessage} // Call send message handler
						className="p-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-shrink-0" // Added flex-shrink-0 to maintain size
					>
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
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</aside>
	);
};

export default Chatbot;
