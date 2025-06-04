import { useContext } from "react";
import MainLayoutContext from "./MainLayout.context";

const useMainLayoutContext = () => {
  const mainLayoutContext = useContext(MainLayoutContext);

  if (!mainLayoutContext) {
    throw new Error(`Missing MainLayoutContext`);
  }

  return mainLayoutContext;
};

export default useMainLayoutContext;
