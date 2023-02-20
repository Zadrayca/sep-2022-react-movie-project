// import {useSearchParams} from "react-router-dom";
// import {moviesActions} from "../../redux";
// import {useDispatch, useSelector} from "react-redux";
//
//
// const useQueryPage = () => {
//
//     const {page} = useSelector(state => state.movies);
//     const [query, setQuery] = useSearchParams({page: `${page}`});
//     const dispatch = useDispatch();
//
//     const nextPageQuery = async () => {
//         const currentPage = +query.get('page');
//         const newPage = +currentPage + 1;
//         setQuery({ page: `${newPage}` });
//         await dispatch(moviesActions.setPage(newPage));
//         console.log(query.get('page'));
//         console.log(page);
//
//     };
//
//     const prevPageQuery = async () => {
//         const currentPage = +query.get('page');
//         const newPage = +currentPage - 1;
//         setQuery({ page: `${newPage}` });
//         await dispatch(moviesActions.setPage(newPage));
//         console.log(query.get('page'));
//     };
//
//     const firstPageQuery = async () => {
//         const newPage = 1;
//         setQuery({ page: `1` });
//         await dispatch(moviesActions.setPage(newPage));
//         console.log(query.get('page'));
//         console.log(page);
//
//     };
//
//     return {
//         nextPageQuery,
//         prevPageQuery,
//         firstPageQuery
//     }
// };
//
// export {
//     useQueryPage
// };
