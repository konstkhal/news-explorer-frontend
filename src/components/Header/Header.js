import "./Header.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { usePopups } from "../../contexts/PopupContext";
import useWindowSize from "../../hooks/UseWindowSize";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MAX_MOBILE_SIZE } from "../../utils/constants";

const Header = () => {
  const [popupState] = usePopups();
  const [headerClassName, setHeaderClassName] = useState("header");
  const isMobileSized = useWindowSize().width < MAX_MOBILE_SIZE;
  const isSavedArticles = useLocation().pathname === "/saved-articles";

  useEffect(() => {
    if (isMobileSized) {
      setHeaderClassName(
        `header ${popupState.isUserMenuOpen ? "header_theme_dark" : ""}`
      );
    } else {
      setHeaderClassName("header");
    }
  }, [isMobileSized, popupState.isUserMenuOpen, isSavedArticles]);

  return (
    <header className={headerClassName}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
