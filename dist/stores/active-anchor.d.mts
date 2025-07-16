import { Dispatch } from 'react';

declare const useActiveAnchor: () => string;
declare const setActiveSlug: Dispatch<string>;

export { setActiveSlug, useActiveAnchor };
