import React, { useEffect, useRef } from "react";
import {
  MdSearch,
  MdLocationPin,
  MdAdd,
  MdHorizontalRule,
  MdClear,
} from "react-icons/md";
import "./SearchBar.css";
import { useGlobalContext } from "../../context";

const SearchBar = () => {
  const {
    windowWidth,
    stays,
    closeSearchbar,
    guestInputText,
    locationInputText,
    changeGuestInputText,
    changeLocationInputText,
    suggestions,
    getSuggestions,
    showLocationSuggestions,
  } = useGlobalContext();

  const formContainerRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const locationContainer = useRef(null);
  const guestContainer = useRef(null);
  const suggestionContainer = useRef(null);

  useEffect(() => {
    if (windowWidth <= 578) {
      const height = formContainerRef.current.getBoundingClientRect().height;
      buttonContainerRef.current.style.position = "absolute";
      buttonContainerRef.current.style.top = `${height - 70}px`;
    } else {
      buttonContainerRef.current.style.position = "static";
    }

    if (windowWidth > 768) {
    }
  });

  const displayOptions = (e) => {
    suggestionContainer.current.style.display = "block";

    const targetElementName = e.target.getAttribute("name");
    if (targetElementName === "location") {
      guestContainer.current.style.display = "none";
      locationContainer.current.style.display = "block";
      formContainerRef.current.style.height = "auto";
    } else if (targetElementName === "guest") {
      locationContainer.current.style.display = "none";
      guestContainer.current.style.display = "block";
      formContainerRef.current.style.height = "350px";
    } else {
      locationContainer.current.style.display = "none";
      guestContainer.current.style.display = "none";
    }
  };

  return (
    <section className="search-section">
      <div
        className="search-section__container search-container slide-bottom"
        ref={formContainerRef}
      >
        <div className="mobile-menu">
          <p>Edit your search</p>
          <MdClear className="close-searchbar" onClick={closeSearchbar} />
        </div>
        <form className="search-section__container__search-form">
          <div className="location" onClick={displayOptions}>
            <input
              type="text"
              placeholder="Add location"
              name="location"
              value={locationInputText}
              onChange={(e) => {
                changeLocationInputText(e.target.value);
                getSuggestions(locationInputText);
              }}
            />
          </div>
          <div className="guests" onClick={displayOptions}>
            <input
              type="text"
              placeholder="Add guests"
              name="guest"
              value={guestInputText}
              onChange={(e) => changeGuestInputText(e.target.value)}
            />
          </div>
          <button type="submit" className="search-btn" ref={buttonContainerRef}>
            <MdSearch className="search-icon" /> Search
          </button>
        </form>

        <div className="suggestions" ref={suggestionContainer}>
          <div className="location-suggestions" ref={locationContainer}>
            {showLocationSuggestions && (
              <ul className="location-suggestions__results">
                {suggestions.map((suggestion, index) => {
                  return (
                    <li key={index}>
                      <MdLocationPin className="location-pin" /> {suggestion}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="guests-options" ref={guestContainer}>
            <div>
              <div className="adult">
                <h6>Adults</h6>
                <p>Ages 13 or above</p>
                <div className="counter">
                  <MdHorizontalRule className="counter-control" /> <p>0</p>{" "}
                  <MdAdd className="counter-control" />
                </div>
              </div>
              <div className="children">
                <h6>Children</h6>
                <p>Ages 2 - 12</p>
                <div className="counter">
                  <MdHorizontalRule className="counter-control" /> <p>0</p>{" "}
                  <MdAdd className="counter-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
