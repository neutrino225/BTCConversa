import React from "react";
import Logo from "../assets/Conversa.png";

const Header = () => {
	return (
		<header className="absolute inset-x-0 top-0 z-10 w-full px-10">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 h-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<a
							href="#"
							title="BTC Conversa"
							className="flex justify-center items-center gap-2">
							<img
								className="w-auto h-8"
								src={Logo}
								alt="BTC Conversa Logo"
								style={{
									height: "30px",
									width: "30px",
								}}
							/>
							<p className="text-base text-white font-extrabold">CONVERSA</p>
						</a>
					</div>

					{/* Centered Navigation Links */}
					<div className="hidden lg:flex lg:flex-grow lg:justify-center lg:space-x-10">
						<a
							href="#features"
							className="text-base text-white transition-all duration-200 hover:text-opacity-80">
							Features
						</a>

						<a
							href="#solutions"
							className="text-base text-white transition-all duration-200 hover:text-opacity-80">
							Solutions
						</a>

						<a
							href="#resources"
							className="text-base text-white transition-all duration-200 hover:text-opacity-80">
							Resources
						</a>

						<a
							href="#pricing"
							className="text-base text-white transition-all duration-200 hover:text-opacity-80">
							Pricing
						</a>
					</div>

					{/* Call-to-Action */}
					<div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
						<a
							href="#login"
							className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80">
							Log in
						</a>

						<a
							href="#get-started"
							className="inline-flex items-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-blue-600 bg-white hover:bg-blue-100 rounded-lg"
							role="button">
							Get Started
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
						<svg
							className="block w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>

						<svg
							className="hidden w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
