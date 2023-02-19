import React, {useEffect, useState} from 'react';
import {urls} from "../../configs";
import {apiService} from "../../services/apiServices";

const TestAPI = () => {

    const [state, setState] = useState(null);
    const [page, setPage] = useState(1);


    useEffect(() => {
        apiService.get(`/discover/movie?page=${page}`).then(({data}) => setState(data))
    }, [page]);

    console.log(state);

    return (
        <div>
            <button onClick={()=> setPage(page + 1)}>page</button>
            {state && state.results.map(stat => <div key={stat.id}>{stat.title}</div>)}

        </div>
    );
};

export {
    TestAPI
};
