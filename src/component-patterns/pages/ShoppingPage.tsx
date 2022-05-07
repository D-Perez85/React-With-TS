import ProductCard from "../components/ProductCard";
import { ProductImg } from "../components/ProductImage";

const product = {
  id: "1",
  title: "Coffe",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <ProductCard product={product}>
        <ProductImg />
      </ProductCard>
    </div>
  );
};
export default ShoppingPage;
