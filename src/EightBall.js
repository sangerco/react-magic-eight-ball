import React, { useState } from "react";
import "./EightBall.css";

const EightBall = (props) => {
    const answers = [...props.answers]
    const startView = { msg: 'Think of a Question', color: 'black'}
    const newQuestion = () => {
        setAnswer(startView)
    }
    const getAnswer = () => {
        const idx = Math.floor(Math.random() * answers.length);
        const answer = answers[idx];
        return answer;
    }
    const newAnswer = () => {
        setAnswer(getAnswer());
    }

    const [answer, setAnswer] = useState(startView);

    return (
        <div>
            <span onClick={newAnswer} style={{backgroundColor: answer.color}} className="EightBall-circle">{ answer.msg }</span>
            <button onClick={newQuestion}>Start Again?</button>
        </div>

    )
}


export default EightBall;

