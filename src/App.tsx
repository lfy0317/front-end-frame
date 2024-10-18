import * as React from "react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/images/react.svg";
import * as styles from "./index.module.less";

const App: React.FC = () => {
    console.log(styles, "test");
    return (
        <div className={styles.wrapper}>
            <img src={reactLogo} />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button>click btn 11</Button>
        </div>
    );
};

export default App;
