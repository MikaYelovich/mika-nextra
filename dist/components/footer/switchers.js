"use client";
import { useConfig, useThemeConfig } from "../../stores";
const Switchers = (t0) => {
  const {
    children
  } = t0;
  const {
    hideSidebar
  } = useConfig();
  const {
    i18n,
    darkMode
  } = useThemeConfig();
  if (hideSidebar && (darkMode || i18n.length)) {
    return children;
  }
};
export {
  Switchers
};
