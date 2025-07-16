"use client";
import { jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { useFSRoute } from "nextra/hooks";
import { normalizePages } from "nextra/normalize-pages";
import { createContext, useContext } from "react";
const ConfigContext = createContext(null);
function useConfig() {
  const $ = _c(3);
  const normalizePagesResult = useContext(ConfigContext);
  if (!normalizePagesResult) {
    throw new Error("Missing ConfigContext.Provider");
  }
  const {
    activeThemeContext,
    activeType
  } = normalizePagesResult;
  const t0 = !activeThemeContext.sidebar || activeType === "page";
  let t1;
  if ($[0] !== normalizePagesResult || $[1] !== t0) {
    t1 = {
      normalizePagesResult,
      hideSidebar: t0
    };
    $[0] = normalizePagesResult;
    $[1] = t0;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
const ConfigProvider = (t0) => {
  const $ = _c(8);
  const {
    children,
    pageMap,
    navbar,
    footer
  } = t0;
  const pathname = useFSRoute();
  let t1;
  if ($[0] !== pageMap || $[1] !== pathname) {
    t1 = normalizePages({
      list: pageMap,
      route: pathname
    });
    $[0] = pageMap;
    $[1] = pathname;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const normalizedPages = t1;
  const {
    activeThemeContext
  } = normalizedPages;
  const t2 = activeThemeContext.navbar && navbar;
  const t3 = activeThemeContext.footer && footer;
  let t4;
  if ($[3] !== children || $[4] !== normalizedPages || $[5] !== t2 || $[6] !== t3) {
    t4 = /* @__PURE__ */ jsxs(ConfigContext.Provider, { value: normalizedPages, children: [
      t2,
      children,
      t3
    ] });
    $[3] = children;
    $[4] = normalizedPages;
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
};
export {
  ConfigProvider,
  useConfig
};
