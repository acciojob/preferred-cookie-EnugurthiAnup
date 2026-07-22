//your JS code here. If required.
let fontSize = document.getElementById("fontsize");
let fontColor = document.getElementById("fontcolor");
let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", function(e) {
    e.preventDefault();
document.documentElement.style.setProperty("--fontsize", fontSize.value + 'px');
document.documentElement.style.setProperty("--fontcolor", fontColor.value);

document.cookie = "fontsize=" + fontSize.value + "px";
document.cookie = "fontcolor=" + fontColor.value;


	
});

let cookies = document.cookie.split('; ')
cookies.forEach((cookie) => {
	let part = cookie.split('=');
	if (part[0] === "fontsize") {
    document.documentElement.style.setProperty("--fontsize", part[1]);
    fontSize.value = parseInt(part[1]);
}

if (part[0] === "fontcolor") {
    document.documentElement.style.setProperty("--fontcolor", part[1]);
    fontColor.value = part[1];
}
});


