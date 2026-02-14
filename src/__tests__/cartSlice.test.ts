import reducer, {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart
} from '@/store/cartSlice'

describe('cartSlice reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({ items: [] })
  })

  it('adds item and increases quantity on duplicate', () => {
    const state1 = reducer(
      undefined,
      addToCart({
        restaurantId: '1',
        id: '10',
        image: 'img',
        name: 'Dish',
        price: '10.00',
        quantity: 1
      })
    )
    const state2 = reducer(
      state1,
      addToCart({
        restaurantId: '1',
        id: '10',
        image: 'img',
        name: 'Dish',
        price: '10.00',
        quantity: 1
      })
    )
    expect(state2.items[0].quantity).toBe(2)
  })

  it('clears cart when adding from different restaurant', () => {
    const s1 = reducer(
      undefined,
      addToCart({
        restaurantId: '1',
        id: '1',
        image: 'img',
        name: 'A',
        price: '10.00',
        quantity: 1
      })
    )
    const s2 = reducer(
      s1,
      addToCart({
        restaurantId: '2',
        id: '2',
        image: 'img',
        name: 'B',
        price: '20.00',
        quantity: 1
      })
    )
    expect(s2.items).toHaveLength(1)
    expect(s2.items[0].restaurantId).toBe('2')
  })

  it('increase and decrease quantity', () => {
    const s1 = reducer(
      undefined,
      addToCart({
        restaurantId: '1',
        id: '1',
        image: 'img',
        name: 'A',
        price: '10.00',
        quantity: 1
      })
    )
    const s2 = reducer(s1, increaseQuantity(1))
    expect(s2.items[0].quantity).toBe(2)
    const s3 = reducer(s2, decreaseQuantity(1))
    expect(s3.items[0].quantity).toBe(1)
  })

  it('removes item', () => {
    const s1 = reducer(
      undefined,
      addToCart({
        restaurantId: '1',
        id: '1',
        image: 'img',
        name: 'A',
        price: '10.00',
        quantity: 1
      })
    )
    const s2 = reducer(s1, removeFromCart(1))
    expect(s2.items).toHaveLength(0)
  })

  it('resets cart', () => {
    const s1 = reducer(
      { items: [{ restaurantId: '1', id: '1', image: 'img', name: 'A', price: '10.00', quantity: 2 }] },
      resetCart()
    )
    expect(s1.items).toHaveLength(0)
  })
})
