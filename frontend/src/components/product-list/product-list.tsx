import React, { useEffect } from "react";
import { fetchProductList } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Store } from "@reduxjs/toolkit";

type ProductListProps = {
  productList?: [];
};

interface ProductListComponent extends React.FC<ProductListProps> {
  loadData?: (store: Store<AppDispatch>) => void;
}

const ProductList: ProductListComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {productList?.products?.map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

function loadData(store: any) {
  return store.dispatch(fetchProductList());
}

ProductList.loadData = loadData;
export default ProductList;
