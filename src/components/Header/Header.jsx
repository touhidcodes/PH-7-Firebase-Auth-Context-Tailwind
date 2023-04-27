import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className='text-blue-500 font-semibold text-xl'>
			<div className='navbar bg-base-300 rounded'>
				<a className='btn btn-ghost normal-case text-xl'>FB Auth</a>
				<Link className='ml-5' to={"/"}>
					Home
				</Link>
				<Link className='ml-5' to={"/login"}>
					Log In
				</Link>
				<Link className='ml-5' to={"/register"}>
					Register
				</Link>
			</div>
		</nav>
	);
};

export default Header;
