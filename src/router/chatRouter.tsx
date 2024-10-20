import React from "react";
import ChatLayout from "@/layout/ChatLayout";

const Chat = React.lazy(() => import("@/views/chat/Chat"));

const chatRouter = [
	{
		path: "/chat",
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
