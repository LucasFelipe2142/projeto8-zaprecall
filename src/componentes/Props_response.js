import React from "react";
import Footer from "./Footer";
import Estado from "./Estados"
export default function Props_response(props) {
    let acerto = 0;
    let erro = 0;
    let quase = 0;
    let click = 0;
    let aux = 4;
    const [estado,setEstado] = React.useState(false);
    return (estado == false ?
        <div className="box_quest response_box">
            <p>{props.response}</p>
            <div className="acerto_erro">
                <button className="erro" onClick={() => { erro++ 
                setEstado('Nlembrei')}}>Não lembrei</button>
                <button className="quase" onClick={() => { quase++ 
                setEstado('QuaseNlembrei')}}>Quase não lembrei</button>
                <button className="acerto" onClick={() => { acerto++ 
                setEstado('Zap') }}>Zap</button>
            </div>
        </div>: <Estado question = {props.question} estado = {estado}/>
    )


}