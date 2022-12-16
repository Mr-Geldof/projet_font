import React, { useEffect, useState } from "react";
import { getLocationService } from "../../Services/getLocations.service";

const Dashboard = () => {
    const [locations, setLocations]  = useState(null)

    useEffect(() => {
        locations && getLocationService(setLocations)
    }, [locations]);


  return (
    <div className="Dashboard">
      <table>
        <thead>
          <tr>
            <th>Appartement</th>
            <th>Addresse</th>
            <th>Numéro de téléphone</th>
            <th>description</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>

        {
            (!locations) ?
                <h1>Loading ...</h1>
            :
            locations.map((location,index) => (
                <tr key={index}>
                    <td><img src={location.image} alt="" /></td>
                    <td>{location.adresse}</td>
                    <td>{location.adresse}</td>
                    <td>{location.téléphone}</td>
                    <td>{location.prix}</td>
                </tr>
            ))
        }
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
