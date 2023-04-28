import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
	const { user } = useContext(UserContext);
	if (user) {
		// console.log(user);
		return children;
	}
	return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;
