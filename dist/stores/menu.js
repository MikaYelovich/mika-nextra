"use no memo";
import { create } from "zustand";
const useMenuStore = create(() => ({
  hasMenu: false
}));
const useMenu = () => useMenuStore((state) => state.hasMenu);
const setMenu = (fn) => {
  useMenuStore.setState((state) => {
    const hasMenu = typeof fn === "function" ? fn(state.hasMenu) : fn;
    document.documentElement.classList.toggle("x:max-md:overflow-hidden", hasMenu);
    return {
      hasMenu
    };
  });
};
function _temp(state) {
  return state.hasMenu;
}
export {
  setMenu,
  useMenu
};
