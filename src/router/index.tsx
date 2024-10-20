import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NoFound from "@/views/NoFound";
import chatRouter from "./chatRouter";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <NoFound />,
		element: <Navigate to="/chat" />
	},
	...chatRouter
]);

export default router;
