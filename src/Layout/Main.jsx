import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
