import React from "react";
import logo from "./img/logo.png"
import Pag2 from "./Pag2"
import './css/Pag_Inicial_style.css'
export default function Pag_inicial() {
    const [pagInicial, setPagInicial] = React.useState(true);
    if (pagInicial) {
        return (
            <>
                <div className='container_pag_inicial'>

                    <img src={logo} />
                    <div className="name">ZapRecall</div>
                    <div className="button" onClick={() => setPagInicial(!pagInicial)}>Iniciar Recall</div>

                </div>
            </>
        );
    } else {
        return (<> <Pag2 /> </>)
    }

}