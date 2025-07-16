import { Dispatch } from 'react';

declare const useFocusedRoute: () => string;
declare const setFocusedRoute: Dispatch<string>;

export { setFocusedRoute, useFocusedRoute };
