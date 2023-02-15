import "./Hamburger.css";
import { popupActions, usePopups } from "../../contexts/PopupContext";
import { useLocation } from "react-router";

const Hamburger = () => {
  const [popupState, popupDispatch] = usePopups();
  const locationIsArticles = useLocation().pathname === "/saved-articles";
  const burgerClassName = `hamburger ${
    locationIsArticles && !popupState.isUserMenuOpen
      ? "hamburger_theme_dark"
      : "hamburger_theme_light"
  }`;
  const crossClassName = `cross-button ${
    locationIsArticles && !popupState.isUserMenuOpen
      ? "cross-button_theme_dark"
      : "cross-button_theme_light"
  }`;
  const displayButton = () =>
    popupState.isUserMenuOpen ? crossClassName : burgerClassName;

  const handleBurgerClick = () => {
    popupDispatch(popupActions.toggleUserMenu);
  };

  return (
    <button onClick={handleBurgerClick} className={displayButton()}></button>
  );
};

export default Hamburger;
