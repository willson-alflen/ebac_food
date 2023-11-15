import './App.css'
import { GlobalStyles } from './GlobalStyles'
import Header from './components/Header'
import RestaurantsList from './components/RestaurantsList'
import Footer from './components/Footer'

const restaurants = [
  {
    id: 1,
    name: 'Pasta e Basta',
    description:
      'Desfrute dos sabores autênticos da Itália em nosso charmoso restaurante. De massas suculentas a risotos saborosos, cada prato é uma viagem pelos tesouros culinários da Itália. Bom apetite!',
    image: 'https://i.imgur.com/w1fVxMP.jpeg',
    foodType: 'Italiana',
    rating: '4.9'
  },
  {
    id: 2,
    name: 'Sushi Yoshi',
    description:
      'Explore uma viagem culinária ao Japão em nosso restaurante requintado. De sushis delicados a ramen saboroso, aprecie o autêntico sabor da culinária japonesa. Arigatou gozaimasu por nos escolher!',
    image: 'https://i.imgur.com/lrWNFvl.jpeg',
    foodType: 'Japonesa',
    rating: '4.5'
  },
  {
    id: 3,
    name: 'Churrascaria do Gaúcho',
    description:
      'Delicie-se em nossa churrascaria, onde os sabores suculentos do churrasco brasileiro ganham vida. Das carnes nobres aos acompanhamentos irresistíveis, cada mordida é uma celebração do sabor autêntico do Brasil. Aproveite!',
    image: 'https://i.imgur.com/NSbjIjo.jpeg',
    foodType: 'Brasileira',
    rating: '4.7'
  },
  {
    id: 4,
    name: 'Chicken King',
    description:
      'Saboreie a crocância inigualável do frango frito em nosso restaurante. Das irresistíveis tirinhas aos pedaços suculentos, cada mordida é um convite para experimentar o sabor único e secreto das nossas receitas. Delicie-se!',
    image: 'https://i.imgur.com/qRmlfxn.jpeg',
    foodType: 'Americana',
    rating: '4.8'
  },
  {
    id: 5,
    name: 'Pizza Nossa',
    description:
      'Viaje pela autêntica paixão italiana em nossa pizzaria. Com massa fresca, ingredientes premium e sabores irresistíveis, cada fatia é uma explosão de tradição e deleite. Experimente a verdadeira arte da pizza conosco!',
    image: 'https://i.imgur.com/ovuUh98.jpeg',
    foodType: 'Italiana',
    rating: '4.9'
  },
  {
    id: 6,
    name: 'Taco Loco',
    description:
      'Explore a autêntica explosão de sabores mexicanos em nosso restaurante de tacos. De tortilhas frescas a recheios vibrantes, cada taco é uma jornada irresistível pela riqueza da culinária do México. Prove a autenticidade em cada mordida!',
    image: 'https://i.imgur.com/GjaCu6u.jpeg',
    foodType: 'Mexicana',
    rating: '4.6'
  }
]

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default App
