import React from 'react'
import Footer from '../components/footer/Footer'
import "./style/Home.css"

export default function Home() {
  return (
    <div>
      <div className='home__container'>
          <h1 className='home__h1'>Brazzaville</h1>
        <p className='home__P'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement</p>
      </div>
      <div className='home__container1'>
        <div className='home__flex'>
          <img src='https://pbs.twimg.com/media/EFFJRy3XoAE8K5o.jpg:large'/>
          <h1>Brazza la belle</h1>
        </div>
        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer</p>
      </div>
      <div className='home__container2'>
        <div className='box1'>
          <img src='https://www.petitfute.com/medias/photo/900_600/6a/6c/220005-brazzaville-memorial-pierre-savorgnan-de-brazza.jpg'/>
          <img src='https://vudaf.com/wp-content/uploads/2018/08/basilique-sainte-anne-congo-brazza.jpeg'/>
          <img src='https://lacongolaise242.org/wp-content/uploads/2018/08/8364995-13111833.jpg'/>
          <img src='https://www.ambassadecongocanada.org/Corniche-2(1).jpg'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
