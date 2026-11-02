/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Credits from './pages/credits';
import './index.css';
import Guesser from './pages/guesser';
import Tutorial from './pages/tutorial';
import FAQ from './pages/faq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
  {
    path: "/guesser",
    element: <Guesser />,
  },
  {
    path: "/faq",
    element: <FAQ/>,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
