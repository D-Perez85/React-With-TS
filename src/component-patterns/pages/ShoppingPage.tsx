// import { ProductButtons } from "../components/ProductButtons";
// import ProductCard from "../components/ProductCard";
// import { ProductImg } from "../components/ProductImage";
// import { ProductTitle } from "../components/ProductTitle";

import {
  ProductCard,
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Hot",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImg />
          <ProductTitle title="Cafe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
