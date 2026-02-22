document.addEventListener("DOMContentLoaded", () => {
    const glitch = document.getElementById("glitch-overlay");
    const progressLine = document.getElementById("timelineProgress");
    const nodes = document.querySelectorAll(".node");
    const nextBtn = document.getElementById("nextBtn");

    // Initial cinematic glitch
    if (glitch) {
        glitch.classList.add("glitch-active");
        setTimeout(() => glitch.classList.remove("glitch-active"), 1200);
    }

    function updateUI() {
        if (!nodes.length || !progressLine) return;

        const scrollCenter = window.scrollY + (window.innerHeight / 2);
        const firstNodeY = nodes[0].getBoundingClientRect().top + window.scrollY;
        const lastNodeY = nodes[nodes.length - 1].getBoundingClientRect().top + window.scrollY;

        progressLine.style.top = firstNodeY + "px";

        if (scrollCenter < firstNodeY) {
            progressLine.style.height = "0px";
        } else if (scrollCenter >= lastNodeY) {
            progressLine.style.height = (lastNodeY - firstNodeY) + "px";
            if (nextBtn) nextBtn.style.display = "inline-block";
        } else {
            progressLine.style.height = (scrollCenter - firstNodeY) + "px";
            if (nextBtn) nextBtn.style.display = "none";
        }

        nodes.forEach(node => {
            const nodeY = node.getBoundingClientRect().top + window.scrollY;
            if (scrollCenter >= nodeY - 10) {
                node.classList.add("active");
            } else {
                node.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", updateUI);

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (glitch) glitch.classList.add("glitch-active");
            setTimeout(() => {
                window.location.href = 'register.html?event=treasure';
            }, 800);
        });
    }

    updateUI();
});