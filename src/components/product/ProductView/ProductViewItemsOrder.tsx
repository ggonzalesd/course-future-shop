"use client"

import { FaCartShopping } from 'react-icons/fa6'
import styles from './ProductViewItemsOrder.module.sass'
import { SyntheticEvent, useState } from 'react'
import { useShoppingCart } from 'app/hooks/useShoppingCart'

interface ProductViewItemsOrderProps {
  maxQuantity: number
  product: ProductType
}

export const ProductViewItemsOrder = ({ maxQuantity, product }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1)
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault()
    addToCart({
      id: product.id,
      price: product.price,
      quantity: product.quantity,
      title: product.title,
      image: product.image,
      merchandiseId: product.gql_id
    })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault()
    if (counter === 1) return;
    setCounter(counter - 1)
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault()
    if (counter === maxQuantity) return;
    setCounter(counter + 1)
  }

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewOrder__form}
        >
        <button
          className={styles.ProductViewOrder__submit}
          type='submit'
          onClick={handleAddToCart}
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
}