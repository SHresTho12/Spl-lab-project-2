import React from 'react'
import '../Css/VoiceCard.css'
import drink from "../images/VoiceCard/drink.jpg"
import food from "../images/VoiceCard/food.jpg"
import tire from "../images/VoiceCard/tired.jpg"
import hurt from "../images/VoiceCard/hurt.jpg"
import happy from "../images/VoiceCard/happy.jpg"
import angry from "../images/VoiceCard/angry.jpg"
import sad from "../images/VoiceCard/sad.jpg"
import home from "../images/VoiceCard/home.jpg"
import school from "../images/VoiceCard/school.jpg"
import grandma from "../images/VoiceCard/grandma.jpg"
import outside from "../images/VoiceCard/outside.jpg"
import scared from "../images/VoiceCard/scared.jpg"
import { ChakraProvider, SimpleGrid, Container } from "@chakra-ui/react";
import VoiceCardImage from '../components/VoiceCardImage'
function VoiceCard() {


    const main = document.querySelector('main');
    const voicesSelect = document.getElementById('voices');
    const textarea = document.getElementById('text');
    const readBtn = document.getElementById('read');
    const toggleBtn = document.getElementById('toggle');
    const closeBtn = document.getElementById('close');
    
    const data = [
      {
        image: {drink},
        text: "I'm Thirsty"
      },
      {
        image: {food},
        text: "I'm Hungry"
      },
      {
        image: {tire},
        text: "I'm Tired"
      },
      {
        image: {hurt},
        text: "I'm Hurt"
      },
      {
        image: {happy},
        text: "I'm Happy"
      },
      {
        image: {angry},
        text: "I'm Angry"
      },
      {
        image: {sad},
        text: "I'm Sad"
      },
      {
        image: {scared},
        text: "I'm Scared"
      },
      {
        image: {outside},
        text: 'I Want To Go Outside'
      },
      {
        image: {home},
        text: 'I Want To Go Home'
      }, 
      {
        image: {school},
        text: 'I Want To Go To School'
      },
      {
        image: {grandma},
        text: 'I Want To Go To Grandmas'
      }
    ];
    
    data.forEach(createBox);
    
    // Create speech boxes
    function createBox(item) {
      const box = document.createElement('div');
    
      const { image, text } = item;
    
      box.classList.add('box');
    
      box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
      `;
    
      box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();
    
        // Add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
      });
    
      main.appendChild(box);
    }
    
    // Init speech synth
    const message = new SpeechSynthesisUtterance();
    
    // Store voices
    let voices = [];
    
    function getVoices() {
      voices = speechSynthesis.getVoices();
    
      voices.forEach(voice => {
        const option = document.createElement('option');
    
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
    
        voicesSelect.appendChild(option);
      });
    }
    
    // Set text
    function setTextMessage(text) {
      message.text = text;
    }
    
    // Speak text
    function speakText() {
      speechSynthesis.speak(message);
    }
    
    // Set voice
    function setVoice(e) {
      message.voice = voices.find(voice => voice.name === e.target.value);
    }
    
    // Voices changed
    speechSynthesis.addEventListener('voiceschanged', getVoices);
    
    // Toggle text box
    toggleBtn.addEventListener('click', () =>
      document.getElementById('text-box').classList.toggle('show')
    );
    
    // Close button
    closeBtn.addEventListener('click', () =>
      document.getElementById('text-box').classList.remove('show')
    );
    
    // Change voice
    voicesSelect.addEventListener('change', setVoice);
    
    // Read text button
    readBtn.addEventListener('click', () => {
      setTextMessage(textarea.value);
      speakText();
    });
    
    getVoices();
    


  return (
    <body>
    <div class="container">
      <h1>Speech Text Reader</h1>
      <button id="toggle" class="btn btn-toggle">
        Toggle Text Box
      </button>
      <div id="text-box" class="text-box">
        <div id="close" class="close">X</div>
        <h3>Choose Voice</h3>
        <select id="voices"></select>
        <textarea id="text" placeholder="Enter text to read..."></textarea>
        <button class="btn" id="read">Read Text</button>
      </div>
      <main>

      <SimpleGrid columns={[1, 2, 3,4, 1, 2 , 3,4]}>
          {data.map(function (data) {
            const { image , text } = data;
            return (
              <VoiceCardImage image={image} text={text}/>
            );
          })}
        </SimpleGrid>

      </main>
    </div>

    
  </body>
  )
}

export default VoiceCard