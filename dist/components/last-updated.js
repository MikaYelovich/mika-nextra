"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { usePathname } from "next/navigation";
import { useThemeConfig } from "../stores";
const LastUpdated = (t0) => {
  const $ = _c(15);
  const {
    date,
    children: t1,
    locale: t2
  } = t0;
  const children = t1 === void 0 ? "Last updated on" : t1;
  const locale = t2 === void 0 ? "en" : t2;
  const {
    i18n
  } = useThemeConfig();
  const pathname = usePathname();
  if (!date) {
    return null;
  }
  let t3;
  if ($[0] !== i18n.length || $[1] !== locale || $[2] !== pathname) {
    t3 = i18n.length ? pathname.split("/", 2)[1] : locale;
    $[0] = i18n.length;
    $[1] = locale;
    $[2] = pathname;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const dateLocale = t3;
  let t4;
  if ($[4] !== date) {
    t4 = date.toISOString();
    $[4] = date;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== date || $[7] !== dateLocale) {
    t5 = date.toLocaleDateString(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    $[6] = date;
    $[7] = dateLocale;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsx("time", { dateTime: t4, suppressHydrationWarning: true, children: t5 });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== children || $[13] !== t6) {
    t7 = /* @__PURE__ */ jsxs(Fragment, { children: [
      children,
      " ",
      t6
    ] });
    $[12] = children;
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  return t7;
};
export {
  LastUpdated
};
