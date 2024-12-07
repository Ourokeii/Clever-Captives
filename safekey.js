function toggleSafePopup() {
    const popup = document.getElementById("popupSafe");
    const blur = document.getElementById("blurSafe");

    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        blur.classList.remove("active");

        setTimeout(() => {
            popup.style.visibility = "hidden";
            
            window.location.href = "/Clever-Captives/doorsafeopen.html";
        }, 500); 
    } else {
        popup.style.visibility = "visible";
        popup.classList.add("active");
        blur.classList.add("active");
    }
}
