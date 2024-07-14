const button = document.getElementById("openModal")
const modal = document.getElementsByClassName("modal")

function openModalFunction(params) {
	console.log("modal=",modal[0])
	modal[0].style.visibility = "visible";
}

function closeModalFunction(params) {
	modal[0].style.visibility = "hidden";
}