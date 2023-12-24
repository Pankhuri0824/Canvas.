function scrollToSection(sectionId) {
    // scrolling to sections on the same page
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = section.offsetTop - 100; 
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
    } else {
        // If the section is on another page, navigate to that page
        window.location.href = 'index.html#' + sectionId;
    }
}

// const cards = document.querySelectorAll('.card');
//         cards.forEach(card => {
//             card.addEventListener('click', function () {
//                 alert('Card clicked!');
//             });
//         });


function openModal(title, info, text, image) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");
    const modalText = document.getElementById("modal-text");
    const modalImage = document.getElementById("modal-image");

    modalTitle.innerHTML = title;
    modalInfo.innerHTML = info ;
    modalText.innerHTML = text;
    modalImage.src = image;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
};

