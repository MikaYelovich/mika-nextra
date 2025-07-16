import { Item } from 'nextra/normalize-pages';
import { FC } from 'react';

declare const Breadcrumb: FC<{
    activePath: Item[];
}>;

export { Breadcrumb };
