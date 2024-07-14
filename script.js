const button = document.getElementById("openModal")
const modal = document.getElementsByClassName("modal")

function openModalFunction(params) {
	modal[0].style.visibility = "visible";
}

function closeModalFunction(params) {
	modal[0].style.display = "none";
}