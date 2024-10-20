import React from "react";
import ChatLayout from "@/layout/chat/ChatLayout";

const Chat = React.lazy(() => import("@/views/chat/Chat"));

const chatRouter = [
	{
		path: "/",
		element: <ChatLayout />,
		children: [
			{
				path: "/chat",
				element: <Chat />
			}
		]
	}
];

export default chatRouter;
