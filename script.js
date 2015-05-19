//Todo App

function addLi() {
// Select the place on the form where the input is put
	var input = document.getElementById("textbox")
// and extract it's value after there's a click
	var content = input.value;
// create new li and put the message into it, then attatch it to the ul
	var newLi = document.createElement("LI");
	newLi.innerHTML = content;
	var list = document.querySelector("ul");
	list.appendChild(newLi)
	input.value = "";
}

var button = document.querySelector("button");

button.addEventListener("click", function(event) {
	addLi();
});

var textField = document.getElementById("textbox")
textField.addEventListener("keydown", function(event) {
	if(event.keyCode === 13) {
		event.preventDefault();
		addLi();
	}


});