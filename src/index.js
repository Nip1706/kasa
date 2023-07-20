import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: 
    <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/flat",
    element: <h1>Nos appartements</h1>
  },
  {
    path: "/about",
    element: 
    <div>
      <Navbar /> 
      <Footer />
    </div>

  }
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
