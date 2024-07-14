import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import refreshSidebar from "./refreshSidebar";

const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    refreshKey: refreshSidebar,
  },
});

export default store;