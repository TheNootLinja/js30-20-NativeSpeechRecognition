window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  console.log(e.results);
  let transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    transcript = replaceUnicorn(transcript);

    p.textContent = transcript;

    if(e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    };
});

const replaceUnicorn = (str) => {
  return str.toLowerCase().replace('unicorn', '🦄');
}

recognition.addEventListener('end', recognition.start);

recognition.start();