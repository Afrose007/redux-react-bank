import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

// import { logger } from "redux-logger";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
