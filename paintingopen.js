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
    const correctAnswer = 10; // The correct answer to check
    const answerSafe = Number(document.getElementById("SafeText").value); // User input converted to a number

    if (answerSafe === correctAnswer) {
        // Update the title and result to indicate success
        document.getElementById("SafeTitle").innerText = "The Answer is correct";
        document.getElementById("SafeResult").innerText = "The first part of the code is: A01";

        // Redirect to the new page
        window.location.href = "http://127.0.0.1:5500/safekey.html";
    } else {
        // Indicate incorrect input
        document.getElementById("SafeResult").innerText = "Incorrect";
    }
}