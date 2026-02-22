document.addEventListener("DOMContentLoaded", () => {
    const glitch = document.getElementById("glitch-overlay");
    const progressLine = document.getElementById("timelineProgress");
    const nodes = document.querySelectorAll(".node");
    
    // Create the registration button dynamically if it doesn't exist in HTML
    let regBtn = document.getElementById("nextBtn"); 

    function updateUI() {
        if (!nodes.length || !progressLine) return;

        const scrollCenter = window.scrollY + (window.innerHeight / 2);
        const firstNodeY = nodes[0].getBoundingClientRect().top + window.scrollY;
        const lastNodeY = nodes[nodes.length - 1].getBoundingClientRect().top + window.scrollY;

        // Position the starting point of the red line
        progressLine.style.top = firstNodeY + "px";

        // Growing line logic
        if (scrollCenter < firstNodeY) {
            progressLine.style.height = "0px";
        } else if (scrollCenter >= lastNodeY) {
            progressLine.style.height = (lastNodeY - firstNodeY) + "px";
            // Reveal the registration button at the end of the timeline
            if (regBtn) {
                regBtn.style.opacity = "1";
                regBtn.style.pointerEvents = "all";
                regBtn.style.transform = "translateY(0)";
            }
        } else {
            progressLine.style.height = (scrollCenter - firstNodeY) + "px";
            // Hide button if they scroll back up
            if (regBtn) {
                regBtn.style.opacity = "0";
                regBtn.style.pointerEvents = "none";
                regBtn.style.transform = "translateY(20px)";
            }
        }

        // Activate nodes as the line passes them
        nodes.forEach(node => {
            const nodeY = node.getBoundingClientRect().top + window.scrollY;
            if (scrollCenter >= nodeY - 10) {
                node.classList.add("active");
            } else {
                node.classList.remove("active");
            }
        });
    }

    // Redirect Logic with Glitch Effect
    if (regBtn) {
        regBtn.addEventListener("click", () => {
            if (glitch) glitch.classList.add("glitch-active");
            
            // Redirect to registration with the 'treasure' parameter
            setTimeout(() => {
                window.location.href = 'register.html?event=treasure';
            }, 800);
        });
    }

    window.addEventListener("scroll", updateUI);
    updateUI(); // Run once on load to set initial state
});