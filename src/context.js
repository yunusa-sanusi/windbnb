import React, { useState, useEffect, useContext } from "react";
import data from "./stays.json";

const AppContext = React.createContext();

const location = [
  ...new Set(
    data.map((location) => {
      return `${location.city}, ${location.country}`;
    }),
  ),
];

export const AppProvider = ({ children }) => {
  const [stays, setStays] = useState(data);
  const [showSearch, setShowSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [locationInputText, setLocationInputText] = useState("");
  const [guestInputText, setGuestInputText] = useState("");
  const [suggestions, setSuggestions] = useState(location);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const checkSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const openSearchbar = () => {
    setShowSearch(true);
  };

  const changeLocationInputText = (targetValue) => {
    setLocationInputText(targetValue);
  };

  const changeGuestInputText = (targetValue) => {
    setGuestInputText(targetValue);
  };

  const closeSearchbar = () => setShowSearch(false);

  const getSuggestions = (city) => {
    if (city) {
      setShowLocationSuggestions(true);
      const capitalizedCity = `${city.slice(0, 1).toUpperCase()}${city.slice(
        1,
      )}`;
      const newStays = location.filter((stay) =>
        stay.split(",")[0].includes(capitalizedCity),
      );

      if (newStays) {
        setSuggestions(newStays);
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <AppContext.Provider
      value={{
        stays,
        showSearch,
        windowWidth,
        showSearch,
        guestInputText,
        locationInputText,
        suggestions,
        showLocationSuggestions,
        closeSearchbar,
        openSearchbar,
        changeGuestInputText,
        changeLocationInputText,
        getSuggestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
