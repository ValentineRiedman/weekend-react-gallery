import { useState, useEffect } from "react";
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";

function Body( props ){
    const [ photos, setPhotos ] = useState( [] );
    useEffect( ()=>{
        getPhotos();
    }, [] );

    const getPhotos=()=>{
        axios.get('/gallery').then( ( response )=>{
            setPhotos( response.data );
        }).catch( ( err ) =>{
            console.log( err );
            alert( 'error getting photos' );
        })
    }
    return(
        <div>
            <h2>Body</h2>
            <GalleryList photoArray={ photos } />
        </div>
    );
};

export default Body;