import * as nextra_normalize_pages from 'nextra/normalize-pages';
import * as nextra from 'nextra';
import { PageMapItem } from 'nextra';
import { FC, ReactNode, ReactElement } from 'react';

declare function useConfig(): {
    normalizePagesResult: {
        activeType?: string;
        activeIndex: number;
        activeThemeContext: {
            pagination?: boolean | undefined;
            breadcrumb?: boolean | undefined;
            collapsed?: boolean | undefined;
            footer?: boolean | undefined;
            layout?: "default" | "full" | undefined;
            navbar?: boolean | undefined;
            sidebar?: boolean | undefined;
            timestamp?: boolean | undefined;
            toc?: boolean | undefined;
            typesetting?: "default" | "article" | undefined;
        };
        activeMetadata?: nextra.FrontMatter;
        activePath: nextra_normalize_pages.Item[];
        directories: nextra_normalize_pages.Item[];
        docsDirectories: ((nextra.MdxFile | {
            name: string;
            route: string;
        }) & {
            title: string;
            type: string;
            children: ((nextra.MdxFile | {
                name: string;
                route: string;
            }) & /*elided*/ any)[];
            firstChildRoute?: string;
            isUnderCurrentDocsTree?: boolean;
        })[];
        flatDocsDirectories: ((nextra.MdxFile | {
            name: string;
            route: string;
        }) & {
            title: string;
            type: string;
            children: ((nextra.MdxFile | {
                name: string;
                route: string;
            }) & /*elided*/ any)[];
            firstChildRoute?: string;
            isUnderCurrentDocsTree?: boolean;
        })[];
        topLevelNavbarItems: (nextra_normalize_pages.PageItem | nextra_normalize_pages.MenuItem)[];
    };
    hideSidebar: boolean;
};
declare const ConfigProvider: FC<{
    children: ReactNode;
    pageMap: PageMapItem[];
    navbar: ReactElement;
    footer: ReactElement;
}>;

export { ConfigProvider, useConfig };
