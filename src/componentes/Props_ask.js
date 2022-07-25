import React from "react";
import Props_quest from "./Props_quest";

export default function Props_ask(props) {
    const [open, setOpen] = React.useState(true);
    return (open ?
        <>
            <div className="box_ask" onClick={() => setOpen(!open)}>

                <p>{props.question}</p>
                <ion-icon name="play-outline"></ion-icon>

            </div>
        </> : <div className="quest_container"><Props_quest questionOpen={props.questionOpen} response={props.response} /></div>
    )
}