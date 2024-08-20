import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ItemPage from './pages/ItemPage/ItemPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import OrderPage from './pages/OrderPage/OrderPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/shop',
        element: <ShopPage />
    },
    {
        path: '/item',
        element: <ItemPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/order',
        element: <OrderPage />
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
