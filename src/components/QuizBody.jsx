import React from 'react'

function QuizBody() {
  return (
    <div class="quiz_box ">
    <header>
        <div class="title ">QUIZ GAME - NUMBERS</div>
        <div class="timer ">
            <div class="time_left_txt ">Time Left</div>
            <div class="timer_sec ">15</div>
        </div>
        <div class="time_line "></div>
    </header>
    <section>
        <div class="que_text ">
         
        </div>

        <div class="option_list ">
           
        </div>
    </section>

   
    <footer>
        <div class="total_que ">
           
        </div>
        <button class="next_btn ">Next Question</button>
    </footer>
</div>
  )
}

export default QuizBody