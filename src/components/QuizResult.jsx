import React from 'react'

function QuizResult() {
  return (
    <div class="result_box ">
        <div class="icon ">
            <i class="fas fa-crown "></i>
        </div>
        <div class="complete_text ">You've completed the Quiz!</div>
        <div class="score_text ">
            
        </div>
        <div class="buttons ">
            <button class="restart ">Replay Quiz</button>
            <button class="quit">Quit Quiz</button>
        </div>
    </div>
  )
}

export default QuizResult