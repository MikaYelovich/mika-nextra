"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { useTheme } from "next-themes";
import { Select } from "nextra/components";
import { useMounted } from "nextra/hooks";
import { MoonIcon, SunIcon } from "nextra/icons";
import { useThemeConfig } from "../stores";
const ThemeSwitch = (t0) => {
  const $ = _c(23);
  const {
    lite,
    className
  } = t0;
  const {
    setTheme,
    resolvedTheme,
    theme
  } = useTheme();
  const mounted = useMounted();
  const {
    darkMode,
    themeSwitch
  } = useThemeConfig();
  if (!darkMode) {
    return null;
  }
  const IconToUse = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
  const id = mounted ? theme : "light";
  let t1;
  if ($[0] !== className) {
    t1 = cn("x:flex x:items-center x:gap-2", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== themeSwitch.light) {
    t2 = {
      id: "light",
      name: themeSwitch.light
    };
    $[2] = themeSwitch.light;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== themeSwitch.dark) {
    t3 = {
      id: "dark",
      name: themeSwitch.dark
    };
    $[4] = themeSwitch.dark;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== themeSwitch.system) {
    t4 = {
      id: "system",
      name: themeSwitch.system
    };
    $[6] = themeSwitch.system;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
    t5 = [t2, t3, t4];
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== IconToUse) {
    t6 = /* @__PURE__ */ jsx(IconToUse, { height: "12" });
    $[12] = IconToUse;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  const t7 = !lite && themeSwitch[id];
  let t8;
  if ($[14] !== t6 || $[15] !== t7) {
    t8 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t6,
      t7
    ] });
    $[14] = t6;
    $[15] = t7;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== id || $[18] !== setTheme || $[19] !== t1 || $[20] !== t5 || $[21] !== t8) {
    t9 = /* @__PURE__ */ jsx(Select, { className: t1, title: "Change theme", options: t5, onChange: setTheme, value: id, selectedOption: t8 });
    $[17] = id;
    $[18] = setTheme;
    $[19] = t1;
    $[20] = t5;
    $[21] = t8;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  return t9;
};
export {
  ThemeSwitch
};
