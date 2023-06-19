import { combineReducers } from "redux";
import { productreducer } from "./Reducer";

const rootreducer=combineReducers({
    product:productreducer
})

export default rootreducer