/* =========================================================
   FLORDEPIL — script.js
   Configuración rápida al inicio del archivo.
   ========================================================= */

// ---- CONFIGURACIÓN: EDITAR ACÁ ----
const WHATSAPP_NUMBER = "5492646214575"; // Número de FLORDEPIL con código de país (54) + 9 + código de área + número

const WHATSAPP_MESSAGES = {
  turno:      "Hola! Quiero reservar un turno en FLORDEPIL 🌸",
  depilacion: "Hola! Quiero consultar por el tratamiento de Depilación definitiva 🌸",
  limpieza:   "Hola! Quiero consultar por el tratamiento de Limpieza facial 🌸",
  facial:     "Hola! Quiero consultar por Tratamientos faciales 🌸",
  corporal:   "Hola! Quiero consultar por Tratamientos corporales 🌸",
  alquiler:   "Hola! Quiero consultar por el alquiler de máquina de depilación definitiva 🌸",
  otros:      "Hola! Quiero consultar por otros servicios de FLORDEPIL 🌸"
};
// ---- FIN CONFIGURACIÓN ----

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- WhatsApp links ---------- */
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const key = link.dataset.msg || "turno";
    const message = WHATSAPP_MESSAGES[key] || WHATSAPP_MESSAGES.turno;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Smooth scroll for internal anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Sticky mobile CTA: hide near footer / final CTA ---------- */
  const stickyCta = document.querySelector(".sticky-cta");
  const finalCta = document.querySelector(".final-cta");

  if (stickyCta && finalCta && "IntersectionObserver" in window) {
    const stickyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          stickyCta.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    stickyObserver.observe(finalCta);
  }

  /* ---------- Navbar background on scroll (subtle shadow) ---------- */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.style.boxShadow = window.scrollY > 12
        ? "0 6px 20px rgba(47, 91, 78, 0.08)"
        : "none";
    }, { passive: true });
  }

});
