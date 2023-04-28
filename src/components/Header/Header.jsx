import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Header = () => {
	const { user, logOut } = useContext(UserContext);

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<nav className='text-white font-semibold text-xl'>
			<div className='navbar bg-primary rounded'>
				<a className='btn btn-ghost normal-case text-xl'>FB Auth</a>
				<Link className='ml-5' to={"/"}>
					Home
				</Link>
				<Link className='ml-5' to={"/orders"}>
					Orders
				</Link>
				<Link className='ml-5' to={"/profile"}>
					Profile
				</Link>
				<Link className='ml-5' to={"/login"}>
					Log In
				</Link>
				<Link className='ml-5 mr-10' to={"/register"}>
					Register
				</Link>
				{user ? (
					<>
						<span>{user.email}</span>
						<button
							className='btn btn-outline btn-success ml-10'
							onClick={handleLogout}
						>
							Log Out
						</button>
					</>
				) : (
					<Link to={"/login"}>
						<button className='btn btn-outline btn-error ml-10'>Log In</button>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Header;
