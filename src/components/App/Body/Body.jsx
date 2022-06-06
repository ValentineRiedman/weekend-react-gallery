import { useState, useEffect } from "react";
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";

function Body( props ){
    const [ photos, setPhotos ] = useState( [] );

    return(
        <div>
            <h2>Body</h2>
            <p>Props: {JSON.stringify( props )}</p>
            <GalleryList photoArray={ photos } />
        </div>
    );
};

export default Body;