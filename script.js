// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .info-card, .timeline-item, .contact-section"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ffffff";
        }

    });

});


// ===============================
// MOUSE GLOW
// ===============================

const mouseGlow = document.createElement("div");

mouseGlow.style.position = "fixed";
mouseGlow.style.width = "180px";
mouseGlow.style.height = "180px";
mouseGlow.style.borderRadius = "50%";
mouseGlow.style.pointerEvents = "none";
mouseGlow.style.zIndex = "9999";
mouseGlow.style.background =
    "radial-gradient(circle, rgba(91,140,255,.08), transparent 65%)";
mouseGlow.style.transform = "translate(-50%, -50%)";
mouseGlow.style.left = "0";
mouseGlow.style.top = "0";

document.body.appendChild(mouseGlow);


document.addEventListener("mousemove", event => {

    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";

});


// ===============================
// SMOOTH INTERNAL LINKS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});