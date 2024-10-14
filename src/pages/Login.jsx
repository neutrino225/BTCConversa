import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Login attempt with:", { email, password });

		setTimeout(() => {
			window.location.href = "/app";
		}, 1000);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#537895] to-[#09203f] py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full bg-[#1E2A2A] bg-opacity-60 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-10">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px flex flex-col gap-5">
						<div className="neumorphism bg-[#1E2A2A] p-4 rounded-md">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent text-zinc-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm bg-transparent"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="neumorphism bg-[#1E2A2A] p-4 rounded-md mt-4">
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent text-zinc-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm bg-transparent"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-300">
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a
								href="#"
								className="font-medium text-blue-400 hover:text-blue-300">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
							Sign in
						</button>
					</div>
				</form>
				<div className="text-center">
					<p className="mt-2 text-sm text-gray-400">
						Don&apos;t have an account?{" "}
						<a
							href="/register"
							className="font-medium text-blue-400 hover:text-blue-300">
							Sign up
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;