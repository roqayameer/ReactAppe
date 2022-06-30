import React from "react";

import { Link, Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Sererc from "./Sererc";
export default function Router_Dom() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/sererc">
            <Sererc />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}
