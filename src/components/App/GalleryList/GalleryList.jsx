import { useState } from "react";

function GalleryList( props ){

    const [ hook, setHook ] = useState( null );

    return(
        <div>
            <h2>GalleryList</h2>
            <p>Props: {JSON.stringify( props )}</p>
        </div>
    );
};

export default GalleryList;