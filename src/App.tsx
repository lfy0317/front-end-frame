import * as React from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/images/react.svg";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import * as styles from "./index.module.less";

const About: React.FC = () => {
	console.log(styles, "test");
	return (
		<div className={styles.wrapper}>
			about
			<img src={reactLogo} />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>click btn 11</Button>
		</div>
	);
};

const Home: React.FC = () => {
	return <div>home</div>;
};

class ChatLayout extends React.Component {
	render() {
		return (
			<div>
				111
				<Outlet />
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<ChatLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} errorElement={<div>error</div>} />
				</Route>
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		);
	}
}

export default App;
