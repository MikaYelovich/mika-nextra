import { MDXWrapper } from 'nextra';
import { FC, ComponentProps } from 'react';

declare const ClientWrapper: FC<Omit<ComponentProps<MDXWrapper>, 'toc'>>;

export { ClientWrapper };
