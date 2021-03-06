import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList( props ){

    const [ hook, setHook ] = useState( null );

    return(
        <div>
            {props.photoArray.map( photo=>(<GalleryItem photo={photo} getPhotos={props.getPhotos}/>))}
        </div>
    );
};

export default GalleryList;