import React, { createContext, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
console.log(app);
export const UserContext = createContext(null);

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const userInfo = { user, createUser, signIn };
	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
};

export default AuthProviders;
