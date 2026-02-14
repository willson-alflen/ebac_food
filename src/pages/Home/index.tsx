import { useGetRestaurantsQuery } from '@/services/api'
import RestaurantsList from '@/components/RestaurantsList'
import BackToTopBtn from '@/components/BackToTopBtn'
import StatusMessage from '@/components/StatusMessage'

export default function Home() {
  const { data, isLoading, error } = useGetRestaurantsQuery()

  if (isLoading)
    return <StatusMessage>Buscando restaurantes...</StatusMessage>

  if (error)
    return (
      <StatusMessage>
        Erro ao buscar restaurantes. Tente novamente mais tarde.
      </StatusMessage>
    )

  if (!data || data.restaurants.length === 0)
    return <StatusMessage>Não há restaurantes disponíveis...</StatusMessage>

  return (
    <>
      <RestaurantsList restaurants={data.restaurants} />
      <BackToTopBtn />
    </>
  )
}
