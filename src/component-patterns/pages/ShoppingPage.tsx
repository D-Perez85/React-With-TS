import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImg } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

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
        <ProductTitle title='Cafe'/>
        <ProductButtons/>
      </ProductCard>
    </div>
  );
};
export default ShoppingPage;
