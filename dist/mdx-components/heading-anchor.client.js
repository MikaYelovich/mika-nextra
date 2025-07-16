"use client";
import { jsx } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { useEffect, useRef } from "react";
import { setActiveSlug } from "../stores";
const callback = (entries) => {
  const entry = entries.find((entry2) => entry2.isIntersecting);
  if (entry) {
    const slug = entry.target.hash.slice(1);
    setActiveSlug(decodeURI(slug));
  }
};
const observer = typeof window === "undefined" ? null : new IntersectionObserver(callback, {
  rootMargin: `-${getComputedStyle(document.body).getPropertyValue("--nextra-navbar-height") || // can be '' on 404 page
  "0%"} 0% -80%`
});
const HeadingAnchor = (t0) => {
  const $ = _c(4);
  const {
    id
  } = t0;
  const anchorRef = useRef(null);
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      const el = anchorRef.current;
      observer.observe(el);
      return () => {
        observer.unobserve(el);
      };
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  useEffect(t1, t2);
  const t3 = `#${id}`;
  let t4;
  if ($[2] !== t3) {
    t4 = /* @__PURE__ */ jsx("a", { href: t3, className: "x:focus-visible:nextra-focus subheading-anchor", "aria-label": "Permalink for this section", ref: anchorRef });
    $[2] = t3;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  return t4;
};
export {
  HeadingAnchor
};
