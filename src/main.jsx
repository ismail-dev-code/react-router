import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Laptops from './components/Laptops/Laptops';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
    {index: true, Component: Home},
    {path: 'mobiles', Component: Mobiles},
    {path: 'laptops', Component: Laptops},
    ]
  },
  {
    path: "about",
    element: <div>i am about to see</div>
  },
  {
    path: "app",
    element: <App></App>
  },
  {
    path: "blogs",
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
