import { useSelector } from "react-redux";
import Product from "./product";
import { selectProducts } from "./retail-slice";

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
