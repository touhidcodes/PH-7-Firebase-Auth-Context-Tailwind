import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
// console.log(app);
export const UserContext = createContext(null);

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log("auth state is changed", currentUser);
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const logOut = () => {
		return signOut(auth);
	};
	const userInfo = { user, createUser, signIn, logOut };
	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
};

export default AuthProviders;
