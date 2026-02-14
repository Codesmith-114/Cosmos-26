// INDEX -> JOYCE
const bgSound = document.getElementById("bgSound");
const enterBtn = document.getElementById("enterBtn");
const overlay = document.getElementById("transitionOverlay");

/* Start sound silently */
if (bgSound) {
    bgSound.volume = 0;
    bgSound.play().catch(() => {});
}

/* Unmute sound on first user interaction */
document.addEventListener("click", () => {
    if (bgSound && bgSound.volume === 0) {
        bgSound.volume = 0.8;
    }
}, { once: true });

/* ENTER button */
if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        // Stop background sound
        if (bgSound) {
            bgSound.pause();
            bgSound.currentTime = 0;
        }

        // Visual transition
        if (overlay) {
            overlay.classList.add("flash");
        }

        setTimeout(() => {
            window.location.href = "joyce.html";
        }, 900);
    });
}




// JOYCE -> LAB
const nextToLab = document.getElementById("nextToLab");
if (nextToLab) {
    nextToLab.addEventListener("click", () => {
        window.location.href = "lab.html";
    });
}

// LAB -> MIND FLAYER
const nextToMindFlayer = document.getElementById("nextToMindFlayer");
if (nextToMindFlayer) {
    nextToMindFlayer.addEventListener("click", () => {
        window.location.href = "mindflayer.html";
    });
}

// MIND FLAYER -> REGISTER
const joinFight = document.getElementById("joinFight");
if (joinFight) {
    joinFight.addEventListener("click", () => {
        window.location.href = "register.html";
    });
}
