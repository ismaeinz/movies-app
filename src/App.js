import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import GlobalContextProvider from "./context/GlobalContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
