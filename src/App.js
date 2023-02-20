import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {HomePage, NotFoundPage, TestPage} from "./pages";

const App = () => (
    <div className="App">
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'test'} element={<TestPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    </div>
);

export default App;
