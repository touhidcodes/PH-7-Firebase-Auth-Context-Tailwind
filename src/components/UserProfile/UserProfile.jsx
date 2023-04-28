import React, { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";

const UserProfile = () => {
	const { user } = useContext(UserContext);
	// console.log(user);
	return <div>{user.email}</div>;
};

export default UserProfile;
