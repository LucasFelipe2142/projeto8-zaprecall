export default function Estado(props){
    if(props.estado == 'Nlembrei'){
    return(
        <div className="box_ask estado_errado">

                <p>{props.question}</p>
                <ion-icon name="close-circle"></ion-icon>

        </div>
    )} else if (props.estado == 'QuaseNlembrei'){
        return (
        <div className="box_ask estado_quase">

                <p>{props.question}</p>
                <ion-icon name="help-circle"></ion-icon>

        </div>)
    } else{
        return(
            <div className="box_ask estado_zap">

                <p>{props.question}</p>
                <ion-icon name="checkmark-circle"></ion-icon>

        </div>
        )
    }
}