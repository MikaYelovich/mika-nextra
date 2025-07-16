"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { cloneElement } from "react";
import { Breadcrumb, Pagination, TOC } from "../components";
import { useConfig, useThemeConfig } from "../stores";
const ClientWrapper = (t0) => {
  const $ = _c(26);
  const {
    children,
    metadata,
    bottomContent
  } = t0;
  const {
    activeType,
    activeThemeContext: themeContext,
    activePath
  } = useConfig().normalizePagesResult;
  const themeConfig = useThemeConfig();
  const date = themeContext.timestamp && metadata.timestamp;
  let t1;
  if ($[0] !== metadata || $[1] !== themeContext.layout || $[2] !== themeContext.toc) {
    t1 = (themeContext.layout === "default" || themeContext.toc) && /* @__PURE__ */ jsx("nav", { className: "nextra-toc x:order-last x:max-xl:hidden x:w-64 x:shrink-0 x:print:hidden", "aria-label": "table of contents", children: themeContext.toc && /* @__PURE__ */ jsx(TOC, { filePath: metadata.filePath, pageTitle: metadata.title }) });
    $[0] = metadata;
    $[1] = themeContext.layout;
    $[2] = themeContext.toc;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const t2 = themeContext.typesetting === "article" && "nextra-body-typesetting-article";
  let t3;
  if ($[4] !== t2) {
    t3 = cn("x:w-full x:min-w-0 x:break-words x:min-h-[calc(100vh-var(--nextra-navbar-height))]", "x:text-slate-700 x:dark:text-slate-200 x:pb-8 x:px-4 x:pt-4 x:md:px-12", t2);
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== activePath || $[7] !== activeType || $[8] !== themeContext.breadcrumb) {
    t4 = themeContext.breadcrumb && activeType !== "page" && /* @__PURE__ */ jsx(Breadcrumb, { activePath });
    $[6] = activePath;
    $[7] = activeType;
    $[8] = themeContext.breadcrumb;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== date || $[11] !== themeConfig) {
    t5 = date ? /* @__PURE__ */ jsx("div", { className: "x:mt-12 x:mb-8 x:text-xs x:text-gray-500 x:text-end x:dark:text-gray-400", children: cloneElement(themeConfig.lastUpdated, {
      date: new Date(date)
    }) }) : /* @__PURE__ */ jsx("div", { className: "x:mt-16" });
    $[10] = date;
    $[11] = themeConfig;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] !== activeType || $[14] !== themeContext.pagination) {
    t6 = themeContext.pagination && activeType !== "page" && /* @__PURE__ */ jsx(Pagination, {});
    $[13] = activeType;
    $[14] = themeContext.pagination;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== bottomContent || $[17] !== children || $[18] !== t3 || $[19] !== t4 || $[20] !== t5 || $[21] !== t6) {
    t7 = /* @__PURE__ */ jsxs("article", { className: t3, children: [
      t4,
      children,
      t5,
      t6,
      bottomContent
    ] });
    $[16] = bottomContent;
    $[17] = children;
    $[18] = t3;
    $[19] = t4;
    $[20] = t5;
    $[21] = t6;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  let t8;
  if ($[23] !== t1 || $[24] !== t7) {
    t8 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t1,
      t7
    ] });
    $[23] = t1;
    $[24] = t7;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  return t8;
};
export {
  ClientWrapper
};
