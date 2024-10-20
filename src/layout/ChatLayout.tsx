import React from "react";
import { Outlet } from "react-router-dom";

export default class ChatLayout extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<Outlet />
			</div>
		);
	}
}
