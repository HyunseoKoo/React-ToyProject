import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Layout from '../Components/Layout';
import AddPost from '../Pages/AddPost';
import Introduce from '../Pages/BookIntroduce';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/introduce',
                element: <Introduce />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/add',
                element: <AddPost />
            }
        ]
    }
]);

export default router;