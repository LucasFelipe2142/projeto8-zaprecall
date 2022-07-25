import React from "react";
import Footer from "./Footer";
import Estado from "./Estados"
export default function Props_response(props) {

    const [estado, setEstado] = React.useState(false);
    return (estado == false ?
        <div className="box_quest response_box">
            <p>{props.response}</p>
            <div className="acerto_erro">
                <div className="erro" onClick={() => {
                    setEstado('Nlembrei')
                }}>Não lembrei</div>
                <div className="quase" onClick={() => {
                    setEstado('QuaseNlembrei')
                }}><div>Quase não lembrei</div></div>
                <div className="acerto" onClick={() => {
                    setEstado('Zap')
                }}>Zap</div>
            </div>
        </div> : <Estado question={props.question} estado={estado} />
    )


}