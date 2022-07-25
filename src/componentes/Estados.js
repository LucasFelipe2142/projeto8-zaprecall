import party from "./img/party.png"
import sad from "./img/sad.png"
let aux = 0;
let array = [];
let acerto = 0;
let erro = 0;
let quase = 0;
export default function Estado(props) {
    if (props.estado == 'Nlembrei') {
        erro++
        aux++;
        array.push("estado_errado")
        array.push("close-circle")
        return (
            <>
                <div className="box_ask estado_errado">

                    <p>{props.question}</p>
                    <ion-icon name="close-circle"></ion-icon>

                </div>
                <Footer contador={aux} array={array} />
            </>
        )
    } else if (props.estado == 'QuaseNlembrei') {
        quase++
        aux++;
        array.push("estado_quase")
        array.push("help-circle")
        return (
            <>
                <div className="box_ask estado_quase">

                    <p>{props.question}</p>
                    <ion-icon name="help-circle"></ion-icon>

                </div>
                <Footer contador={aux} array={array} />
            </>
        )
    } else {
        acerto++
        aux++;
        array.push("estado_zap")
        array.push("checkmark-circle")
        return (
            <>
                <div className="box_ask estado_zap">

                    <p>{props.question}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>

                </div>
                <Footer contador={aux} array={array} />
            </>
        )
    }

    function Footer(props) {
        console.log(erro)
        console.log(quase)
        console.log(acerto)
        if (aux != 4) {
            return (
                <div className="footer2">
                    <p>{props.contador}/4 CONCLUÍDOS</p>
                    <div className="icons">
                        <div className={props.array[0]} >
                            <ion-icon name={props.array[1]}></ion-icon>
                        </div>

                        <div className={props.array[2]} >
                            <ion-icon name={props.array[3]}></ion-icon>
                        </div>

                        <div className={props.array[4]} >
                            <ion-icon name={props.array[5]}></ion-icon>
                        </div>

                        <div className={props.array[6]} >
                            <ion-icon name={props.array[7]}></ion-icon>
                        </div>

                    </div>
                </div>
            )
        } else {
            if (erro == 0) {
                return (
                    <div className="footer2">
                        <div className="conseguiu">
                            <img src={party} />
                            <p>Parabéns!</p>
                        </div>
                        <h1>Você não esqueceu de nenhum flashcard!</h1>
                        <p>{props.contador}/4 CONCLUÍDOS</p>
                        <div className="icons">
                            <div className={props.array[0]} >
                                <ion-icon name={props.array[1]}></ion-icon>
                            </div>

                            <div className={props.array[2]} >
                                <ion-icon name={props.array[3]}></ion-icon>
                            </div>

                            <div className={props.array[4]} >
                                <ion-icon name={props.array[5]}></ion-icon>
                            </div>

                            <div className={props.array[6]} >
                                <ion-icon name={props.array[7]}></ion-icon>
                            </div>

                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="footer2">
                        <div className="conseguiu">
                            <img src={sad} />
                            <p>Putz...</p>
                        </div>
                        <h1>Ainda faltam alguns...
                            Mas não desanime!</h1>
                        <p>{props.contador}/4 CONCLUÍDOS</p>
                        <div className="icons">
                            <div className={props.array[0]} >
                                <ion-icon name={props.array[1]}></ion-icon>
                            </div>

                            <div className={props.array[2]} >
                                <ion-icon name={props.array[3]}></ion-icon>
                            </div>

                            <div className={props.array[4]} >
                                <ion-icon name={props.array[5]}></ion-icon>
                            </div>

                            <div className={props.array[6]} >
                                <ion-icon name={props.array[7]}></ion-icon>
                            </div>

                        </div>
                    </div>
                )
            }
        }

    }
}