import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ResponsiveDrawer from "../components/ResponsiveDrawer.jsx";
import AnimatedFooter from "../components/AnimatedFooter";

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="background">
          {Array.from({ length: 50 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="main-content">
          <ResponsiveDrawer />
          <AnimatedFooter />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;