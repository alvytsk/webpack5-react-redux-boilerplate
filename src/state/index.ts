import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
