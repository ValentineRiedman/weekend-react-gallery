import axios from "axios";
import { useState } from "react";
import './GalleryItem.css';



function GalleryItem( props ){

    const [ show, setShow ] = useState( false );

    const likePhoto = ()=>{
        let likedClick = props.photo.id;
        axios.put('/gallery/like/'+likedClick).then( ( response )=>{
            console.log( 'response.data:', response.data );
            props.getPhotos();
        }).catch( ( err ) =>{
            console.log( err );
            alert( 'error getting likes' );
        });
    }


    const toggleShow = () =>{
        setShow( !show );
    }

    return(
        <div>
        <div onClick= { toggleShow } className='photo'>
            {
                show?
                <h2> {props.photo.description} 
                </h2>
                :
                <img src= {props.photo.path}/>
            }
        </div>    
            <button id={props.photo.id } onClick={likePhoto}>Like</button>
            <p>Likes: { props.photo.likes }</p>
        </div>
        
    );
};

export default GalleryItem;