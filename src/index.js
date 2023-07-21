import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from '../src/Layout/Footer/Footer.jsx'
import Main from './Layout/Main/Main.jsx';
import HomePage from '../src/pages/HomePage.jsx';
import ApartmentPage from '../src/pages/Apartmentpage.jsx'

const HeaderFooterLayout = () => {
  return (
    <>
    <Navbar />
    <Main>
    <Outlet />
    </Main>
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <h1>À propos</h1>
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
