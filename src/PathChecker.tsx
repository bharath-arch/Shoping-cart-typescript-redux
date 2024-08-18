import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AvailableRoutes: string[] = [
  "/",
  "/cart",
  "/about",
  "/login",
  "/register",
  "/contacts",
];

const PathChecker: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePathnameChange = () => {
      const query = window.location.pathname;
    //   console.log(query);
      if (!AvailableRoutes.includes(query)) {
        if (localStorage.getItem("userEmail")) {
          navigate("/");
        } else {
          navigate("/login");
        }
      }
    };

    
    handlePathnameChange();

    
    window.addEventListener("popstate", handlePathnameChange);

    
    return () => {
      window.removeEventListener("popstate", handlePathnameChange);
    };
  }, [navigate]);

  return null; 
};

export default PathChecker;
