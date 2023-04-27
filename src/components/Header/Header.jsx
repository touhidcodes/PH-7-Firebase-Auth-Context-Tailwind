import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className='text-blue-600 font-semibold text-xl'>
			<Link className='ml-3' to={"/"}>
				Home
			</Link>
			<Link className='ml-3' to={"login"}>
				Log In
			</Link>
			<Link className='ml-3' to={"Register"}>
				Register
			</Link>
		</nav>
	);
};

export default Header;
