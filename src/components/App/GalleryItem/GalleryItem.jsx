import { useState } from "react";
import './GalleryItem.css';

function GalleryItem( props ){

    const [ show, setShow ] = useState( false );

    const toggleShow = () =>{
        setShow( !show );
    }

    return(
        <div onClick= { toggleShow } className='photo'>
            {
                show?
                <h2>{props.photo.description} <button>Like</button></h2>
                :
                <img src= {props.photo.path}/>
            }
        </div>
    );
};

export default GalleryItem;