function GetName(name) {
  if (!name) {
    alert("Please enter a valid name");
  } else {
    alert("Your name is " + name);
  }
}
const promptMe = window.prompt("Type your name here");
GetName(promptMe);
