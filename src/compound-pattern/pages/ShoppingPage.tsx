import ProductCard from "../components/ProductCard"
import { ProductImg } from "../components/ProductImage"
import { ProductButtons } from '../components/ProductButtons';
import { ProductTitle } from "../components/ProductTitle";

const product ={
        id: '1', 
        title: 'Coffe-Card',
        img: './coffee-mug.png'
  }
const ShoppingPage = () => {
  return (
    <div>
          <h1> Shopping Store  </h1>
          <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <ProductCard product={product}>
                      <ProductImg/>
                      <ProductTitle/>
                      <ProductButtons/>
            </ProductCard>
        </div>
    </div>
  )
}
export default ShoppingPage