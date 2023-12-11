export interface CartItemProps {
  id: number
  image: string
  name: string
  price: string
  quantity: number
  restaurantId: number
}

export interface DishProps {
  id: number
  name: string
  price: string
  description: string
  image: string
  servings?: string
  restaurantId: number
  openCart: () => void
}

export interface RestaurantProps {
  id: number
  name: string
  description: string
  image: string
  foodType: string
  rating: string
  menu: DishProps[]
}

export interface RestaurantsListProps {
  restaurants: RestaurantProps[]
}

export interface RestaurantMenuProps {
  restaurantId: number
  dishes: DishProps[]
  openCart: () => void
}

export interface RestaurantPageProps {
  openCart: () => void
}

