import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(UserContext);
	if (loading) {
		return <progress className='progress w-56'></progress>;
	}
	if (user) {
		// console.log(user);
		return children;
	}
	return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;
