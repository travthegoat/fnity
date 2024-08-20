import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import { createRoot } from 'react-dom/client'
import Dashboard from './pages/Dashboard/Dashboard';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { StrictMode } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import AddItemPage from './pages/AddItemPage/AddItemPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ItemsPage from './pages/ItemsPage/ItemsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/dashboard' replace />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/items',
        element: <ItemsPage />
    },
    {
        path: '/add-item',
        element: <AddItemPage />
    },
    {
        path: '/orders',
        element: <OrdersPage />
    },
    {
        path: '/contacts',
        element: <ContactsPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
