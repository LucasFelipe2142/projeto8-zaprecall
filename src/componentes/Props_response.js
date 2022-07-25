export default function Props_response(props) {
    let acerto = 0;
    let erro = 0;
    let quase = 0;
    return (
        <div className="box_quest response_box">
            <p>{props.response}</p>
            <div className="acerto_erro">
            <button className="erro" onClick={() => {erro++}}>Não lembrei</button>
            <button className="quase" onClick={() => {quase++}}>Quase não lembrei</button>
            <button className="acerto" onClick={() => {acerto++}}>Zap</button>
            </div>
        </div>
    )
}