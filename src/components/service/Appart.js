import React ,{useEffect, useState} from "react";
import axios from "axios";
import Footer from "../footer/Footer";

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
                            <div key={index}>
                                <h2>{location.description}</h2>
                                <h2>{location.prix}</h2>
                                <h2>{location.adresse}</h2>
                                <h2>{location.téléphone}</h2>
                               <img src={location.image}/>
                            </div>
                        ))}
            <Footer/>
            </React.Fragment>
        </>
    );
};
export default Appartement ;