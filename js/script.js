const translations = {
    en: {
        heroKicker: "Architecture & Interior Design",
        heroTitle: "Welcome to my Architecture Portfolio",
        heroSub: "Explore my works and concepts",
        btnSeeProjects: "See Projects",
        btnContact: "Contact",
        aboutTag: "About",
        aboutTitle: "About Me",
        aboutText: `
            I am Andréina Lopes, an architect graduated from Universidade Nove de Julho (Brazil) and currently pursuing an MBA in Project Management at USP/Esalq (Brazil). I am passionate about transforming ideas into functional and inspiring spaces, combining creativity, technical precision, and sensitivity in every detail.
            <p>During my experience at Arcos Dorados (McDonald’s), I worked on store layout development, ensuring functionality, brand identity, and compliance with design guidelines. I also collaborated in project management, schedule monitoring, and site visits to oversee renovations, gaining practical experience in coordination and execution.</p>
            <p>My academic background provided me with a solid foundation in architectural design, urban planning, environmental comfort, and 3D modeling, with proficiency in tools such as AutoCAD, Revit, SketchUp, and Lumion.</p>
        `,
        projectsTag: "Portfolio",
        projectsTitle: "Projects",
        projectsSubtitle: "A selection of architectural concepts and developed projects.",
        contactTag: "Contact",
        contactTitle: "Contact",
        contactText: "Send me a message or connect via social networks",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        backToProjects: "Back to projects",
        year: "Year:",
        location: "Location:",
        area: "Built area:",
        software: "Software:",
        galleryTitle: "Gallery",
        gallerySubtitle: "Click an image to enlarge.",
        detailsTitle: "Project details",
        searchPlaceholder: "Search project...",
        emptyState: "No projects found.",
        filters: {
            all: "All",
            academic: "Academic",
            residential: "Residential",
            commercial: "Commercial"
        }
    },
    pt: {
        heroKicker: "Arquitetura & Interiores",
        heroTitle: "Bem-vindo ao meu Portfólio de Arquitetura",
        heroSub: "Explore meus trabalhos e conceitos",
        btnSeeProjects: "Ver Projetos",
        btnContact: "Contato",
        aboutTag: "Sobre",
        aboutTitle: "Sobre Mim",
        aboutText: `
            Sou Andréina Lopes, arquiteta formada pela Universidade Nove de Julho (Brasil) e atualmente cursando MBA em Gestão de Projetos na USP/Esalq (Brasil). Sou apaixonada por transformar ideias em espaços funcionais e inspiradores, combinando criatividade, precisão técnica e sensibilidade em cada detalhe.
            <p>Durante minha experiência na Arcos Dorados (McDonald’s), atuei no desenvolvimento de layouts de lojas, garantindo funcionalidade, identidade da marca e conformidade com diretrizes de design. Também colaborei na gestão de projetos, acompanhamento de cronogramas e visitas técnicas para obras e reformas.</p>
            <p>Minha formação acadêmica me proporcionou uma base sólida em projeto arquitetônico, urbanismo, conforto ambiental e modelagem 3D, com domínio de ferramentas como AutoCAD, Revit, SketchUp e Lumion.</p>
        `,
        projectsTag: "Portfólio",
        projectsTitle: "Projetos",
        projectsSubtitle: "Uma seleção de conceitos arquitetônicos e projetos desenvolvidos.",
        contactTag: "Contato",
        contactTitle: "Contato",
        contactText: "Envie-me uma mensagem ou conecte-se pelas redes sociais",
        navAbout: "Sobre",
        navProjects: "Projetos",
        navContact: "Contato",
        backToProjects: "Voltar para projetos",
        year: "Ano:",
        location: "Local:",
        area: "Área construída:",
        software: "Softwares:",
        galleryTitle: "Galeria",
        gallerySubtitle: "Clique em uma imagem para ampliar.",
        detailsTitle: "Detalhes do projeto",
        searchPlaceholder: "Buscar projeto...",
        emptyState: "Nenhum projeto encontrado.",
        filters: {
            all: "Todos",
            academic: "Acadêmico",
            residential: "Residencial",
            commercial: "Comercial"
        }
    },
    es: {
        heroKicker: "Arquitectura & Interiores",
        heroTitle: "Bienvenido a mi Portafolio de Arquitectura",
        heroSub: "Explora mis trabajos y conceptos",
        btnSeeProjects: "Ver Proyectos",
        btnContact: "Contacto",
        aboutTag: "Sobre mí",
        aboutTitle: "Sobre Mí",
        aboutText: `
            Soy Andréina Lopes, arquitecta graduada por la Universidade Nove de Julho (Brasil) y actualmente cursando un MBA en Gestión de Proyectos en USP/Esalq (Brasil). Me apasiona transformar ideas en espacios funcionales e inspiradores, combinando creatividad, precisión técnica y sensibilidad en cada detalle.
            <p>Durante mi experiencia en Arcos Dorados (McDonald’s), trabajé en el desarrollo de layouts de tiendas, garantizando funcionalidad, identidad de marca y cumplimiento de lineamientos de diseño. También colaboré en la gestión de proyectos, seguimiento de cronogramas y visitas técnicas de obra.</p>
            <p>Mi formación académica me proporcionó una base sólida en diseño arquitectónico, urbanismo, confort ambiental y modelado 3D, con dominio de herramientas como AutoCAD, Revit, SketchUp y Lumion.</p>
        `,
        projectsTag: "Portafolio",
        projectsTitle: "Proyectos",
        projectsSubtitle: "Una selección de conceptos arquitectónicos y proyectos desarrollados.",
        contactTag: "Contacto",
        contactTitle: "Contacto",
        contactText: "Envíame un mensaje o conecta conmigo por redes sociales",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navContact: "Contacto",
        backToProjects: "Volver a proyectos",
        year: "Año:",
        location: "Ubicación:",
        area: "Área construida:",
        software: "Software:",
        galleryTitle: "Galería",
        gallerySubtitle: "Haz clic en una imagen para ampliarla.",
        detailsTitle: "Detalles del proyecto",
        searchPlaceholder: "Buscar proyecto...",
        emptyState: "No se encontraron proyectos.",
        filters: {
            all: "Todos",
            academic: "Académico",
            residential: "Residencial",
            commercial: "Comercial"
        }
    }
};

