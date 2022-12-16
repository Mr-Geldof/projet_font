import axios from 'axios'
import Swal from 'sweetalert2'

export const loginService = async (loginInfo, setIsLogged) => {

    await axios.post('http://localhost:8080/api/auth',{
      email: loginInfo.email,
      password: loginInfo.password
    })
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.data.data));
      return setIsLogged(true);
    })
    .catch((error) => {
        if(error.response.status === 500)
            return Swal.fire({
                'icon': 'error',
                'title': 'Oups',
                'text': "Adresse Email et/ou Mot de passe invalide"
            })

        return Swal.fire({
            'icon': 'error',
            'title': 'Erreur',
            'text': "Une erreur est survenue lors de l'authentification. Veillez réessayer ultérieurement"
        })
        
    })
  }
