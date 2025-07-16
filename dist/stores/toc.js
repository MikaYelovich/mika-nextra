"use no memo";
"use client";
import { createContext, createElement, useContext } from "react";
const TOCContext = createContext([]);
const useTOC = () => useContext(TOCContext);
const TOCProvider = (props) => createElement(TOCContext.Provider, props);
export {
  TOCProvider,
  useTOC
};
