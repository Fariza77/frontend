import { createContext } from "react";
import { globalReducer } from "./helpers";

const BASE_URL = "http://localhost:3000/";
const globalContext = createContext();

const initialState = {
  user: {},
  coordinates: {},
  blogs: [],
  blogActivePage: "blogs",
  loaded: true,
};
export { globalContext, initialState, globalReducer, BASE_URL };
