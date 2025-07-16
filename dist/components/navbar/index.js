import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import NextLink from "next/link";
import { Anchor } from "nextra/components";
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { element, reactNode } from "nextra/schemas";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { ClientNavbar } from "./index.client";
const propsSchema = z.strictObject({
  children: reactNode.optional(),
  logoLink: z.union([z.string(), z.boolean()]).default(true),
  logo: element,
  projectLink: z.string().optional(),
  projectIcon: element.default(/* @__PURE__ */ jsx(GitHubIcon, { height: "24" })),
  chatLink: z.string().optional(),
  chatIcon: element.default(/* @__PURE__ */ jsx(DiscordIcon, { width: "24" })),
  className: z.string().optional(),
  align: z.enum(["left", "right"]).default("right")
});
const Navbar = (props) => {
  const $ = _c(35);
  let align;
  let chatIcon;
  let chatLink;
  let children;
  let projectIcon;
  let projectLink;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  if ($[0] !== props) {
    const {
      data,
      error
    } = propsSchema.safeParse(props);
    if (error) {
      throw fromZodError(error);
    }
    const {
      children: t52,
      logoLink,
      logo,
      projectLink: t62,
      projectIcon: t72,
      chatLink: t82,
      chatIcon: t92,
      className,
      align: t102
    } = data;
    children = t52;
    projectLink = t62;
    projectIcon = t72;
    chatLink = t82;
    chatIcon = t92;
    align = t102;
    const logoClass = cn("x:flex x:items-center", align === "left" ? "x:max-md:me-auto" : "x:me-auto");
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
      t3 = cn("nextra-navbar x:sticky x:top-0 x:z-30 x:w-full x:bg-transparent x:print:hidden", "x:max-md:[.nextra-banner:not([class$=hidden])~&]:top-(--nextra-banner-height)");
      t4 = /* @__PURE__ */ jsx("div", { className: cn("nextra-navbar-blur", "x:absolute x:-z-1 x:size-full", "x:backdrop-blur-md") });
      t0 = {
        height: "var(--nextra-navbar-height)"
      };
      $[12] = t0;
      $[13] = t3;
      $[14] = t4;
    } else {
      t0 = $[12];
      t3 = $[13];
      t4 = $[14];
    }
    t1 = cn("x:mx-auto x:flex x:max-w-(--nextra-content-width) x:items-center x:gap-4 x:pl-[max(env(safe-area-inset-left),1.5rem)] x:pr-[max(env(safe-area-inset-right),1.5rem)]", "x:justify-end", className);
    t2 = logoLink ? /* @__PURE__ */ jsx(NextLink, { href: typeof logoLink === "string" ? logoLink : "/", className: cn(logoClass, "x:transition-opacity x:focus-visible:nextra-focus x:hover:opacity-75"), children: logo }) : /* @__PURE__ */ jsx("div", { className: logoClass, children: logo });
    $[0] = props;
    $[1] = align;
    $[2] = chatIcon;
    $[3] = chatLink;
    $[4] = children;
    $[5] = projectIcon;
    $[6] = projectLink;
    $[7] = t0;
    $[8] = t1;
    $[9] = t2;
    $[10] = t3;
    $[11] = t4;
  } else {
    align = $[1];
    chatIcon = $[2];
    chatLink = $[3];
    children = $[4];
    projectIcon = $[5];
    projectLink = $[6];
    t0 = $[7];
    t1 = $[8];
    t2 = $[9];
    t3 = $[10];
    t4 = $[11];
  }
  const t5 = align === "left" ? "x:me-auto" : "";
  let t6;
  if ($[15] !== projectIcon || $[16] !== projectLink) {
    t6 = projectLink && /* @__PURE__ */ jsx(Anchor, { href: projectLink, children: projectIcon });
    $[15] = projectIcon;
    $[16] = projectLink;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  let t7;
  if ($[18] !== chatIcon || $[19] !== chatLink) {
    t7 = chatLink && /* @__PURE__ */ jsx(Anchor, { href: chatLink, children: chatIcon });
    $[18] = chatIcon;
    $[19] = chatLink;
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  let t8;
  if ($[21] !== children || $[22] !== t5 || $[23] !== t6 || $[24] !== t7) {
    t8 = /* @__PURE__ */ jsxs(ClientNavbar, { className: t5, children: [
      t6,
      t7,
      children
    ] });
    $[21] = children;
    $[22] = t5;
    $[23] = t6;
    $[24] = t7;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  let t9;
  if ($[26] !== t0 || $[27] !== t1 || $[28] !== t2 || $[29] !== t8) {
    t9 = /* @__PURE__ */ jsxs("nav", { style: t0, className: t1, children: [
      t2,
      t8
    ] });
    $[26] = t0;
    $[27] = t1;
    $[28] = t2;
    $[29] = t8;
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  let t10;
  if ($[31] !== t3 || $[32] !== t4 || $[33] !== t9) {
    t10 = /* @__PURE__ */ jsxs("header", { className: t3, children: [
      t4,
      t9
    ] });
    $[31] = t3;
    $[32] = t4;
    $[33] = t9;
    $[34] = t10;
  } else {
    t10 = $[34];
  }
  return t10;
};
export {
  Navbar
};
