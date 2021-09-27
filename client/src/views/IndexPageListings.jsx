import React from "react";
import { Link } from 'react-router-dom';
import PropertyFinder from "../api/PropertyFinder";
import PropertyGeneral from "./PropertyGeneral";



export default function IndexPageListings(props) {
    const [listings, setListings] = React.useState();

    //use effect hook to populate state with data
    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await PropertyFinder.get("/");
                setListings(response.data.data.allProperties.Properties);
                console.log(response.data.data.allProperties.Properties);
            }
            catch(e){
            }
        }
        fetchData();
        
    }, []);
  return (
      <div className="container mx-auto items-center">
        <ul className="flex m-4">
            
            {listings && listings.map ( listing => {
                return (
                    <li className="shadow-md flex-0 m-4 w-60">
                        <PropertyGeneral listing={listing}/>
                    </li>
                )
            })}
            
        </ul>
      </div>
  );
}

