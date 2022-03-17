// Подключение функционала "Чертогов Фрилансера"
import {
	isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
	flsModules
} from "./modules.js";

const body = document.querySelector('body'),
	sidebar = body.querySelector('nav'),
	toggle = body.querySelector(".toggle"),
	modeSwitch = body.querySelector(".toggle-switch"),
	modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
	sidebar.classList.toggle("close");
});