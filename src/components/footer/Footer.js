import React from 'react'
import "../style/Footer.css"

export default function() {
  return (
    <div className='footer__container'>
        <form>
            <h1>Nous Joindre</h1>
            <div>
                <input placeholder='Votre nom' type="text" id="name" name="user_name"/>
            </div>
            <div>
                <input placeholder='Votre email' type="email" id="mail" name="user_mail"/>
            </div>
            <div>
                <textarea placeholder='votre message' id="msg" name="user_message"></textarea>
            </div>
            <button className='btn-1'>Envoyez</button>
        </form>
        <p className='copie'>Tous droits réservés ©2022</p>
    </div>
  )
}
