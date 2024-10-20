import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function withRouter<ComponentProps extends {}>(Component: React.ComponentType<ComponentProps>) {
	function ComponentWithRouterProp(props: React.JSX.IntrinsicAttributes & ComponentProps) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}
