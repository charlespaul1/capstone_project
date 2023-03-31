import React from 'react'
import Card from './Card'
import '../components/Main.css'
import greekSalad from '../assets/greek salad.jpg'
import bruschetta from '../assets/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'
import LemonDessert from '../assets/lemon dessert.jpg'

const specialsData = [
  {
    img: greekSalad,
    title: 'Greek Salad',
    price: 12.99,
    description:
    'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feat cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.00,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];


const Main = () => {
  const specialsCards = specialsData.map((item) => {
    return(
      <Card 
      key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    )
  })
  return (
    <main>
      <section className='specials'>
        <div className='top'>
          <h1>This Weeks Specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className='cards'>{specialsCards}</div>
      </section>

    </main>
  )
}

export default Main
