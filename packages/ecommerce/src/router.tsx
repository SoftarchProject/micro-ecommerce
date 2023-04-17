import { useRoutes } from "react-router-dom";
import React from 'react'
import App from "./pages/App";
import History from "./pages/History";

export default function router() {
    return useRoutes([
        { path: "/", element: <App /> },
        { path: "/history", element: <History />},
      ]);
}
