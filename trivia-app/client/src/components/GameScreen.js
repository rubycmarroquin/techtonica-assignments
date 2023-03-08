import Question from "./Question";
import { useState } from "react";
// score tracker 
// check whether the user has answered all questions
    // end game if they have 
    // continue if they havent 
// want to pass in the data to the question comp 
    // in comp want to increment score if user got the question right 

const GameScreen = ({data}) => {
    const [score, setScore] = useState(0);
    return (
        <div>
            <Question result={data.data.results[0]} setScore={setScore} score={score}/>
            <h1>Your score is: {score}</h1>
        </div>
    )
}

export default GameScreen;