import React from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;
