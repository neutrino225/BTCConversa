import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesSection from "../components/Features";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Conversa.png";

const LandingPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true); // Set loading to true initially
	const [fadeOut, setFadeOut] = useState(false); // State to control fade out effect

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true); // Start fade-out effect
			setTimeout(() => {
				setLoading(false); // Finally hide the loader
			}, 500); // Match this duration with the CSS transition duration
		}, 3400);

		return () => clearTimeout(timer); // Cleanup the timer on component unmount
	}, []);

	if (loading) {
		return (
			<main className="relative w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#00274d] to-[#537895]">
				<div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
					<div className="absolute animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-blue-500"></div>
					<img src={logo} className="rounded-full h-20 w-20 animate-pulse" />
				</div>
			</main>
		);
	}

	return (
		<main className="relative w-full min-h-screen flex flex-col justify-start items-start bg-gradient-to-b from-[#00274d] to-[#537895]">
			<Header />

			{/* Hero Section */}
			<section className="w-full min-h-screen px-4 md:px-10 flex justify-center items-center">
				<div className="w-full px-4 z-20">
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
							className="flex items-center justify-center mt-14"
							onClick={() => navigate("/register")}>
							<div className="relative group">
								<button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
									<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

									<span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
										<div className="relative z-10 flex items-center space-x-2">
											<span className="transition-all duration-500 group-hover:translate-x-1">
												Let&apos;s get started
											</span>
											<svg
												className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path
													clipRule="evenodd"
													d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
													fillRule="evenodd"
												/>
											</svg>
										</div>
									</span>
								</button>
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<FeaturesSection />

			{/* Footer */}
			<Footer />
		</main>
	);
};

export default LandingPage;
