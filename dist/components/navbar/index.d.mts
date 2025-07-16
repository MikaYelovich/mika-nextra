import * as react from 'react';
import { FC } from 'react';
import { z } from 'zod';

declare const propsSchema: z.ZodObject<{
    children: z.ZodOptional<z.ZodType<react.ReactNode, z.ZodTypeDef, react.ReactNode>>;
    logoLink: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    logo: z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>;
    projectLink: z.ZodOptional<z.ZodString>;
    projectIcon: z.ZodDefault<z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>>;
    chatLink: z.ZodOptional<z.ZodString>;
    chatIcon: z.ZodDefault<z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>>;
    className: z.ZodOptional<z.ZodString>;
    align: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
}, "strict", z.ZodTypeAny, {
    align: "right" | "left";
    logoLink: string | boolean;
    logo: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    projectIcon: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    chatIcon: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    children?: react.ReactNode;
    className?: string | undefined;
    projectLink?: string | undefined;
    chatLink?: string | undefined;
}, {
    logo: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    children?: react.ReactNode;
    className?: string | undefined;
    align?: "right" | "left" | undefined;
    logoLink?: string | boolean | undefined;
    projectLink?: string | undefined;
    projectIcon?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    chatLink?: string | undefined;
    chatIcon?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
}>;
type NavbarProps = z.input<typeof propsSchema>;
declare const Navbar: FC<NavbarProps>;

export { Navbar };
