import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
const pathname = window.location.pathname;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <HomePage />,
      },
    ]
  }
]);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();