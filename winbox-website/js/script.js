import "winbox";

const work = document.getElementById("work");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const workContent = document.querySelector(".work-content");
const aboutContent = document.querySelector(".about-content");
const contactContent = document.querySelector(".contact-content");

about.addEventListener("click", () => {
	new WinBox({
		title: "My Work",
		background: "#40c057",
		x: "center",
		y: "center",
		width: "50%",
		height: "50%",
		border: 4,
		mount: aboutContent,
	});
});

work.addEventListener("click", () => {
	new WinBox({
		title: "My Work",
		background: "#40c057",
		x: "center",
		y: "center",
		width: "50%",
		height: "50%",
		border: 4,
		mount: workContent,
	});
});

contact.addEventListener("click", () => {
	new WinBox({
		title: "My Work",
		background: "#40c057",
		x: "center",
		y: "center",
		width: "50%",
		height: "50%",
		border: 4,
		mount: contactContent,
	});
});
