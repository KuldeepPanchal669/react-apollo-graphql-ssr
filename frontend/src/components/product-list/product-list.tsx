import React, { useEffect } from "react";
import { fetchProductList } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

type ProductListProps = {
  productList?: [];
};

const ProductList: React.FC<ProductListProps> = () => {
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

export default ProductList;
