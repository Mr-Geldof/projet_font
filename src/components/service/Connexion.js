import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import { loginService } from "../../Services/login.service";

export default function Connexion() {

  const [loginInfo, setLoginInfo] = useState(null);
  const [isLogged, setIsLogged] = useState(false)

  const {
    register,
    handleSubmit
  } = useForm();

  useEffect(() => {
    console.log(isLogged)
    loginInfo && loginService(loginInfo, setIsLogged);
  }, [isLogged]);

  return (
    <div>
      <form onSubmit={handleSubmit((data) => setLoginInfo(data))}>
        <label htmlFor="">
          Email <br/>
          <input {...register("email", { required: true })} />
        </label>
        <br/><br/>
        <label htmlFor="">
          Mot de passe<br/>
          <input {...register("password", { required: true })} type="password" />
        </label><br/><br/>
        <input type="submit" />
      </form>
    </div>
  );
}
