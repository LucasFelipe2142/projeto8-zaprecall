import React from "react";
import Props_quest from "./Props_quest";
const questionsaux = [
    { ask: "Pergunta ", question: "O que é JSX?", response: "Uma extensão de linguagem do JavaScript" },
    { ask: "Pergunta ", question: "O React é __", response: "uma biblioteca JavaScript para construção de interfaces" },
    { ask: "Pergunta ", question: "Componentes devem iniciar com __", response: 'letra maiúscula' },
    { ask: "Pergunta ", question: "Podemos colocar __ dentro do JSX", response: 'expressões' },
    { ask: "Pergunta ", question: "O ReactDOM nos ajuda __", response: 'interagindo com a DOM para colocar componentes React na mesma' },
    { ask: "Pergunta ", question: "Usamos o npm para __", response: 'gerenciar os pacotes necessários e suas dependências' },
    { ask: "Pergunta ", question: "Usamos props para __ ", response: 'passar diferentes informações para componentes ' },
    { ask: "Pergunta ", question: "Usamos estado (state) para __ ", response: 'dizer para o React quais informações devem renderizar a tela novamente' }
];

let questionstest = questionsaux.sort(() => Math.random() - 0.5);
    let questions = questionstest.slice(4);

    export default function Render(){
        const [open, setOpen] = React.useState(true);

        function Props_ask(props) {
            return (open ?
                <>
                    <div className="box_ask" onClick={() => setOpen(!open)}>
                        <div>
                            <p>{props.question}</p>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </div>
                </> : <Props_quest questionOpen={props.questionOpen} response ={props.response} />
            )
        }

        return(
            <div>
                {questions.map((ask, index) => (<Props_ask key={index} index={index} question={ask.ask + (index + 1)} questionOpen={ask.question} response={ask.response} />))}
            </div>
        )
    }