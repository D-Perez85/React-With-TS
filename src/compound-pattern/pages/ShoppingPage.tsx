import ProductCard from "../components/ProductCard"
import { ProductImg } from "../components/ProductImage"

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
            </ProductCard>
        </div>
    </div>
  )
}
export default ShoppingPage