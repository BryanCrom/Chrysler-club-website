import { useEffect, useRef } from "react";

const useNav = () => {
  const detailsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.open = false;
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { detailsRef };
};

export default useNav;
