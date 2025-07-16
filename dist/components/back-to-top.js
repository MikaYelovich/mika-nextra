import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { Button } from "nextra/components";
import { ArrowRightIcon } from "nextra/icons";
const SCROLL_TO_OPTIONS = {
  top: 0,
  behavior: "smooth"
};
const scrollToTop = (event) => {
  const buttonElement = event.currentTarget;
  const tocElement = buttonElement.parentElement.parentElement;
  window.scrollTo(SCROLL_TO_OPTIONS);
  tocElement.scrollTo(SCROLL_TO_OPTIONS);
  buttonElement.disabled = true;
};
const BackToTop = (t0) => {
  const $ = _c(8);
  const {
    children,
    className,
    hidden
  } = t0;
  const t1 = hidden ? "true" : void 0;
  let t2;
  if ($[0] !== className) {
    t2 = (t32) => {
      const {
        disabled
      } = t32;
      return cn("x:flex x:items-center x:gap-1.5", "x:whitespace-nowrap", disabled ? "x:opacity-0" : "x:opacity-100", className);
    };
    $[0] = className;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ArrowRightIcon, { height: "1.1em", className: "x:-rotate-90 x:border x:rounded-full x:border-current" });
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  let t4;
  if ($[3] !== children || $[4] !== hidden || $[5] !== t1 || $[6] !== t2) {
    t4 = /* @__PURE__ */ jsxs(Button, { "aria-hidden": t1, onClick: scrollToTop, disabled: hidden, className: t2, children: [
      children,
      t3
    ] });
    $[3] = children;
    $[4] = hidden;
    $[5] = t1;
    $[6] = t2;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
};
export {
  BackToTop
};
