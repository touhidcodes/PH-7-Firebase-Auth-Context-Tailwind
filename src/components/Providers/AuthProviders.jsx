import React, { createContext } from "react";

export const  UserContext = createContext(null);

const AuthProviders = ({ children }) => {
	const user = { displayName: "Context API" };
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProviders;
