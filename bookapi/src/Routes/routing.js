import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import BookIntroduce from '../Pages/BookIntroduce';
import Search from '../Pages/Search';
import Layout from '../Components/Layout';

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
                element: <BookIntroduce />
            },
            {
                path: '/search',
                element: <Search />
            }
        ]
    }
]);

export default router;