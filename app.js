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

    document.querySelectorAll('[data-lang="tr"]').forEach((trToggle) => {
      trToggle.classList.toggle("lang-active", language === "tr");
      trToggle.classList.toggle("lang-inactive", language !== "tr");
    });
    document.querySelectorAll('[data-lang="en"]').forEach((enToggle) => {
      enToggle.classList.toggle("lang-active", language === "en");
      enToggle.classList.toggle("lang-inactive", language !== "en");
    });

    document.documentElement.setAttribute("lang", language === "tr" ? "tr" : "en");
    localStorage.setItem("portfolioLang", language);
  }

  function initLanguage(translations) {
    const toggleContainers = document.querySelectorAll("[data-lang-toggle]");
    if (toggleContainers.length === 0) {
      return;
    }

    const saved = localStorage.getItem("portfolioLang");
    const startLang = saved === "tr" ? "tr" : "en";
    applyLanguage(startLang, translations);

    toggleContainers.forEach((toggleContainer) => {
      toggleContainer.addEventListener("click", (event) => {
        const langButton = event.target.closest("[data-lang]");
        if (!langButton) {
          return;
        }
        const next = langButton.getAttribute("data-lang") === "tr" ? "tr" : "en";
        applyLanguage(next, translations);
      });
    });
  }

  function initMobileMenu() {
    const menuButton = document.querySelector("[data-mobile-menu-button]");
    const menuPanel = document.querySelector("[data-mobile-menu]");
    const menuIcon = document.querySelector("[data-mobile-menu-icon]");

    if (!menuButton || !menuPanel) {
      return;
    }

    function setMenuState(isOpen) {
      menuPanel.classList.toggle("hidden", !isOpen);
      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (menuIcon) {
        menuIcon.textContent = isOpen ? "close" : "menu";
      }
    }

    setMenuState(false);

    menuButton.addEventListener("click", () => {
      const isOpen = menuPanel.classList.contains("hidden");
      setMenuState(isOpen);
    });

    menuPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  window.initPortfolioPage = function initPortfolioPage() {
    initMouseGlow();
    initMobileMenu();
    if (window.PAGE_TRANSLATIONS) {
      initLanguage(window.PAGE_TRANSLATIONS);
    }
  };
})();
