import React from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/images/react.svg";
import * as styles from "./Chat.module.less";

export default function Chat() {
	console.log(styles, "test");
	return (
		<div className={styles.wrapper}>
			about
			<img src={reactLogo} />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>click btn 11</Button>
		</div>
	);
}
