export interface CartItemProps {
  id: string
  image: string
  name: string
  price: string
  quantity: number
  restaurantId: string
}

export interface DishProps {
  id: string
  name: string
  price: string
  description: string
  image: string
  servings?: string
  restaurantId: string
  openCart: () => void
}

export interface RestaurantProps {
  id: string
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
  restaurantId: string
  dishes: DishProps[]
  openCart: () => void
}

export interface RestaurantPageProps {
  openCart: () => void
  restaurants?: RestaurantProps[]
}

interface Address {
  description: string
  city: string
  zipCode: string
  houseNumber: string
  complement: string
}

export interface ShippingValuesProps {
  receiver: string
  address: Address
}

export interface ShippingFormProps {
  payment: () => void
  handleFormSubmit: (values: ShippingValuesProps) => void
}

interface Card {
  name: string
  number: string
  code: string
  expiresAt: {
    month: string
    year: string
  }
}

export interface PaymentValuesProps {
  card: Card
}

export interface PaymentFormProps {
  completePayment: () => void
  handleFormSubmit: (values: PaymentValuesProps) => void
  paymentDetailsValues: PaymentValuesProps | null
}

export interface ConfirmationCardProps {
  orderId: string
}
