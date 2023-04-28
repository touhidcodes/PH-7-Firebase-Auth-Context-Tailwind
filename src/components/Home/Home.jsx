import React, { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";

const Home = () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			Home
			{user && <span>{user.displayName}</span>}
		</div>
	);
};

export default Home;
