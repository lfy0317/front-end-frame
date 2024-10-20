import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import "@/styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("app")!);
// v18 的新方法
root.render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
	</React.StrictMode>
);
