import React from 'react'

function VoiceCardImage(props) {
    const message = new SpeechSynthesisUtterance();
    const {image , text} = props;
    // Set text
    function setTextMessage(text) {
        message.text = text;
      }
      
      // Speak text
      function speakText() {
        speechSynthesis.speak(message);
      }
    function event(){
        const box = document.createElement('div');
        setTextMessage(text);
        speakText();
    
        // Add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    }
  return (
    <div className="box" onClick={event}>
        <img src="${image}" alt="${text}" />
    <p class="info">${text}</p></div>
  )
}

export default VoiceCardImage