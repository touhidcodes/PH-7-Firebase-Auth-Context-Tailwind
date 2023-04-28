import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProviders from "./components/Providers/AuthProviders.jsx";
import Orders from "./components/Orders/Orders.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/orders",
				element: (
					<PrivateRoute>
						<Orders />
					</PrivateRoute>
				),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<UserProfile />
					</PrivateRoute>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router} />
		</AuthProviders>
	</React.StrictMode>
);
