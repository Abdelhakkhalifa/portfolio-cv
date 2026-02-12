/*
  Étudiant: Abdelhak KHALIFA
  Logique JS: rendu dynamique + filtre + thème + formulaire + impression
*/

const $ = (sel) => document.querySelector(sel);

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function renderHeader() {
  setText("#fullName", CV_DATA.fullName);
  setText("#headline", CV_DATA.headline);
  setText("#stack", CV_DATA.stack);
  setText("#city", CV_DATA.city);
  setText("#goal", CV_DATA.goal);

  const telHref = "tel:" + CV_DATA.phone.replaceAll(" ", "");
  const mailHref = "mailto:" + CV_DATA.email;

  $("#siteLink").href = CV_DATA.website;
  $("#mailLink").href = mailHref;
  $("#telLink").href = telHref;

  setText("#telText", CV_DATA.phone);
  setText("#mailText", CV_DATA.email);
  setText("#cityText", CV_DATA.city);
  $("#siteText").innerHTML = `<a href="${CV_DATA.website}" target="_blank" rel="noopener">${CV_DATA.website}</a>`;
}

function renderObjective() {
  setText("#objectiveText", CV_DATA.objective);
}

function renderExperiences() {
  const root = $("#expList");
  root.innerHTML = "";

  CV_DATA.experiences.forEach((exp) => {
    const techLine = exp.tech ? `<div class="mt-2 small"><span class="fw-semibold">Technos :</span> ${exp.tech}</div>` : "";

    const bullets = exp.bullets.map(b => `<li>${b}</li>`).join("");

    root.insertAdjacentHTML("beforeend", `
      <article class="card border-0 shadow-sm rounded-4">
        <div class="card-body">
          <div class="d-flex justify-content-between flex-wrap gap-2">
            <div>
              <h3 class="h6 mb-1">${exp.title}</h3>
              <div class="text-muted small">${exp.company} — ${exp.location}</div>
            </div>
            <span class="badge text-bg-primary align-self-start">${exp.period}</span>
          </div>
          <ul class="mt-3 mb-0">${bullets}</ul>
          ${techLine}
        </div>
      </article>
    `);
  });
}

function renderEducation() {
  const root = $("#eduList");
  root.innerHTML = "";

  CV_DATA.education.forEach((ed) => {
    root.insertAdjacentHTML("beforeend", `
      <div class="col-md-4">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body">
            <div class="text-muted small mb-1">${ed.year}</div>
            <div class="fw-semibold">${ed.title}</div>
            <div class="text-muted small mt-2">${ed.place}</div>
          </div>
        </div>
      </div>
    `);
  });
}

function renderSkills(filterText = "") {
  const root = $("#skillsGrid");
  root.innerHTML = "";

  const q = filterText.trim().toLowerCase();

  CV_DATA.skills.forEach((block) => {
    const items = block.items.filter(it => it.toLowerCase().includes(q));
    if (q && items.length === 0) return;

    root.insertAdjacentHTML("beforeend", `
      <div class="col-md-6 col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body">
            <div class="fw-semibold mb-2">${block.category}</div>
            <div class="d-flex flex-wrap gap-2">
              ${items.map(it => `<span class="badge text-bg-secondary">${it}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `);
  });
}

function renderLanguages() {
  const ul = $("#langList");
  ul.innerHTML = CV_DATA.languages.map(l => `<li>${l}</li>`).join("");
}

function initSkillSearch() {
  const input = $("#skillSearch");
  input.addEventListener("input", () => renderSkills(input.value));
}

function initTheme() {
  const key = "cv_theme";
  const btn = $("#btnTheme");

  const apply = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem(key, mode);
    btn.innerHTML = mode === "dark"
      ? `<i class="bi bi-sun"></i>`
      : `<i class="bi bi-moon-stars"></i>`;
  };

  const saved = localStorage.getItem(key) || "light";
  apply(saved);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    apply(current === "dark" ? "light" : "dark");
  });
}

function initPrint() {
  $("#btnPrint").addEventListener("click", () => window.print());
}

function initContactForm() {
  const form = $("#contactForm");
  const alertBox = $("#formAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Bootstrap validation
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const payload = {
      name: $("#cName").value.trim(),
      email: $("#cEmail").value.trim(),
      message: $("#cMessage").value.trim(),
      date: new Date().toISOString()
    };

    // Démo JS: sauvegarde locale
    const key = "cv_messages";
    const list = JSON.parse(localStorage.getItem(key) || "[]");
    list.push(payload);
    localStorage.setItem(key, JSON.stringify(list));

    form.reset();
    form.classList.remove("was-validated");

    alertBox.classList.remove("d-none");
    setTimeout(() => alertBox.classList.add("d-none"), 2500);
  });
}
function initRevealOnScroll() {
  // Ajoute la classe "reveal" aux sections + cartes
  document.querySelectorAll(".section-card, .card").forEach((el) => {
    el.classList.add("reveal");
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function initLiftCards() {
  // Ajoute l’effet “lift” sur hover aux cartes
  document.querySelectorAll(".card").forEach((card) => card.classList.add("lift"));
}

function initNavbarGlass() {
  const nav = document.querySelector(".navbar");
  const onScroll = () => {
    if (window.scrollY > 10) nav.classList.add("nav-glass");
    else nav.classList.remove("nav-glass");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
function initCardTilt() {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rx = -(y - rect.height / 2) / 18;
      const ry = (x - rect.width / 2) / 18;

      card.style.transform =
        `translateY(-10px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
function initBackToTop() {
  const btn = document.getElementById("backToTop");

  // Afficher / cacher selon le scroll
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  // Scroll fluide vers le haut
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function main() {
  initCardTilt();
  initLiftCards();
  initNavbarGlass();
  initRevealOnScroll();
  renderHeader();
  renderObjective();
  renderExperiences();
  renderEducation();
  renderSkills();
  renderLanguages();
  initBackToTop();

  initSkillSearch();
  initTheme();
  initPrint();
  initContactForm();

  setText("#year", String(new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", main);
