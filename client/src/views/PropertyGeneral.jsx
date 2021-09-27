import React from "react";
import { Link } from 'react-router-dom';
import PropertyFinder from "../api/PropertyFinder";


export default function PropertyGeneral(props) {
    return(
        <div>
            <img className="w-1/5" src="./mockpicture.jpg"></img>
            <h1>{props.listing.title}</h1>
            <h1>bed: {props.listing.bed}</h1>
            <h1>bath: {props.listing.bath}</h1>
            <h1>square ft: {props.listing.square}</h1>
            <h1>price: {props.listing.price}</h1>
            

            {/* <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD0-GbeXcsyLNHAcsmzOcb3jd4YZuqgOwQ&origin=Oslo+Norway&destination=Telemark+Norway" title="Google Maps to Destination">
            </iframe> */}
        </div>
    )
}