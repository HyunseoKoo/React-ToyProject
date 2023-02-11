import Layout from 'components/Layout';
import HomePage from 'pages/Home';
import DiaryInfo from 'pages/DiaryInfo';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/todo/post/:key',
        element: <DiaryInfo />,
      },
    ],
  },
]);

export default router;
