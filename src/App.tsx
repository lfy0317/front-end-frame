import * as React from "react";
import reactLogo from "@/assets/images/react.svg";
import css from "./index.less";

const App: React.FC = () => {
    console.log(css);
    
    return (
        <div className={css.wrapper}>
            <img src={reactLogo} />
            hello 小柒
        </div>
    );
};

export default App;