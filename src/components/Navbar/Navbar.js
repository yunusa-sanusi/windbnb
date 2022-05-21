import React from "react";
import { MdSearch } from "react-icons/md";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const {
    openSearchbar,
    locationInputText,
    guestInputText,
    changeLocationInputText,
    changeGuestInputText,
  } = useGlobalContext();

  return (
    <nav className="header__nav">
      <img src={logo} alt="airbnb logo" className="header__nav-logo" />
      <form className="header__nav-search-form">
        <input
          type="text"
          className="header__nav-search-form__input-text"
          placeholder="Location"
          onClick={openSearchbar}
          value={locationInputText}
          onChange={(e) => changeLocationInputText(e.target.value)}
        />
        <input
          type="text"
          className="header__nav-search-form__input-num"
          placeholder="Add Guest"
          onClick={openSearchbar}
          value={guestInputText}
          onChange={(e) => changeGuestInputText(e.target.value)}
        />
        <button type="submit">
          <MdSearch className="header__nav-search-form__btn-submit" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
