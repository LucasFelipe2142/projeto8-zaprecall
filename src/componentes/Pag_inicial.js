import React from "react";
import logo from "./img/logo.png"
import Pag2 from "./Pag2"
import './css/Pag_Inicial_style.css'
export default function Pag_inicial(){
    const [pagInicial,setPagInicial] = React.useState(true);
    if(pagInicial){
        return(
        <>
        <div className='container_pag_inicial'>
            
            <img src = {logo} />
            <div className="name">ZapRecall</div>
            <button onClick={() => setPagInicial(!pagInicial)}>Iniciar Recall</button>
            
        </div>
        </>
    );
    }else{
        return( <> <Pag2 /> </>)
    }
    
}