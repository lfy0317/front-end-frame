import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

export default function NoFound() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Alert className="w-4/12">
				<RocketIcon className="h-4 w-4" />
				<AlertTitle>404 Not found page</AlertTitle>
				<AlertDescription>
					<a className="hover:text-blue-500 underline" href="/">
						Go Home
					</a>
				</AlertDescription>
			</Alert>
		</div>
	);
}
