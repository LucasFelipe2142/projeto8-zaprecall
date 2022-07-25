import React from "react";
import logo from "./img/logo.png"
import './css/Pag_Inicial_style.css'
export default function Pag_inicial(){
    const [pagInicial,setPagInicial] = React.useState(true);
    return( pagInicial ?
        <>
        <div className='container_pag_inicial'>
            
            <img src = {logo} />
            <div className="name">ZapRecall</div>
            <button onClick={() => setPagInicial(!pagInicial)}>Iniciar Recall</button>
            
        </div>
        </> : <></>
    );
}