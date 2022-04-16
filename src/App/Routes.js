import React from "react";
import Header from "./components/header/Header";
import Home from "./Page/home/Home";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/mynetwork"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />{" "}
      <Route
        path="/jobs"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />{" "}
      <Route
        path="/message"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/notifation"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
