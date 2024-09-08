document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modalOverlay");

    function openModal() {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
    }

    openModalBtn.addEventListener("click", openModal);

    closeModalBtn.addEventListener("click", closeModal);

    modalOverlay.addEventListener("click", closeModal);

    modal.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});