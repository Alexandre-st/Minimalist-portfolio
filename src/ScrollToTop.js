import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 1000, behavior: 'smooth'});
  }, [pathname]);

  return null;
};