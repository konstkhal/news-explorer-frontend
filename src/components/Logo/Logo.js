import { Link } from "react-router-dom";
import { popupActions, usePopups } from "../../contexts/PopupContext";
import { useLocation } from "react-router";
import "./Logo.css";

const Logo = () => {
  const [popupState, popupReducer] = usePopups();
  const locationIsArticles = useLocation().pathname === "/saved-articles";
  const linkStyle = `logo-text logo-text_theme_${
    locationIsArticles && !popupState.isUserMenuOpen ? "dark" : "light"
  }`;
  return (
    <Link onClick={() => popupReducer(popupActions.closeAll)} to="/">
      <span className={linkStyle}>NewsExplorer</span>
    </Link>
  );
};

export default Logo;
