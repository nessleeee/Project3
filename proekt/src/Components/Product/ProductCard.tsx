import { ProductType } from '@/types/types';
import Link from 'next/link';
import React from 'react'

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <Link href={`/product/${product.id}`}>
    <div className="card bg-transparent border-0 " >
  <img src={product.img} className="card-img-top rounded-0" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price}ден.</p>
  </div>
</div>
</Link>
  )
}

export default ProductCard