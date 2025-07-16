import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import NextLink from "next/link";
import { ArrowRightIcon } from "nextra/icons";
import { useConfig, useThemeConfig } from "../stores";
const classes = {
  link: cn("x:focus-visible:nextra-focus x:text-gray-600 x:dark:text-gray-400", "x:hover:text-gray-800 x:dark:hover:text-gray-200", "x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100", "x:flex x:max-w-[50%] x:items-center x:gap-1 x:py-4 x:text-base x:font-medium x:transition-colors x:[word-break:break-word] x:md:text-lg"),
  icon: cn("x:inline x:shrink-0")
};
const Pagination = () => {
  const $ = _c(8);
  const {
    flatDocsDirectories,
    activeIndex
  } = useConfig().normalizePagesResult;
  const {
    navigation
  } = useThemeConfig();
  let prev = navigation.prev && flatDocsDirectories[activeIndex - 1];
  let next = navigation.next && flatDocsDirectories[activeIndex + 1];
  if (prev && !prev.isUnderCurrentDocsTree) {
    prev = false;
  }
  if (next && !next.isUnderCurrentDocsTree) {
    next = false;
  }
  if (!prev && !next) {
    return null;
  }
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = cn("x:mb-8 x:flex x:items-center x:border-t x:pt-8 nextra-border", "x:print:hidden");
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== prev) {
    t1 = prev && /* @__PURE__ */ jsxs(NextLink, { href: prev.route, title: prev.title, className: cn(classes.link, "x:pe-4"), children: [
      /* @__PURE__ */ jsx(ArrowRightIcon, { height: "20", className: cn(classes.icon, "x:ltr:rotate-180") }),
      prev.title
    ] });
    $[1] = prev;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== next) {
    t2 = next && /* @__PURE__ */ jsxs(NextLink, { href: next.route, title: next.title, className: cn(classes.link, "x:ps-4 x:ms-auto x:text-end"), children: [
      next.title,
      /* @__PURE__ */ jsx(ArrowRightIcon, { height: "20", className: cn(classes.icon, "x:rtl:rotate-180") })
    ] });
    $[3] = next;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== t1 || $[6] !== t2) {
    t3 = /* @__PURE__ */ jsxs("div", { className: t0, children: [
      t1,
      t2
    ] });
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
};
export {
  Pagination
};
