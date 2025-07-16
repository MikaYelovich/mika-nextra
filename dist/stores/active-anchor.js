"use no memo";
import { create } from "zustand";
const useActiveAnchorStore = create(() => ({
  activeSlug: ""
}));
const useActiveAnchor = () => useActiveAnchorStore((state) => state.activeSlug);
const setActiveSlug = (activeSlug) => {
  useActiveAnchorStore.setState({
    activeSlug
  });
};
function _temp(state) {
  return state.activeSlug;
}
export {
  setActiveSlug,
  useActiveAnchor
};
