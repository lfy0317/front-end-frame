import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/globals.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app")!);
// v18 的新方法
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
