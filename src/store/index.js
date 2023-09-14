import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../redux/reducer";

export default configureStore({
  reducer: mainReducer,
});
