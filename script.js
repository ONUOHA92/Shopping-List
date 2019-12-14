var button = document.getElementById('enter');
var userInput = document.getElementById('Input');
var uls = document.querySelector("ul")

// adding event listener to the button
function userLength() {
  return userInput.value.length;
}

function createLeastElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(userInput.value));
  uls.appendChild(li);
  Input.value = "";
}

function addLeastClick() {
  if (userLength() > 0) {
    createLeastElement()
  }
}

function addEventAfterKeypress(event) {
  if (userLength() > 0 && event.keyCode === 13) {
    createLeastElement()

  }
}

button.addEventListener('click', addLeastClick);

userInput.addEventListener("keypress", addEventAfterKeypress)

