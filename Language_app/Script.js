const flashcards = [
  { word: "Kajal", translation: "Hello", lang: "fr-FR" },
  { word: "JavaScript", translation: "Thank you", lang: "es-ES" },
  { word: "Welcome", translation: "Hello", lang: "de-DE" },
  { word: "ありがとう", translation: "Thank you", lang: "ja-JP" },
  { word: "Ciao", translation: "Hi/Bye", lang: "it-IT" }
];

let currentFlashcard = 0;

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function updateFlashcard() {
  const card = flashcards[currentFlashcard];
  document.getElementById("word").textContent = card.word;
  document.getElementById("translation").textContent = `Translation: ${card.translation}`;
}

function nextFlashcard() {
  currentFlashcard = (currentFlashcard + 1) % flashcards.length;
  updateFlashcard();
}

function speakWord() {
  const card = flashcards[currentFlashcard];
  const utterance = new SpeechSynthesisUtterance(card.word);
  utterance.lang = card.lang;
  speechSynthesis.speak(utterance);
}

updateFlashcard();

// Quiz Section
let quizIndex = 0;
let shuffled = shuffle([...flashcards]);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuiz() {
  const question = shuffled[quizIndex];
  document.getElementById("quiz-question").textContent = `What is the translation of "${question.word}"?`;

  const options = shuffle([
    question.translation,
    ...flashcards.filter(f => f !== question).slice(0, 2).map(f => f.translation)
  ]);

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      const feedback = document.getElementById("quiz-feedback");
      if (option === question.translation) {
        feedback.textContent = "✅ Correct!";
      } else {
        feedback.textContent = `❌ Wrong. Correct answer: ${question.translation}`;
      }
    };
    optionsContainer.appendChild(btn);
  });
}

function nextQuestion() {
  quizIndex = (quizIndex + 1) % shuffled.length;
  document.getElementById("quiz-feedback").textContent = "";
  loadQuiz();
}

loadQuiz();
