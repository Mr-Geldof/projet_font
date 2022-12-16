import axios from "axios";
import Swal from "sweetalert2";

export const getLocationService = async (setLocations) => {
  await axios.get("http://localhost:8080/api/all-location")
    .then((response) => setLocations(JSON.stringify(response.data.location)))
    .catch((error) => {
      return Swal.fire({
        icon: "error",
        title: "Oups",
        text: "Adresse Email et/ou Mot de passe invalide",
      });
    });
};
