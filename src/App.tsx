import * as React from 'react';
import reactLogo from '@/assets/images/react.svg';
import * as styles from './index.module.less';

const App: React.FC = () => {
    console.log(styles);

    return (
        <div className={styles.wrapper}>
            <img src={reactLogo} />
            hello 小柒
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
};

export default App;
