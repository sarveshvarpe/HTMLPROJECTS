document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input[type='text']");
    const mainText = document.querySelector("main p");

    // Fade-in animation
    mainText.style.opacity = 0;
    input.style.opacity = 0;

    setTimeout(() => {
        mainText.style.transition = "opacity 1s ease-in";
        mainText.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        input.style.transition = "opacity 1s ease-in";
        input.style.opacity = 1;
    }, 1000);

    // Input highlight on focus
    input.addEventListener("focus", () => {
        input.style.borderColor = "#e23744";
        input.style.boxShadow = "0 0 10px rgba(226, 55, 68, 0.6)";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
    });
});
