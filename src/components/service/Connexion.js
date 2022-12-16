import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import { loginService } from "../../Services/login.service";
import "../style/Connexion.css"

export default function Connexion() {

  const [loginInfo, setLoginInfo] = useState(null);
  const [isLogged, setIsLogged] = useState(false)

  const {
    register,
    handleSubmit
  } = useForm();

  useEffect(() => {
    loginInfo && loginService(loginInfo, setIsLogged);
  }, [loginInfo]);

  return (
    <div className="connexion__container">
      <form onSubmit={handleSubmit((data) => setLoginInfo(data))}>
          <div>
            <input placeholder="Email" id="mail"{...register("email", { required: true })} />
          </div>
          <div>
            <input placeholder="Mot de passe" id="password" {...register("password", { required: true })} type="password" />
          </div>
          <button className="bnt1" type="submit">Connexion</button>
      </form>
    </div>
  );
}
