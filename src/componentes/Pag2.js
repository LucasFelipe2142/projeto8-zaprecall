import Zaps from "./Zaps"
import logo from "./img/logo-pequeno.png"
import "./css/zaps.css"

export default function container_pag2() {
    return ( 
        <div className="container_pag2">
            <div className="top">
                <img src={logo} />
                <div className="namePag2">ZapRecall</div>
            </div>
            <Zaps />
        </div>
    )
}