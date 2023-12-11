import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'
import BackToTopBtn from '../../components/BackToTopBtn'
import { Message } from './styles'

export default function Home() {
  const { data, isLoading, error } = useGetRestaurantsQuery()

  if (!data) return (
    <Message>
      <p>Não há restaurantes disponíveis...</p>
    </Message>
  )

  if (isLoading) return (
    <Message>
      <p>Buscando restaurantes...</p>
    </Message>
  )

  if (error) return (
    <Message>
      <p>Erro ao buscar restaurantes. Tente novamente mais tarde.</p>
    </Message>
  )

  return (
    <>
      <RestaurantsList restaurants={data.restaurants} />
      <BackToTopBtn />
    </>
  )
}
