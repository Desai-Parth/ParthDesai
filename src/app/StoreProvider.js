"use client";

import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./store/store";

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </Provider>
  );
};

export default StoreProvider;
