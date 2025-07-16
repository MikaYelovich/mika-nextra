"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { MenuItem as _MenuItem, Menu, MenuButton, MenuItems } from "@headlessui/react";
import cn from "clsx";
import { Anchor, Button } from "nextra/components";
import { useFSRoute } from "nextra/hooks";
import { ArrowRightIcon, MenuIcon } from "nextra/icons";
import { setMenu, useConfig, useMenu, useThemeConfig } from "../../stores";
const classes = {
  link: cn("x:text-sm x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100 x:whitespace-nowrap", "x:text-gray-600 x:hover:text-gray-800 x:dark:text-gray-400 x:dark:hover:text-gray-200", "x:ring-inset x:transition-colors")
};
const NavbarMenu = (t0) => {
  const $ = _c(19);
  const {
    menu,
    children
  } = t0;
  let t1;
  if ($[0] !== menu.children) {
    t1 = Object.fromEntries((menu.children || []).map(_temp));
    $[0] = menu.children;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const routes = t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(ArrowRightIcon, { height: "14", className: "x:*:origin-center x:*:transition-transform x:*:rotate-90" });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== children) {
    t3 = /* @__PURE__ */ jsxs(MenuButton, { className: _temp2, children: [
      children,
      t2
    ] });
    $[3] = children;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  let t5;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = cn("x:focus-visible:nextra-focus", "nextra-scrollbar x:origin-top x:transition x:duration-200 x:ease-out x:data-closed:scale-95 x:data-closed:opacity-0 x:motion-reduce:transition-none", "x:border x:border-black/5 x:dark:border-white/20", "x:z-30 x:rounded-md x:py-1 x:text-sm x:shadow-lg", "x:backdrop-blur-md x:bg-nextra-bg/70", "x:max-h-[min(calc(100vh-5rem),256px)]!");
    t5 = {
      to: "bottom",
      gap: 10,
      padding: 16
    };
    $[5] = t4;
    $[6] = t5;
  } else {
    t4 = $[5];
    t5 = $[6];
  }
  let t6;
  if ($[7] !== menu.items || $[8] !== routes) {
    let t72;
    if ($[10] !== menu.items) {
      t72 = menu.items || {};
      $[10] = menu.items;
      $[11] = t72;
    } else {
      t72 = $[11];
    }
    let t82;
    if ($[12] !== routes) {
      t82 = (t9) => {
        const [key, item] = t9;
        return /* @__PURE__ */ jsx(_MenuItem, { as: Anchor, href: item.href || routes[key]?.route, className: _temp3, children: item.title }, key);
      };
      $[12] = routes;
      $[13] = t82;
    } else {
      t82 = $[13];
    }
    t6 = Object.entries(t72).map(t82);
    $[7] = menu.items;
    $[8] = routes;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[14] !== t6) {
    t7 = /* @__PURE__ */ jsx(MenuItems, { transition: true, className: t4, anchor: t5, children: t6 });
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] !== t3 || $[17] !== t7) {
    t8 = /* @__PURE__ */ jsxs(Menu, { children: [
      t3,
      t7
    ] });
    $[16] = t3;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  return t8;
};
const isMenu = (page) => page.type === "menu";
const ClientNavbar = (t0) => {
  const $ = _c(21);
  const {
    children,
    className
  } = t0;
  const items = useConfig().normalizePagesResult.topLevelNavbarItems;
  const themeConfig = useThemeConfig();
  const pathname = useFSRoute();
  const menu = useMenu();
  let t1;
  if ($[0] !== className) {
    t1 = cn("x:flex x:gap-4 x:overflow-x-auto nextra-scrollbar x:py-1.5 x:max-md:hidden", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== items || $[3] !== pathname) {
    let t32;
    if ($[5] !== pathname) {
      t32 = (page, _index, arr) => {
        if ("display" in page && page.display === "hidden") {
          return;
        }
        if (isMenu(page)) {
          return /* @__PURE__ */ jsx(NavbarMenu, { menu: page, children: page.title }, page.name);
        }
        const href = ("frontMatter" in page ? page.route : page.firstChildRoute) || page.href || page.route;
        const isCurrentPage = href === pathname || pathname.startsWith(page.route + "/") && arr.every((item) => !("href" in item) || item.href !== pathname) || void 0;
        return /* @__PURE__ */ jsx(Anchor, { href, className: cn(classes.link, "x:aria-[current]:font-medium x:aria-[current]:subpixel-antialiased x:aria-[current]:text-current"), "aria-current": isCurrentPage, children: page.title }, page.name);
      };
      $[5] = pathname;
      $[6] = t32;
    } else {
      t32 = $[6];
    }
    t2 = items.map(t32);
    $[2] = items;
    $[3] = pathname;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[7] !== t1 || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { className: t1, children: t2 });
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  let t4;
  if ($[10] !== themeConfig.search) {
    t4 = themeConfig.search && /* @__PURE__ */ jsx("div", { className: "x:max-md:hidden", children: themeConfig.search });
    $[10] = themeConfig.search;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  let t5;
  if ($[12] !== menu) {
    t5 = cn({
      open: menu
    });
    $[12] = menu;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  let t6;
  if ($[14] !== t5) {
    t6 = /* @__PURE__ */ jsx(Button, { "aria-label": "Menu", className: _temp4, onClick: _temp6, children: /* @__PURE__ */ jsx(MenuIcon, { height: "24", className: t5 }) });
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== children || $[17] !== t3 || $[18] !== t4 || $[19] !== t6) {
    t7 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t4,
      children,
      t6
    ] });
    $[16] = children;
    $[17] = t3;
    $[18] = t4;
    $[19] = t6;
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  return t7;
};
function _temp(route) {
  return [route.name, route];
}
function _temp2(t0) {
  const {
    focus
  } = t0;
  return cn(classes.link, "x:items-center x:flex x:gap-1.5 x:cursor-pointer", focus && "x:nextra-focus");
}
function _temp3(t0) {
  const {
    focus: focus_0
  } = t0;
  return cn("x:block x:py-1.5 x:transition-colors x:ps-3 x:pe-9", focus_0 ? "x:text-gray-900 x:dark:text-gray-100" : "x:text-gray-600 x:dark:text-gray-400");
}
function _temp4(t0) {
  const {
    active
  } = t0;
  return cn("nextra-hamburger x:md:hidden", active && "x:bg-gray-400/20");
}
function _temp5(prev) {
  return !prev;
}
function _temp6() {
  return setMenu(_temp5);
}
export {
  ClientNavbar
};
