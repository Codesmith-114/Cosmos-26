const panels = document.querySelectorAll(".panel");
const panelGrid = document.querySelector(".panel-grid");
const detailBox = document.getElementById("detailBox");
const backBtn = document.getElementById("backBtn");

const panelData = {
  debug: {
    title: "DEBUG",
    text: "Identify broken logic, trace faults, and restore system stability under pressure."
  },
  build: {
    title: "BUILD",
    text: "Complete missing program logic and assemble functional solutions."
  },
  analyze: {
    title: "ANALYZE",
    text: "Interpret outputs, detect patterns, and extract meaning from raw data."
  },
  programming: {
    title: "PROGRAMMING",
    text: "Algorithmic thinking, precision coding, and problem solving at scale."
  },
  web: {
    title: "WEB DEVELOPMENT",
    text: "Design and build interactive, responsive systems for the digital world."
  }
};

// Panel click
panels.forEach(panel => {
  panel.addEventListener("click", () => {
    const key = panel.dataset.panel;
    const data = panelData[key];

    if (!data) return;

    detailBox.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
    `;

    panelGrid.style.display = "none";
    detailBox.style.display = "block";
    backBtn.style.display = "inline-block";
  });
});

// Back button
backBtn.addEventListener("click", () => {
  detailBox.style.display = "none";
  panelGrid.style.display = "flex";
  backBtn.style.display = "none";
});

// Enter Mindflayer
document.getElementById("enterMindflayer").addEventListener("click", () => {
  window.location.href = "mindflayer.html";
});
