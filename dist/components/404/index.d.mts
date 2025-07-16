import { FC, ReactNode } from 'react';

type NotFoundPageProps = {
    content?: ReactNode;
    labels?: string;
    children?: ReactNode;
    className?: string;
};
declare const NotFoundPage: FC<NotFoundPageProps>;

export { NotFoundPage };
