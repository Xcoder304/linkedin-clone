import React from "react";
import Header from "./components/header/Header";
import Home from "./Page/home/Home";
import CreatePostModal from "./Page/home/CreatePostModal";
import Login from "./components/Login";
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
        path="/createpost"
        element={
          <>
            <CreatePostModal />
            <Header />
            <Home />
          </>
        }
      />
      {/* <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      /> */}
      <Route
        path="/mynetwork"
        element={
          <>
            <Header />
          </>
        }
      />{" "}
      <Route
        path="/jobs"
        element={
          <>
            <Header />
          </>
        }
      />{" "}
      <Route
        path="/message"
        element={
          <>
            <Header />
          </>
        }
      />
      <Route
        path="/notifation"
        element={
          <>
            <Header />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
