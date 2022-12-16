import React ,{useEffect, useState} from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import '../style/Appart.css'

const Appartement = () => {

    const [location, setLocation] = useState([]);


    const fetchData = async () => {
        const result = await axios.get("http://localhost:8080/api/all-location");
        setLocation(result.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <React.Fragment >
            {location.map((location, index) => (
                            <div key={index} className="appart__containner">
                                <img className="appart__img" src={location.image}/>
                                <div className="tete">
                                <h2 className="appart__desc">{location.description}</h2>
                                <h2>{location.prix}</h2>
                                <h2>{location.adresse}</h2>
                                <h2>{location.téléphone}</h2>
                                </div>
                            </div>
                        ))}
            <Footer/>
            </React.Fragment>
        </>
    );
};
export default Appartement ;