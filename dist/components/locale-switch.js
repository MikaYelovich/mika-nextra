"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { addBasePath } from "next/dist/client/add-base-path";
import { usePathname } from "next/navigation";
import { Select } from "nextra/components";
import { GlobeIcon } from "nextra/icons";
import { useThemeConfig } from "../stores";
const ONE_YEAR = 365 * 24 * 60 * 60 * 1e3;
const LocaleSwitch = (t0) => {
  const $ = _c(22);
  const {
    lite,
    className
  } = t0;
  const {
    i18n
  } = useThemeConfig();
  const pathname = usePathname();
  if (!i18n.length) {
    return null;
  }
  let t1;
  if ($[0] !== pathname) {
    t1 = pathname.split("/", 2);
    $[0] = pathname;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [, locale] = t1;
  let t2;
  if ($[2] !== className) {
    t2 = cn("x:flex x:items-center x:gap-2", className);
    $[2] = className;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== locale || $[5] !== pathname) {
    t3 = (lang) => {
      const date = new Date(Date.now() + ONE_YEAR);
      document.cookie = `NEXT_LOCALE=${lang}; expires=${date.toUTCString()}; path=/`;
      location.href = addBasePath(pathname.replace(`/${locale}`, `/${lang}`));
    };
    $[4] = locale;
    $[5] = pathname;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(GlobeIcon, { height: "12" });
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== i18n || $[9] !== lite || $[10] !== locale) {
    t5 = !lite && i18n.find((l) => locale === l.locale)?.name;
    $[8] = i18n;
    $[9] = lite;
    $[10] = locale;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== t5) {
    t6 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t4,
      t5
    ] });
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== i18n) {
    t7 = i18n.map(_temp);
    $[14] = i18n;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== locale || $[17] !== t2 || $[18] !== t3 || $[19] !== t6 || $[20] !== t7) {
    t8 = /* @__PURE__ */ jsx(Select, { title: "Change language", className: t2, onChange: t3, value: locale, selectedOption: t6, options: t7 });
    $[16] = locale;
    $[17] = t2;
    $[18] = t3;
    $[19] = t6;
    $[20] = t7;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  return t8;
};
function _temp(l_0) {
  return {
    id: l_0.locale,
    name: l_0.name
  };
}
export {
  LocaleSwitch
};
