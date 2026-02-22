document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     PANEL INFO SYSTEM
  ======================== */
  const panels = document.querySelectorAll(".panel");
  const infoBox = document.getElementById("infoBox");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");
  const backBtn = document.getElementById("backBtn");

  const data = {
    web: {
      title: "WEB / APP",
      text: "Design and develop scalable web or mobile applications that solve real-world problems using modern frameworks and tools."
    },
    ai: {
      title: "AI / ML",
      text: "Apply machine learning or AI techniques to automate decisions, predict outcomes, or extract intelligence from data."
    },
    cyber: {
      title: "CYBERSECURITY",
      text: "Identify vulnerabilities, secure systems, and design defense strategies against modern cyber threats."
    },
    data: {
      title: "DATA",
      text: "Analyze, visualize, and derive insights from structured or unstructured data to support informed decisions."
    },
    uiux: {
      title: "UI / UX",
      text: "Craft intuitive, accessible, and visually compelling user experiences backed by strong design reasoning."
    }
  };

  panels.forEach(panel => {
    panel.addEventListener("click", () => {
      const key = panel.dataset.key;
      if (!data[key]) return;

      // Remove active state from all
      panels.forEach(p => p.classList.remove("active"));

      // Activate clicked panel
      panel.classList.add("active");

      // Show info
      infoTitle.textContent = data[key].title;
      infoText.textContent = data[key].text;
      infoBox.classList.remove("hidden");
    });
  });

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      infoBox.classList.add("hidden");
      panels.forEach(p => p.classList.remove("active"));
    });
  }

  /* =======================
     AUDIO (USER INTERACTION)
  ======================== */
  const audio = document.getElementById("bgAudio");
  if (audio) {
    document.addEventListener("click", () => {
      audio.volume = 0.8;
      audio.play().catch(() => { });
    }, { once: true });
  }

  /* =======================
     JOIN THE FIGHT → REGISTER
  ======================== */
  // Add this at the end of js/flayer.js
  const joinBtn = document.getElementById('joinFightBtn');

  joinBtn.addEventListener('click', () => {
    // We pass 'mindflayer' as the event parameter
    // If this is the "Abyss Talk Show", change 'mindflayer' to 'talkshow'
    window.location.href = 'register.html?event=mindflayer';
  });


});
