"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { usePathname } from "next/navigation";
import { Anchor, Button, Collapse } from "nextra/components";
import { useFSRoute, useHash } from "nextra/hooks";
import { ArrowRightIcon, ExpandIcon } from "nextra/icons";
import { forwardRef, useEffect, useId, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { setFocusedRoute, setMenu, useActiveAnchor, useConfig, useFocusedRoute, useMenu, useThemeConfig, useTOC } from "../stores";
import { LocaleSwitch } from "./locale-switch";
import { ThemeSwitch } from "./theme-switch";
const TreeState = /* @__PURE__ */ Object.create(null);
const classes = {
  link: cn("x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors x:[word-break:break-word]", "x:cursor-pointer x:contrast-more:border"),
  inactive: cn("x:text-gray-500 x:hover:bg-gray-100 x:hover:text-gray-900", "x:dark:text-neutral-400 x:dark:hover:bg-primary-100/5 x:dark:hover:text-gray-50", "x:contrast-more:text-gray-900 x:contrast-more:dark:text-gray-50", "x:contrast-more:border-transparent x:contrast-more:hover:border-gray-900 x:contrast-more:dark:hover:border-gray-50"),
  active: cn("x:bg-primary-100 x:font-semibold x:text-primary-800 x:dark:bg-primary-400/10 x:dark:text-primary-600", "x:contrast-more:border-primary-500!"),
  list: cn("x:grid x:gap-1"),
  border: cn("x:relative x:before:absolute x:before:inset-y-1", 'x:before:w-px x:before:bg-gray-200 x:before:content-[""] x:dark:before:bg-neutral-800', "x:ps-3 x:before:start-0 x:pt-1 x:ms-3"),
  wrapper: cn("x:p-4 x:overflow-y-auto nextra-scrollbar nextra-mask"),
  footer: cn("nextra-sidebar-footer x:border-t nextra-border x:flex x:items-center x:gap-2 x:py-4 x:mx-4")
};
const Folder = (t0) => {
  const $ = _c(10);
  const {
    item: _item,
    anchors,
    onFocus,
    level
  } = t0;
  const routeOriginal = useFSRoute();
  let t1;
  if ($[0] !== routeOriginal) {
    t1 = routeOriginal.split("#", 1);
    $[0] = routeOriginal;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const route = t1[0];
  let t2;
  if ($[2] !== _item) {
    t2 = _item.type === "menu" ? getMenuChildren(_item) : _item.children;
    $[2] = _item;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const item = {
    ..._item,
    children: t2
  };
  const hasRoute = !!item.route;
  const active = hasRoute && [route, route + "/"].includes(item.route + "/");
  const activeRouteInside = active || hasRoute && route.startsWith(item.route + "/");
  const focusedRoute = useFocusedRoute();
  const focusedRouteInside = focusedRoute.startsWith(item.route + "/");
  const {
    theme
  } = item;
  const {
    defaultMenuCollapseLevel,
    autoCollapse
  } = useThemeConfig().sidebar;
  const open = TreeState[item.route] === void 0 ? active || activeRouteInside || focusedRouteInside || (theme && "collapsed" in theme ? !theme.collapsed : level < defaultMenuCollapseLevel) : TreeState[item.route] || focusedRouteInside;
  const [, rerender] = useState();
  const handleClick2 = (event) => {
    const el = event.currentTarget;
    const isClickOnIcon = el !== event.target;
    if (isClickOnIcon) {
      event.preventDefault();
    }
    const isOpen = el.parentElement.classList.contains("open");
    TreeState[item.route] = !isOpen;
    rerender({});
  };
  useEffect(() => {
    const updateTreeState = function updateTreeState2() {
      if (activeRouteInside || focusedRouteInside) {
        TreeState[item.route] = true;
      }
    };
    const updateAndPruneTreeState = function updateAndPruneTreeState2() {
      if (activeRouteInside && focusedRouteInside) {
        TreeState[item.route] = true;
      } else {
        delete TreeState[item.route];
      }
    };
    if (autoCollapse) {
      updateAndPruneTreeState();
    } else {
      updateTreeState();
    }
  }, [activeRouteInside, focusedRouteInside, item.route, autoCollapse]);
  const isLink = "frontMatter" in item;
  const ComponentToUse = isLink ? Anchor : Button;
  const t3 = cn({
    open,
    active
  });
  const t4 = !isLink && "x:text-start x:w-full";
  const t5 = active ? classes.active : classes.inactive;
  let t6;
  if ($[4] !== t4 || $[5] !== t5) {
    t6 = cn("x:items-center x:justify-between x:gap-2", t4, classes.link, t5);
    $[4] = t4;
    $[5] = t5;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  const t7 = item.title;
  const T0 = ArrowRightIcon;
  const t8 = "18";
  const t9 = cn("x:shrink-0", "x:rounded-sm x:p-0.5 x:hover:bg-gray-800/5 x:dark:hover:bg-gray-100/5", "x:motion-reduce:*:transition-none x:*:origin-center x:*:transition-transform x:*:rtl:-rotate-180", open && "x:*:ltr:rotate-90 x:*:rtl:-rotate-270");
  let t10;
  if ($[7] !== T0 || $[8] !== t9) {
    t10 = /* @__PURE__ */ jsx(T0, { height: t8, className: t9 });
    $[7] = T0;
    $[8] = t9;
    $[9] = t10;
  } else {
    t10 = $[9];
  }
  return /* @__PURE__ */ jsxs("li", { className: t3, children: [
    /* @__PURE__ */ jsxs(ComponentToUse, { href: isLink ? item.route : void 0, "data-href": isLink ? void 0 : item.route, className: t6, onClick: handleClick2, onFocus, children: [
      t7,
      t10
    ] }),
    item.children && /* @__PURE__ */ jsx(Collapse, { isOpen: open, children: /* @__PURE__ */ jsx(Menu, { className: classes.border, directories: item.children, anchors, level }) })
  ] });
};
function getMenuChildren(menu) {
  const routes = Object.fromEntries((menu.children || []).map((route) => [route.name, route]));
  return Object.entries(menu.items || {}).map(([key, item]) => ({
    ...routes[key] || {
      name: key
      /* for React key prop */
    },
    ...item
  }));
}
const Separator = (t0) => {
  const $ = _c(7);
  const {
    title
  } = t0;
  const t1 = title ? "x:not-first:mt-5 x:mb-2 x:px-2 x:py-1.5 x:text-sm x:font-semibold x:text-gray-900 x:dark:text-gray-100" : "x:my-4";
  let t2;
  if ($[0] !== t1) {
    t2 = cn("[word-break:break-word]", t1);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== title) {
    t3 = title || /* @__PURE__ */ jsx("hr", { className: "x:mx-2 x:border-t nextra-border" });
    $[2] = title;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t2 || $[5] !== t3) {
    t4 = /* @__PURE__ */ jsx("li", { className: t2, children: t3 });
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
};
const handleClick = () => {
  setMenu(false);
};
const File = (t0) => {
  const $ = _c(22);
  const {
    item,
    anchors,
    onFocus
  } = t0;
  const route = useFSRoute();
  let t1;
  if ($[0] !== item.route || $[1] !== route) {
    t1 = item.route && [route, route + "/"].includes(item.route + "/");
    $[0] = item.route;
    $[1] = route;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const active = t1;
  const activeSlug = useActiveAnchor();
  if (item.type === "separator") {
    let t22;
    if ($[3] !== item.title) {
      t22 = /* @__PURE__ */ jsx(Separator, { title: item.title });
      $[3] = item.title;
      $[4] = t22;
    } else {
      t22 = $[4];
    }
    return t22;
  }
  let t2;
  if ($[5] !== active) {
    t2 = cn({
      active
    });
    $[5] = active;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const t3 = item.href || item.route;
  const t4 = active ? classes.active : classes.inactive;
  let t5;
  if ($[7] !== t4) {
    t5 = cn(classes.link, t4);
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== item.title || $[10] !== onFocus || $[11] !== t3 || $[12] !== t5) {
    t6 = /* @__PURE__ */ jsx(Anchor, { href: t3, className: t5, onFocus, children: item.title });
    $[9] = item.title;
    $[10] = onFocus;
    $[11] = t3;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== active || $[15] !== activeSlug || $[16] !== anchors) {
    t7 = active && anchors.length > 0 && /* @__PURE__ */ jsx("ul", { className: cn(classes.list, classes.border), children: anchors.map((t82) => {
      const {
        id,
        value
      } = t82;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${id}`, className: cn(classes.link, 'x:focus-visible:nextra-focus x:flex x:gap-2 x:before:opacity-25 x:before:content-["#"]', id === activeSlug ? classes.active : classes.inactive), onClick: handleClick, children: value }) }, id);
    }) });
    $[14] = active;
    $[15] = activeSlug;
    $[16] = anchors;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] !== t2 || $[19] !== t6 || $[20] !== t7) {
    t8 = /* @__PURE__ */ jsxs("li", { className: t2, children: [
      t6,
      t7
    ] });
    $[18] = t2;
    $[19] = t6;
    $[20] = t7;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  return t8;
};
const handleFocus = (event) => {
  const route = event.target.getAttribute("href") || event.target.dataset.href || "";
  setFocusedRoute(route);
};
const Menu = forwardRef((t0, forwardedRef) => {
  const $ = _c(13);
  const {
    directories,
    anchors,
    className,
    level
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn(classes.list, className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== anchors || $[3] !== directories || $[4] !== level) {
    let t32;
    if ($[6] !== anchors || $[7] !== level) {
      t32 = (item) => {
        const ComponentToUse = item.type === "menu" || item.children?.length ? Folder : File;
        return /* @__PURE__ */ jsx(ComponentToUse, { item, anchors, onFocus: handleFocus, level: level + 1 }, item.name);
      };
      $[6] = anchors;
      $[7] = level;
      $[8] = t32;
    } else {
      t32 = $[8];
    }
    t2 = directories.map(t32);
    $[2] = anchors;
    $[3] = directories;
    $[4] = level;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[9] !== forwardedRef || $[10] !== t1 || $[11] !== t2) {
    t3 = /* @__PURE__ */ jsx("ul", { className: t1, ref: forwardedRef, children: t2 });
    $[9] = forwardedRef;
    $[10] = t1;
    $[11] = t2;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
});
Menu.displayName = "Menu";
const MobileNav = () => {
  const $ = _c(22);
  const {
    directories
  } = useConfig().normalizePagesResult;
  const toc = useTOC();
  const menu = useMenu();
  const pathname = usePathname();
  const hash = useHash();
  let t0;
  if ($[0] !== hash || $[1] !== pathname) {
    t0 = [pathname, hash];
    $[0] = hash;
    $[1] = pathname;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  useEffect(_temp, t0);
  let t1;
  if ($[3] !== toc) {
    t1 = toc.filter(_temp2);
    $[3] = toc;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const anchors = t1;
  const sidebarRef = useRef(null);
  let t2;
  let t3;
  if ($[5] !== menu) {
    t2 = () => {
      const sidebar = sidebarRef.current;
      const activeLink = sidebar.querySelector("li.active");
      if (activeLink && menu) {
        scrollIntoView(activeLink, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: sidebar.parentNode
        });
      }
    };
    t3 = [menu];
    $[5] = menu;
    $[6] = t2;
    $[7] = t3;
  } else {
    t2 = $[6];
    t3 = $[7];
  }
  useEffect(t2, t3);
  const themeConfig = useThemeConfig();
  const hasI18n = themeConfig.i18n.length > 0;
  const hasMenu = themeConfig.darkMode || hasI18n;
  const t4 = menu ? "x:[transform:translate3d(0,0,0)]" : "x:[transform:translate3d(0,-100%,0)]";
  let t5;
  if ($[8] !== t4) {
    t5 = cn("nextra-mobile-nav", "x:flex x:flex-col", "x:fixed x:inset-0 x:pt-(--nextra-navbar-height) x:z-20 x:overscroll-contain", "x:[contain:layout_style]", "x:md:hidden", "x:[.nextra-banner:not([class$=hidden])~&]:pt-[calc(var(--nextra-banner-height)+var(--nextra-navbar-height))]", "x:bg-mika-bg", t4);
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== themeConfig.search) {
    t6 = themeConfig.search && /* @__PURE__ */ jsx("div", { className: "x:px-4 x:pt-4", children: themeConfig.search });
    $[10] = themeConfig.search;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== anchors || $[13] !== directories) {
    t7 = /* @__PURE__ */ jsx(Menu, { ref: sidebarRef, className: classes.wrapper, directories, anchors, level: 0 });
    $[12] = anchors;
    $[13] = directories;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== hasMenu) {
    t8 = hasMenu && /* @__PURE__ */ jsxs("div", { className: cn(classes.footer, "x:mt-auto"), children: [
      /* @__PURE__ */ jsx(ThemeSwitch, { className: "x:grow" }),
      /* @__PURE__ */ jsx(LocaleSwitch, { className: "x:grow x:justify-end" })
    ] });
    $[15] = hasMenu;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== t5 || $[18] !== t6 || $[19] !== t7 || $[20] !== t8) {
    t9 = /* @__PURE__ */ jsxs("aside", { className: t5, children: [
      t6,
      t7,
      t8
    ] });
    $[17] = t5;
    $[18] = t6;
    $[19] = t7;
    $[20] = t8;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  return t9;
};
let lastScrollPosition = 0;
const handleScrollEnd = (event) => {
  lastScrollPosition = event.currentTarget.scrollTop;
};
const Sidebar = () => {
  const $ = _c(36);
  const toc = useTOC();
  const {
    normalizePagesResult,
    hideSidebar
  } = useConfig();
  const themeConfig = useThemeConfig();
  const [isExpanded, setIsExpanded] = useState(themeConfig.sidebar.defaultOpen);
  const [showToggleAnimation, setToggleAnimation] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarControlsId = useId();
  const {
    docsDirectories,
    activeThemeContext
  } = normalizePagesResult;
  const includePlaceholder = activeThemeContext.layout === "default";
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      if (window.innerWidth < 768) {
        return;
      }
      const sidebar = sidebarRef.current;
      if (lastScrollPosition) {
        sidebar.scrollTop = lastScrollPosition;
        return;
      }
      const activeLink = sidebar.querySelector("li.active");
      if (activeLink) {
        scrollIntoView(activeLink, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: sidebar.parentNode
        });
      }
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  let t2;
  if ($[2] !== themeConfig.toc.float || $[3] !== toc) {
    t2 = themeConfig.toc.float ? [] : toc.filter(_temp3);
    $[2] = themeConfig.toc.float;
    $[3] = toc;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const anchors = t2;
  const hasI18n = themeConfig.i18n.length > 0;
  const hasMenu = themeConfig.darkMode || hasI18n || themeConfig.sidebar.toggleButton;
  let t3;
  if ($[5] !== hideSidebar || $[6] !== includePlaceholder) {
    t3 = includePlaceholder && hideSidebar && /* @__PURE__ */ jsx("div", { className: "x:max-xl:hidden x:h-0 x:w-64 x:shrink-0" });
    $[5] = hideSidebar;
    $[6] = includePlaceholder;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const t4 = isExpanded ? "x:w-64" : "x:w-20";
  const t5 = hideSidebar ? "x:hidden" : "x:sticky";
  let t6;
  if ($[8] !== t4 || $[9] !== t5) {
    t6 = cn("nextra-sidebar x:print:hidden", "x:transition-all x:ease-in-out", "x:max-md:hidden x:flex x:flex-col", "x:h-[calc(100dvh-var(--nextra-menu-height))]", "x:top-(--nextra-navbar-height) x:shrink-0", t4, t5);
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  const t7 = !isExpanded && "no-scrollbar";
  let t8;
  if ($[11] !== t7) {
    t8 = cn(classes.wrapper, "x:grow", t7);
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== anchors || $[14] !== docsDirectories || $[15] !== hideSidebar || $[16] !== isExpanded) {
    t9 = (!hideSidebar || !isExpanded) && /* @__PURE__ */ jsx(Collapse, { isOpen: isExpanded, horizontal: true, children: /* @__PURE__ */ jsx(Menu, { directories: docsDirectories, anchors, level: 0 }) });
    $[13] = anchors;
    $[14] = docsDirectories;
    $[15] = hideSidebar;
    $[16] = isExpanded;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  let t10;
  if ($[18] !== t8 || $[19] !== t9) {
    t10 = /* @__PURE__ */ jsx("div", { className: t8, ref: sidebarRef, onScrollEnd: handleScrollEnd, children: t9 });
    $[18] = t8;
    $[19] = t9;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] !== hasI18n || $[22] !== hasMenu || $[23] !== isExpanded || $[24] !== showToggleAnimation || $[25] !== sidebarControlsId || $[26] !== themeConfig.sidebar.toggleButton) {
    t11 = hasMenu && /* @__PURE__ */ jsxs("div", { className: cn("x:sticky x:bottom-0 x:bg-[#000]", classes.footer, !isExpanded && "x:flex-wrap x:justify-center", showToggleAnimation && ["x:*:opacity-0", isExpanded ? "x:*:animate-[fade-in_1s_ease_.2s_forwards]" : "x:*:animate-[fade-in2_1s_ease_.2s_forwards]"]), children: [
      /* @__PURE__ */ jsx(LocaleSwitch, { lite: !isExpanded, className: isExpanded ? "x:grow" : "" }),
      /* @__PURE__ */ jsx(ThemeSwitch, { lite: !isExpanded || hasI18n, className: !isExpanded || hasI18n ? "" : "x:grow" }),
      themeConfig.sidebar.toggleButton && /* @__PURE__ */ jsx(Button, { "aria-expanded": isExpanded, "aria-controls": sidebarControlsId, title: isExpanded ? "Collapse sidebar" : "Expand sidebar", className: _temp4, onClick: () => {
        setIsExpanded(_temp5);
        setToggleAnimation(true);
      }, children: /* @__PURE__ */ jsx(ExpandIcon, { height: "12", className: cn(!isExpanded && "x:*:first:origin-[35%] x:*:first:rotate-180") }) })
    ] });
    $[21] = hasI18n;
    $[22] = hasMenu;
    $[23] = isExpanded;
    $[24] = showToggleAnimation;
    $[25] = sidebarControlsId;
    $[26] = themeConfig.sidebar.toggleButton;
    $[27] = t11;
  } else {
    t11 = $[27];
  }
  let t12;
  if ($[28] !== sidebarControlsId || $[29] !== t10 || $[30] !== t11 || $[31] !== t6) {
    t12 = /* @__PURE__ */ jsxs("aside", { id: sidebarControlsId, className: t6, children: [
      t10,
      t11
    ] });
    $[28] = sidebarControlsId;
    $[29] = t10;
    $[30] = t11;
    $[31] = t6;
    $[32] = t12;
  } else {
    t12 = $[32];
  }
  let t13;
  if ($[33] !== t12 || $[34] !== t3) {
    t13 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t12
    ] });
    $[33] = t12;
    $[34] = t3;
    $[35] = t13;
  } else {
    t13 = $[35];
  }
  return t13;
};
function _temp() {
  setMenu(false);
}
function _temp2(v) {
  return v.depth === 2;
}
function _temp3(v) {
  return v.depth === 2;
}
function _temp4(t0) {
  const {
    hover
  } = t0;
  return cn("x:rounded-md x:p-2", hover ? "x:bg-gray-100 x:text-gray-900 x:dark:bg-primary-100/5 x:dark:text-gray-50" : "x:text-gray-600 x:dark:text-gray-400");
}
function _temp5(prev) {
  return !prev;
}
export {
  MobileNav,
  Sidebar
};
