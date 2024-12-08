function toggleSafePopup() {
    const popup = document.getElementById("popupSafe");
    const blur = document.getElementById("blurSafe");

    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup.style.visibility = "hidden";
        }, 500); 
    } else {
        popup.style.visibility = "visible";
        popup.classList.add("active");
        blur.classList.add("active");
    }
}

function checkSafeCode() {
    const correctAnswer = "(2x-1)²/3+1"; 
    const answerSafe = document.getElementById("SafeText").value.trim(); 

    if (answerSafe === correctAnswer) {
       
        document.getElementById("SafeTitle").innerText = "The Answer is correct";
        document.getElementById("SafeResult").innerText = "The first part of the code is: A01";

        window.location.href = "/Clever-Captives/safekey.html";
    } else {
       
        document.getElementById("SafeResult").innerText = "Incorrect";
    }
}
