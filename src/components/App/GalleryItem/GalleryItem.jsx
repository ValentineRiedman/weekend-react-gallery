import axios from "axios";
import { useState } from "react";
import './GalleryItem.css';



function GalleryItem( props ){

    const [ show, setShow ] = useState( false );
    const [ clicks, setClicks ] = useState( 0 );

    const handleClick = ()=>{
        setClicks( clicks +1 );
        axios.put('/gallery/like/:id').then( ( response )=>{
            console.log( response.data );
        }).catch( ( err ) =>{
            console.log( err );
            alert( 'error getting likes' );
        })
    }


    const toggleShow = () =>{
        setShow( !show );
    }

    return(
        <div onClick= { toggleShow } className='photo'>
            {
                show?
                <h2><img className="description"src= {props.photo.path}/> {props.photo.description} 
                </h2>
                :
                <img src= {props.photo.path}/>
            }
            <h5><button onClick={ handleClick }>Like</button>Likes:{ clicks }</h5>
        </div>
        
    );
};

export default GalleryItem;