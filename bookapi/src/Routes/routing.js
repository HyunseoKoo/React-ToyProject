import {createBrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Layout from '../Components/Layout';
import AddPost from '../Pages/AddPost';
import Introduce from '../Pages/BookIntroduce';

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/menu1/:menu',
                element: <Introduce /> 
            },
            {
                path: '/menu2/:menu',
                element: <Search />
            },
            {
                path: '/menu3/:menu',
                element: <AddPost />
            }
        ]
    }
]);

export default router;