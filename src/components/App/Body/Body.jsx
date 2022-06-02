import { useState } from "react";

function Body( props ){

    const [ hook, setHook ] = useState( null );

    return(
        <div>
            <h2>Body</h2>
            <p>Props: {JSON.stringify( props )}</p>
        </div>
    );
};

export default Body;