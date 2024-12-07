// Select the elements
const popupSafe = document.getElementById("popupSafe");
const blurSafe = document.getElementById("blurSafe");
const glassImage = document.getElementById("glass");
const backButton = document.querySelector(".btn a");

function toggleSafePopup() {

    const isActive = popupSafe.classList.contains("active");

    if (isActive) {
        glassImage.src = "noglass.png"; 
        backButton.href = "/Clever-Captives/2ndroomTwopt2.html"; 
    }

    popupSafe.classList.toggle("active");
    blurSafe.classList.toggle("active");
}
