"use client";
import { createContext, createElement, useContext } from "react";
const ThemeConfigContext = createContext(null);
const useThemeConfig = () => {
  return useContext(ThemeConfigContext);
};
const ThemeConfigProvider = (props) => createElement(ThemeConfigContext.Provider, props);
export {
  ThemeConfigProvider,
  useThemeConfig
};
