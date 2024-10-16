import * as React from "react";
import reactLogo from "@/assets/images/react.svg";
import * as styles from "./index.module.less";

const App: React.FC = () => {
    console.log(styles);
    
    return (
        <div className={styles.wrapper}>
            <img src={reactLogo} />
            hello 小柒
        </div>
    );
};

export default App;