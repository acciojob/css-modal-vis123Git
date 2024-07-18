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
    if (event.target.id !== "openModal" && !modal[0].contains(event.target)) {
        modal[0].style.display = "none";
    }
};

// Prevent the click event on modal content from propagating to the document
document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});
