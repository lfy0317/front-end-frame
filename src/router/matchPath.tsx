import React from "react";
import { Params, PathPattern, useMatch } from "react-router-dom";

interface MatchPathProps {
	path: string;
	Comp: React.ComponentType<any>;
}

export default function MatchPath({ path, Comp }: MatchPathProps) {
	let match = useMatch(path);
	return match ? <Comp {...match} /> : null;
}
