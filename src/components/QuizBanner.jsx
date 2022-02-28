import React from 'react'

function quizBanner() {
  return (
    <div class="info_box">
    <div class="info-title"><span>QUIZ RULES</span></div>
    <div class="info-list">
        <div class="info">1. Only <span>15 seconds</span> per question.</div>
        <div class="info">2. Once selected, the answer cannot be undone.</div>
        <div class="info">3. Cannot select any option once timer goes off.</div>
        <div class="info">4. Get points on the basis of your correct answers.</div>
    </div>
    <div class="buttons">
        <button class="quit">Exit Quiz</button>
        <button class=" restart ">Continue</button>
    </div>
</div>
  )
}

export default quizBanner