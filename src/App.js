import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {HomePage, MoviePage, NotFoundPage, TestPage} from "./pages";
import {GenrePage} from "./pages/GenrePage/GenrePage";

const App = () => (
    <div className="App">
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'genre'} element={<GenrePage/>}/>
                <Route path={'genre/movie'} element={<MoviePage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
                <Route path={'test'} element={<TestPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    </div>
);

export default App;
