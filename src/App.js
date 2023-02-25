import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {HomePage, MoviePage, MoviesPage, NotFoundPage, SearchPage, UpcomingPage, TopRatedPage} from "./pages";

const App = () => (
    <div className="App">
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'upcoming'} element={<UpcomingPage/>}/>
                <Route path={'topRated'} element={<TopRatedPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'movie'} element={<MoviePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    </div>
);

export default App;
