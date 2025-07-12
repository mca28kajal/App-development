let flashcards = [];
let currentIndex = 0;
let showingAnswer = false;

const cardText = document.getElementById("card-text");
const toggleBtn = document.getElementById("toggle-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");

const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

function updateCard() {
  if (flashcards.length === 0) {
    cardText.textContent = "No flashcards yet.";
    toggleBtn.style.display = "none";
    return;
  }

  toggleBtn.style.display = "inline-block";
  showingAnswer = false;
  cardText.textContent = flashcards[currentIndex].question;
}

toggleBtn.addEventListener("click", () => {
  if (flashcards.length === 0) return;
  showingAnswer = !showingAnswer;
  cardText.textContent = showingAnswer
    ? flashcards[currentIndex].answer
    : flashcards[currentIndex].question;
});

prevBtn.addEventListener("click", () => {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
});

nextBtn.addEventListener("click", () => {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
});

addBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if (question && answer) {
    flashcards.push({ question, answer });
    currentIndex = flashcards.length - 1;
    questionInput.value = "";
    answerInput.value = "";
    updateCard();
  }
});

editBtn.addEventListener("click", () => {
  if (flashcards.length === 0) return;
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if (question && answer) {
    flashcards[currentIndex] = { question, answer };
    updateCard();
  }
});

deleteBtn.addEventListener("click", () => {
  if (flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  currentIndex = Math.max(0, currentIndex - 1);
  updateCard();
});

updateCard();
