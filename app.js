const start = document.querySelector("#start");
const submit = document.querySelector("#submit");

const mainTxt = document.querySelector(".main-txt");
const typeTxt = document.querySelector(".type-txt");
const result = document.querySelector(".result");
const rtime = document.querySelector("#rtime");
const rwpm = document.querySelector("#rwpm");
const rwrong = document.querySelector("#rwrong");
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
	window.location.reload();
});

let timeStart;
let timeStop;
let dur;

start.addEventListener("click", () => {
	timeStart = new Date();
	typeTxt.removeAttribute("readonly");
	typeTxt.focus();
});

submit.addEventListener("click", () => {
	if (typeTxt.value == "") {
		alert("Please type before submit");
		return;
	}

	timeStop = new Date();
	dur = ((timeStop - timeStart) / 60000).toFixed(1);
	const maindata = mainTxt.value.split(" ");
	console.log(maindata);
	const typedata = typeTxt.value.split(" ");
	console.log(typedata);

	let wrong = 0;
	let wpm = (typedata.length / dur).toFixed(0);
	for (let i = 0; i < typedata.length; i++) {
		if (maindata[i] != typedata[i]) {
			wrong++;
			console.log(i);
		}
	}

	// Result
	start.style.display = "none";
	submit.style.display = "none";
	mainTxt.style.display = "none";
	typeTxt.style.display = "none";
	result.style.display = "block";

	rtime.innerHTML = dur + " min";
	rwpm.innerHTML = wpm;
	rwrong.innerHTML = wrong;
	console.log("Time taken = " + dur);
	console.log("wpm = " + wpm);
	console.log("wrong = " + wrong);
});
