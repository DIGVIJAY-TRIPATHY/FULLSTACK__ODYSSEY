document
  .getElementById("changeTextButton")
  .addEventListener("click", function() {
  document.getElementById("myParagraph").innerHTML = "Button clicked!";
});

document
.getElementById("highlightFirstCity")
.addEventListener("click", function () {
  document.querySelector('#citiesList>li:first-child').classList.toggle('highlight');
});

document
  .getElementById("changeOrder")
  .addEventListener("click", function() {
  document.getElementById("coffeeType").innerHTML = "Espresso";
});

document
  .getElementById("addNewItem")
  .addEventListener("click", function() {
  document.getElementById("shoppingList").appendChild(document.createElement("li")).innerHTML = "New Item";
});

document
  .getElementById("removeLastTask")
  .addEventListener("click", function() {
  document.getElementById("taskList").removeChild(document.getElementById("taskList").lastElementChild);
});

document
  .getElementById("clickMeButton")
  .addEventListener("click", function() {
  alert("event handling is working!");
});

document
  .getElementById("teaList")
  .addEventListener("click", function() {
  if(event.target.classList.contains("teaItem")){
    const teaName = event.target.innerHTML
    alert(`you selected ${teaName}`)
  }
});

const feedbackForm = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackDisplay = document.getElementById('feedbackDisplay');

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userFeedback = feedbackInput.value;
  feedbackDisplay.textContent = userFeedback;
  feedbackInput.value = '';
});

document
.getElementById("toggleHighlight")
.addEventListener("click", function () {
  document.querySelector('#descriptionText').style.color = 'highlight';
});