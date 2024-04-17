import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Navbar from '../Navbar/Navbar'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

	const { createUser, updateUserProfile } = useContext(AuthContext)

	const [error, setError] = useState('');
	const [passError, setPassError] = useState('')
	const [showPass, setShowPass] = useState(false)



	const handleForRegister = e => {
		e.preventDefault();
		console.log(e.currentTarget)
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const image = form.get("image")
		const password = form.get("password");
		console.log(name, email, image, password);

		setError('');
		setPassError('')

		if (!/[A-Z]/.test(password)) {
			setError("You should have an upperCase in the Password")
			return;
		}
		else if (password.length < 6) {
			setPassError("Password Should Be Minimum 6 Character")
			return;
		}
		createUser(name, email, password)
			.then(result => {
				updateUserProfile(name, image)
					.then(() => {
						console.log(result.user);
					})
			})
			.catch(error => {
				console.error(error)
			})


	}

	return (
		<div>
			<Helmet>
				<title>Homies - Register</title>
			</Helmet>
			<Navbar></Navbar>
			<div className="w-full mx-auto mt-10 max-w-md p-8 space-y-3 rounded-xl dark:bg-green-500 dark:text-gray-800">
				<h1 className="text-2xl font-bold text-center">Register</h1>


				<form onSubmit={handleForRegister} className="space-y-6">

					<div className="space-y-1 text-sm">

						<label htmlFor="username" className="block dark:text-gray-600">Name</label>

						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="w-full border-2 border-black px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>

					<div className="space-y-1 text-sm">

						<label htmlFor="username" className="block dark:text-gray-600">Email</label>

						<input
							type="email"
							name="email"
							placeholder="Example@gmail.com"
							className="w-full border-2 border-black px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>

					<div className="space-y-1 text-sm">

						<label htmlFor="username" className="block dark:text-gray-600">Photo URL</label>

						<input
							type="url"
							name="image"
							placeholder="Photo Url"
							className="w-full border-2 border-black px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>

					<div className="space-y-1 text-sm">

						<label htmlFor="password" className="block dark:text-gray-600">Password</label>

						<input
							type={showPass ? "text" : "password"}
							name="password"
							placeholder="******"
							className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800
							 focus:dark:border-violet-600" />

			<span className="relative bottom-7 left-[350px]" onClick={()=>setShowPass(!showPass)}>
				{showPass?<FaRegEye></FaRegEye>:<FaRegEyeSlash></FaRegEyeSlash>}
				</span>

						{/* <div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div> */}
					</div>

					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>

					<div className="text-center">
						{
							error && <p className="font-bold text-red-600">Password Should have at least one upper case </p>
						}
						{
							passError && <p className="font-bold text-red-600">
								Password Should Be Minimum 6 Character
								</p>
						}
					</div>
				</form>


				<p className="text-xs text-center font-bold text-[17px] sm:px-6 dark:text-gray-600">Have an account?
					<button>
						<Link to="/login">
							<a
								rel="noopener noreferrer"
								href="#"
								className="underline dark:text-gray-800">Login</a>
						</Link>
					</button>
				</p>
			</div>
		</div>
	);
};

export default Register;