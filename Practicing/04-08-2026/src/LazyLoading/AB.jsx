import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./Home";

// Lazy Load Dashboard
const Dashboard = lazy(() => import("./Dashboard"));

function AB() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Suspense fallback={<h2>Loading Dashboard...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default AB;