import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import DesktopHeader from "../../components/header/desktop-header.component";
import MobileHeader from "../../components/header/mobile-header.component";
import Footer from "../../components/footer/footer.component";

import css from "./navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) setIsMobile(true);
      else setIsMobile(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <div className={css["container"]}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Navigation;
