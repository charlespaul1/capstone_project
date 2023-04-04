import React from 'react'
import './menu.css'
import Nav from './components/Nav'
import FoodCard from './components/foodCard'
import pizza from './assets/pizza.jpg'
import greekSalad from './assets/greek salad.jpg'
import spagheti from './assets/spagheti.jpg'
import Bruchetta from './assets/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'
import LemonDessert from './assets/lemon dessert.jpg'
import Tacos from './assets/Tacos.jpg'
  const Menu = () => {
    const menuItems = [
      {
        id: 1,
        title: 'Pizza Margherita',
        image: pizza,
        description: 'Fresh tomato sauce, mozzarella, basil.',
        price: '$10.99',
      },
      {
        id: 2,
        title: 'Spaghetti Carbonara',
        image: spagheti,
        description: 'Pasta with bacon, eggs, and Parmesan cheese.',
        price: '$12.99',
      },
      {
        id: 3,
        title: 'Greek Salad',
        image: greekSalad,
        description:'The famous Greek salad of crispy lettuce, peppers, olives & Feta cheese garnished with crunchy garlic and rosemary croutons',
        price: '$10.00'
      },
      {
        id: 4,
        title: 'Bruchetta',
        image: Bruchetta,
        description: 'Made with grilled bread that has been smeared with garlic, seasoned with salt and olive oil',
        price: '$8.00'
      },
      {
        id:5,
        title: 'Lemon Dessert',
        image: LemonDessert,
        description: 'This comes straight from Grandma`s recipe book, every last ingredient has been sourced and it is as authentic as can be imagined',
        price: '$5.00'

      },
      {
        id:6,
        title: 'Mediteranean Tacos',
        image: Tacos,
        description: 'Tacos with a mediteranean twist, made with fresh ingredients and a lot of love',
        price: '$8.00'
      }
    
    ];

  return (
    <>
      <Nav />
        
      <div className='menu'>
        {menuItems.map((item) => (
          <FoodCard
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          price={item.price}/>
        ))} 
        </div>
      
       

      
      
    </>
  )
}

export default Menu
