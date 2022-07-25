import React from "react";
import rotate from "./img/rotate.png"
import Props_response from "./Props_response";
export default function Props_quest(props) {
    const [open2, setOpen2] = React.useState(true);
    return (open2 ?

        <div className="box_quest">
            <p>{props.questionOpen}</p>
            <img src={rotate} onClick={() => setOpen2(!open2)} />
        </div> : <Props_response response ={props.response}/>

    )
}