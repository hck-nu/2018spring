const colors = ["mistyrose", "skyblue", "lightcoral", "white", "beige", "aliceblue"];
function changeBackground() {
	let colorIndex = Math.round(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[colorIndex];
}