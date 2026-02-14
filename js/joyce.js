document.addEventListener("DOMContentLoaded", () => {
    const glitch = document.getElementById("glitch-overlay");
    const progressLine = document.getElementById("timelineProgress");
    const nodes = document.querySelectorAll(".node");
    const nextBtn = document.getElementById("nextBtn");

    // Start with Intense Glitch
    glitch.classList.add("glitch-active");
    setTimeout(() => glitch.classList.remove("glitch-active"), 1200);

    function updateUI() {
        const scrollCenter = window.scrollY + (window.innerHeight / 2);

        // Get absolute Y-coordinates of first and last nodes
        const firstNodeY = nodes[0].getBoundingClientRect().top + window.scrollY;
        const lastNodeY = nodes[nodes.length - 1].getBoundingClientRect().top + window.scrollY;

        // Position progress line starting point
        progressLine.style.top = firstNodeY + "px";

        // Logic for "Amazon-like" Growing Line
        if (scrollCenter < firstNodeY) {
            progressLine.style.height = "0px";
        } else if (scrollCenter >= lastNodeY) {
            progressLine.style.height = (lastNodeY - firstNodeY) + "px";
            nextBtn.style.display = "inline-block"; // Show button at the finish
        } else {
            progressLine.style.height = (scrollCenter - firstNodeY) + "px";
            nextBtn.style.display = "none";
        }

        // Activate individual nodes
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
    
    // Smooth exit glitch
    nextBtn.addEventListener("click", () => {
        glitch.classList.add("glitch-active");
        setTimeout(() => window.location.href = 'lab.html', 800);
    });

    updateUI(); // Run once on load
});