let currentFilter = "all";
let currentSearch = "";
let visibleProjects = 6;
const projectsPerClick = 6;

function safeSet(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function safeSetHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function getSavedLanguage() {
    try {
        return localStorage.getItem("siteLang") || "en";
    } catch {
        return "en";
    }
}

function setSavedLanguage(lang) {
    try {
        localStorage.setItem("siteLang", lang);
    } catch {}
}

function getTextByLang(item, lang) {
    return item.translations[lang] || item.translations.pt || item.translations.en;
}

function getFilteredProjects(lang) {
    return projectsData.filter(project => {
        const text = getTextByLang(project, lang);
        const matchesFilter = currentFilter === "all" || project.category === currentFilter;
        const matchesSearch =
            text.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            text.shortDesc.toLowerCase().includes(currentSearch.toLowerCase());

        return matchesFilter && matchesSearch;
    });
}

function renderProjects(lang) {
    const grid = document.getElementById("project-grid");
    const emptyState = document.getElementById("empty-state");
    const loadMoreBtn = document.getElementById("load-more-projects");

    if (!grid) return;

    const filteredProjects = getFilteredProjects(lang);
    const visibleItems = filteredProjects.slice(0, visibleProjects);

    if (!filteredProjects.length) {
        grid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        if (loadMoreBtn) loadMoreBtn.style.display = "none";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    grid.innerHTML = visibleItems.map((project, index) => {
        const text = getTextByLang(project, lang);

        return `
            <article class="card reveal-card" style="animation-delay: ${index * 0.08}s;">
                <a href="project.html?id=${project.id}">
                    <div class="card-image-wrap">
                        <img src="${project.thumb}" alt="${text.title}">
                        <div class="card-overlay">
                            <span class="card-view">View project</span>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="card-top-meta">
                            <span class="badge">${text.categoryLabel}</span>
                            <span class="badge">${project.year}</span>
                        </div>

                        <h3>${text.title}</h3>
                        <p>${text.shortDesc}</p>

                        <div class="card-bottom-meta">
                            <span>${project.software}</span>
                        </div>
                    </div>
                </a>
            </article>
        `;
    }).join("");

    if (loadMoreBtn) {
        if (visibleProjects >= filteredProjects.length) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "inline-flex";
        }
    }
}

function getProjectIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function renderProjectPage(lang) {
    const projectId = getProjectIdFromUrl();
    if (!projectId) return;

    const project = projectsData.find(item => item.id === projectId);
    const pageHero = document.querySelector(".project-hero");

    if (!project) {
        const layout = document.querySelector(".project-layout");
        if (layout) {
            layout.innerHTML = `
                <div class="project-not-found">
                    <h1>Projeto não encontrado</h1>
                    <p>O projeto que você tentou abrir não existe.</p>
                    <a href="index.html#projects" class="btn-hero">Voltar</a>
                </div>
            `;
        }
        return;
    }

    const text = getTextByLang(project, lang);

    document.title = `${text.title} | Andreina's Portfolio`;

    if (pageHero && project.cover) {
        pageHero.style.backgroundImage = `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url("${project.cover}")
        `;
    }

    safeSet("project-title", text.title);
    safeSet("project-desc", text.desc);
    safeSet("project-category", text.categoryLabel);

    safeSet("year-value", project.year);
    safeSet("location-value", project.location);
    safeSet("year-value-side", project.year);
    safeSet("location-value-side", project.location);
    safeSet("area-value", project.area);
    safeSet("software-value", project.software);

    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.innerHTML = project.images.map((img, index) => `
            <div class="img-wrapper reveal-card" style="animation-delay: ${index * 0.07}s;">
                <img src="${img}" alt="${text.title} - imagem ${index + 1}">
                <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
            </div>
        `).join("");
    }

    setupLightbox();
}

