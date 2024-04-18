import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 맨 위로 스크롤
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
