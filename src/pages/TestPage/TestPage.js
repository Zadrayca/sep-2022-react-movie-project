import css from './TestPage.module.css';
import {TestAPI} from "../../components/TestApi/TestAPI";

const TestPage = () => {
    return (
        <div className={css.testPage}>
            <h1>Test Page</h1>
            <TestAPI/>
        </div>
    );
};

export {
    TestPage
};