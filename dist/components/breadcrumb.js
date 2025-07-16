import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import NextLink from "next/link";
import { ArrowRightIcon } from "nextra/icons";
import { Fragment } from "react";
const Breadcrumb = (t0) => {
  const $ = _c(4);
  const {
    activePath
  } = t0;
  let t1;
  if ($[0] !== activePath) {
    t1 = activePath.map(_temp);
    $[0] = activePath;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { className: "nextra-breadcrumb x:mt-1.5 x:flex x:items-center x:gap-1 x:overflow-hidden x:text-sm x:text-gray-500 x:dark:text-gray-400 x:contrast-more:text-current", children: t1 });
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
};
function _temp(item, index, arr) {
  const nextItem = arr[index + 1];
  const href = nextItem ? "frontMatter" in item ? item.route : item.children[0].route === nextItem.route ? "" : item.children[0].route : "";
  const ComponentToUse = href ? NextLink : "span";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    index > 0 && /* @__PURE__ */ jsx(ArrowRightIcon, { height: "14", className: "x:shrink-0 x:rtl:rotate-180" }),
    /* @__PURE__ */ jsx(ComponentToUse, { className: cn("x:whitespace-nowrap x:transition-colors", nextItem ? "x:min-w-6 x:overflow-hidden x:text-ellipsis" : "x:font-medium x:text-gray-700 x:dark:text-gray-100", href && "x:focus-visible:nextra-focus x:ring-inset x:hover:text-gray-900 x:dark:hover:text-gray-100"), title: item.title, ...href && {
      href
    }, children: item.title })
  ] }, item.route + item.name);
}
export {
  Breadcrumb
};
