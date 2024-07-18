const button = document.getElementById("openModal")
const modal = document.getElementsByClassName("modal")

function openModalFunction(params) {
	modal[0].style.visibility = "visible";
	modal[0].style.display = "block";

}

function closeModalFunction(params) {
	modal[0].style.display = "none";

}

window.onclick = function(event) {
  if (event.target.id !== "openModal" ) {
	modal[0].style.display = "none";
  }
};
