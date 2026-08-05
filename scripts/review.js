document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;
    
    reviewCount++;
    window.localStorage.setItem("reviewCounter-ls", reviewCount);

    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;
});