import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth.slice";

const store = configureStore({
  reducer: {
    authReducer,
  },
  
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Optionally, ignore specific action types or paths
//         ignoredActions: ["your/action/type"],
//         ignoredPaths: ["payload.headers"], // Can ignore specific paths
//       },
//     }),
});

export default store;
