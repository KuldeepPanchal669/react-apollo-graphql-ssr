import { FETCH_PRODUCT_LIST } from "../actions";

interface Product {
  // Define the structure of a product here
  id: number;
  name: string;
  price: number;
}

interface ProductListState {
  products: Product[];
}

type ProductListAction = {
  type: typeof FETCH_PRODUCT_LIST;
  payload: Product[];
};

const productListReducer = (
  state: ProductListState = { products: [] },
  action: ProductListAction
): ProductListState => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return { products: action.payload };
    default:
      return state;
  }
};

export default productListReducer;
