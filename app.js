(() => {
  function initMouseGlow() {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId = null;

    function renderGlow() {
      document.documentElement.style.setProperty("--glow-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--glow-y", `${mouseY}px`);
      rafId = null;
    }

    function queueGlowUpdate() {
      if (rafId !== null) {
        return;
      }
      rafId = requestAnimationFrame(renderGlow);
    }

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      queueGlowUpdate();
    });

    queueGlowUpdate();
  }

  function applyLanguage(language, translations) {
    const dictionary = translations[language];
    if (!dictionary) {
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    const trToggle = document.querySelector('[data-lang="tr"]');
    const enToggle = document.querySelector('[data-lang="en"]');
    if (trToggle && enToggle) {
      trToggle.classList.toggle("lang-active", language === "tr");
      enToggle.classList.toggle("lang-active", language === "en");
      trToggle.classList.toggle("lang-inactive", language !== "tr");
      enToggle.classList.toggle("lang-inactive", language !== "en");
    }

    document.documentElement.setAttribute("lang", language === "tr" ? "tr" : "en");
    localStorage.setItem("portfolioLang", language);
  }

  function initLanguage(translations) {
    const toggleContainer = document.querySelector("[data-lang-toggle]");
    const trToggle = document.querySelector('[data-lang="tr"]');
    const enToggle = document.querySelector('[data-lang="en"]');
    if (!toggleContainer || !trToggle || !enToggle) {
      return;
    }

    const saved = localStorage.getItem("portfolioLang");
    const startLang = saved === "tr" ? "tr" : "en";
    applyLanguage(startLang, translations);

    toggleContainer.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang") === "tr" ? "tr" : "en";
      const next = current === "tr" ? "en" : "tr";
      applyLanguage(next, translations);
    });
  }

  window.initPortfolioPage = function initPortfolioPage() {
    initMouseGlow();
    if (window.PAGE_TRANSLATIONS) {
      initLanguage(window.PAGE_TRANSLATIONS);
    }
  };
})();
