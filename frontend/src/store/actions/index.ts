import { Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { fetchProductListApi } from "../../api";

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter: VisibilityFilters) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  id,
});

export enum VisibilityFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE",
}

export interface FetchProductListAction {
  type: string;
  payload: any;
}

export const FETCH_PRODUCT_LIST = "fetch_product_list";
export const fetchProductList =
  (): ThunkAction<Promise<void>, any, unknown, FetchProductListAction> =>
  async (dispatch: Dispatch) => {
    const res = await fetchProductListApi(); // Assuming fetchProductListApi is an API call
    dispatch({
      type: FETCH_PRODUCT_LIST,
      payload: res,
    });
  };
