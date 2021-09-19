import React, { createContext, useState, useEffect, useContext } from 'react'
import { commerce } from '../lib/commerce'

const StoreContext = createContext()

export const useStore = () => {
	return useContext(StoreContext)
}

const StoreProvider = ({ children }) => {
	const [cart, setCart] = useState({})
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])
	const [order, setOrder] = useState({})
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const getData = async () => {
			try {
				const cartRes = await commerce.cart.retrieve()
				setCart(cartRes)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])

	useEffect(() => {
		const getData = async () => {
			try {
				const productsRes = await commerce.products.list()
				setProducts(productsRes.data)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])

	useEffect(() => {
		const getData = async () => {
			try {
				const categoriesRes = await commerce.categories.list()
				setCategories(categoriesRes.data.reverse())
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])

	const addToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity)
		setCart(cart)
	}

	const updateQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity })
		setCart(cart)
	}

	const removeFromCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.remove(productId)
		setCart(cart)
	}

	const emptyCart = async () => {
		const { cart } = await commerce.cart.empty()
		setCart(cart)
	}

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh()
		setCart(newCart)
	}

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder
			)
			setOrder(incomingOrder)
			refreshCart()
		} catch (err) {
			setErrorMessage(err.data.error.message)
		}
	}

	return (
		<StoreContext.Provider
			value={{
				cart,
				setCart,
				products,
				categories,
				setProducts,
				addToCart,
				updateQty,
				removeFromCart,
				emptyCart,
				handleCaptureCheckout,
				order,
				setErrorMessage,
				errorMessage,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreProvider
