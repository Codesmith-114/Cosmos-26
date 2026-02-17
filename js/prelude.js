const enter = document.getElementById("preludeEnter");
const glitch = document.getElementById("glitch");

enter.addEventListener("click", () => {
    glitch.classList.add("active");

    setTimeout(() => {
        window.location.href = "https://cosmos26.vercel.app/";
    }, 800);
});
