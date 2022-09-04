// UI Components
import ProductCard from '../components/ProductCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';

// Shopping Cart
import { useCart } from '../context/CartContext'

const Product = () => {
  
  const { onAddToCart } = useCart()

  const { product } = useParams();

  console.log(`Product: product = ${product}`)

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // pass URL parameter
    variables: { productId: product },
  });

  const productData = data?.product || [];
  const productName = data?.product.title || 'Loading, please wait...';
  console.log(`Product Details: products = ${productData}`)

  return (
    <>
      <div className='w-75 border m-2 p-5'>
        <h1>{productName}</h1>
        <div className='section-title'>
          <ProductCard key={product.title} {...productData} onAddToCart={()=>onAddToCart(product)} />
        </div>
      </div>  
      <div className='w-25 border m-2 p-5'>
        <div className='section-title'>
            Browse Your Collections
        </div>
        <CategoriesLinks />
      </div>
    </>
  )
}

export default Product