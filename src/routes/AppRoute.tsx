import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/offerings',
    element: <Home/>
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);

const AppRoute = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoute;
