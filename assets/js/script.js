
const buttons = document.getElementsByTagName ("button");

for (let i = 0; i < buttons.length; i++)
	buttons[i].addEventListener ("mousedown", () => toggle(buttons[i]));

function toggle (_element) {
	if (_element.classList[0] == "OFF")
		turnON (_element);
	else
		turnOFF (_element);
}

function turnOFF (_element) {
	_element.classList.remove ("ON");
	_element.classList.add ("OFF");
}

function turnON (_element) {
	_element.classList.remove ("OFF");
	_element.classList.add ("ON");
}
