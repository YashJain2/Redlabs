import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createHashRouter([
  {
    path: '/',
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
