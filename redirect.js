(function () {
  const HOME = "index.html";

  function fixBtn(btn) {
    if (!btn) return;
    btn.onclick = () => {
      window.location.href = HOME;
    };
  }

  // Fix by ID
  fixBtn(document.getElementById("homeBtn"));
  fixBtn(document.getElementById("backBtn"));

  // Fix all buttons containing Home or Back
  document.querySelectorAll("button, .btn").forEach(btn => {
    const t = btn.textContent.trim().toLowerCase();
    if (t.includes("home") || t.includes("back")) {
      btn.onclick = () => window.location.href = HOME;
    }
  });

  // Fix old bad links
  document.querySelectorAll("a").forEach(a => {
    if (!a.href) return;
    if (a.href.includes("HomePagefinal.html")) {
      a.href = HOME;
    }
  });
})();