function applyGlobalTexts(lang) {
    const t = translations[lang] || translations.pt;

    safeSet("hero-kicker", t.heroKicker);
    safeSet("hero-title", t.heroTitle);
    safeSet("hero-sub", t.heroSub);
    safeSet("btn-see-projects", t.btnSeeProjects);
    safeSet("btn-contact", t.btnContact);

    safeSet("about-tag", t.aboutTag);
    safeSet("about-title", t.aboutTitle);
    safeSetHTML("about-text", t.aboutText);

    safeSet("projects-tag", t.projectsTag);
    safeSet("projects-title", t.projectsTitle);
    safeSet("projects-subtitle", t.projectsSubtitle);

    safeSet("contact-tag", t.contactTag);
    safeSet("contact-title", t.contactTitle);
    safeSet("contact-text", t.contactText);

    safeSet("nav-about", t.navAbout);
    safeSet("nav-projects", t.navProjects);
    safeSet("nav-contact", t.navContact);
    safeSet("back-to-projects", t.backToProjects);

    safeSet("year-label", t.year);
    safeSet("location-label", t.location);
    safeSet("area-label", t.area);
    safeSet("software-label", t.software);
    safeSet("gallery-title", t.galleryTitle);
    safeSet("gallery-subtitle", t.gallerySubtitle);
    safeSet("details-title", t.detailsTitle);
    safeSet("empty-state", t.emptyState);

    const searchInput = document.getElementById("project-search");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    safeSet("filter-all", t.filters.all);
    safeSet("filter-academic", t.filters.academic);
    safeSet("filter-residential", t.filters.residential);
    safeSet("filter-commercial", t.filters.commercial);

    document.documentElement.lang = lang;
}

function setLanguage(lang) {
    const selectedLang = translations[lang] ? lang : "pt";
    setSavedLanguage(selectedLang);
    applyGlobalTexts(selectedLang);
    renderProjects(selectedLang);
    renderProjectPage(selectedLang);
}

function setupLanguageSwitcher() {
    const buttons = document.querySelectorAll(".lang-switch img");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
        });
    });
}

function setupDarkMode() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const icon = darkModeToggle ? darkModeToggle.querySelector("i") : null;

    try {
        const savedMode = localStorage.getItem("darkMode");

        if (savedMode === "disabled") {
            body.classList.remove("dark-mode");
            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        } else {
            body.classList.add("dark-mode");
            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }
        }
    } catch {
        body.classList.add("dark-mode");
    }

    if (!darkModeToggle) return;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        if (icon) {
            icon.classList.toggle("fa-moon", !isDark);
            icon.classList.toggle("fa-sun", isDark);
        }

        try {
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
        } catch {}
    });
}

function setupMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentFilter = button.dataset.filter;
            visibleProjects = 6;

            const lang = getSavedLanguage();
            renderProjects(lang);
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById("project-search");
    if (!searchInput) return;

    searchInput.addEventListener("input", (event) => {
        currentSearch = event.target.value.trim();
        visibleProjects = 6;

        const lang = getSavedLanguage();
        renderProjects(lang);
    });
}

function setupLoadMore() {
    const loadMoreBtn = document.getElementById("load-more-projects");
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", () => {
        visibleProjects += projectsPerClick;
        const lang = getSavedLanguage();
        renderProjects(lang);
    });
}

function setupRevealSections() {
    const elements = document.querySelectorAll(".section-reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}


function setupLightbox() {
    const wrappers = document.querySelectorAll(".img-wrapper");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const counter = document.getElementById("lightbox-counter");
    const closeBtn = document.querySelector(".lightbox .close");
    const prevBtn = document.querySelector(".lightbox .prev");
    const nextBtn = document.querySelector(".lightbox .next");

    if (!wrappers.length || !lightbox || !lightboxImg || !closeBtn || !prevBtn || !nextBtn || !counter) return;

    const images = Array.from(wrappers).map(wrapper => wrapper.querySelector("img").src);
    let currentIndex = 0;

    function updateCounter() {
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    function updateNavigation() {
        prevBtn.classList.toggle("disabled", currentIndex === 0);
        nextBtn.classList.toggle("disabled", currentIndex === images.length - 1);
    }

    function showImage(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        updateCounter();
        updateNavigation();
        lightbox.style.display = "block";
    }

    wrappers.forEach((wrapper, index) => {
        wrapper.addEventListener("click", () => showImage(index));
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            lightboxImg.src = images[currentIndex];
            updateCounter();
            updateNavigation();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            lightboxImg.src = images[currentIndex];
            updateCounter();
            updateNavigation();
        }
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupLanguageSwitcher();
    setupDarkMode();
    setupMobileMenu();
    setupFilters();
    setupSearch();
    setupLoadMore();
    setupRevealSections();

    const savedLang = getSavedLanguage();
    setLanguage(savedLang);
});