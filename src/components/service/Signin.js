import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Signin = () => {
    const [signinInfo, setSigninInfo] = useState();

    const {
        register,
        handleSubmit
    } = useForm();

    
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
    )
}

export default Signin