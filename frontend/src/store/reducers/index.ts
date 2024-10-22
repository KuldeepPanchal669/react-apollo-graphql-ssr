import { combineReducers } from "redux";
import todosReducer from "./todos-reducer";
import visibilityFilterReducer from "./visibility-filter-reducer";
import productListReducer from "./product-list-reducer";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  productList: productListReducer,
});
