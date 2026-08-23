/* ============================================================
   MAIN JAVASCRIPT - SIPEDES
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // ============================================================
  // PRELOADER
  // ============================================================
  var preloader = document.getElementById("preloader");
  if (preloader) {
    var hidePreloader = function () {
      setTimeout(function () {
        preloader.classList.add("hide");
      }, 600);
    };
    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader);
    }
  }

  // ============================================================
  // NAV TOGGLE (Desktop)
  // ============================================================
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    var navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navToggle) navToggle.classList.remove("active");
        if (navMenu) navMenu.classList.remove("open");
      });
    });
  }

  // ============================================================
  // NAV TOGGLE (Mobile)
  // ============================================================
  var navToggleMobile = document.getElementById("navToggle");
  var navMenuMobile = document.getElementById("navMenuMobile");

  if (navToggleMobile && navMenuMobile) {
    navToggleMobile.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      navMenuMobile.classList.toggle("open");
    });

    var mobileLinks = navMenuMobile.querySelectorAll("a");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navToggleMobile) navToggleMobile.classList.remove("active");
        if (navMenuMobile) navMenuMobile.classList.remove("open");
      });
    });
  }

  // ============================================================
  // NAVBAR SCROLL
  // ============================================================
  var header = document.getElementById("header");
  if (header) {
    var handleScroll = function () {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();
  }

  // ============================================================
  // NAV LINK ACTIVE
  // ============================================================
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(
    ".nav-link:not(.nav-dashboard):not(.nav-login)",
  );

  if (sections.length > 0 && navLinks.length > 0) {
    var handleNavActive = function () {
      var current = "";
      sections.forEach(function (section) {
        var top = section.offsetTop - 120;
        if (window.pageYOffset >= top) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleNavActive);
    // Check initial position
    handleNavActive();
  }

  // ============================================================
  // ANIMATED COUNTER
  // ============================================================
  var animateCounters = function () {
    var counters = document.querySelectorAll(".stat-number[data-count]");

    if (counters.length === 0) return;

    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute("data-count"), 10);
      if (isNaN(target)) return;

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var current = 0;
              var step = Math.max(1, Math.floor(target / 60));

              var interval = setInterval(function () {
                current += step;
                if (current >= target) {
                  counter.textContent = target.toLocaleString();
                  clearInterval(interval);
                } else {
                  counter.textContent = current.toLocaleString();
                }
              }, 30);

              observer.unobserve(counter);
            }
          });
        },
        { threshold: 0.5 },
      );

      observer.observe(counter);
    });
  };

  // Jalankan counter setelah halaman dimuat
  if (document.readyState === "complete") {
    setTimeout(animateCounters, 500);
  } else {
    window.addEventListener("load", function () {
      setTimeout(animateCounters, 500);
    });
  }

  // ============================================================
  // SMOOTH SCROLL
  // ============================================================
  var smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // ============================================================
  // SCROLL TO TOP
  // ============================================================
  var scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-top";
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollBtn);

  var handleScrollTop = function () {
    if (window.pageYOffset > 500) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  };
  window.addEventListener("scroll", handleScrollTop);
  handleScrollTop();

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ============================================================
  // CONSOLE WELCOME
  // ============================================================
  console.log(
    "%c SIPEDES ",
    "background:#0f4c3a;color:#fff;padding:12px 24px;font-size:20px;font-weight:700;border-radius:6px;",
  );
  console.log(
    "%c Sistem Informasi Potensi Desa - Desa Sleman ",
    "background:#f0e0c8;color:#0f4c3a;padding:8px 16px;border-radius:6px;",
  );
  console.log(
    "%c Kuadran I - Agresif (SO) ",
    "background:#2e7d32;color:#fff;padding:4px 12px;border-radius:4px;",
  );

  // ============================================================
  // CHECK LOGIN STATUS
  // ============================================================
  if (typeof isLoggedIn === "function") {
    var user = isLoggedIn();
    if (user) {
      console.log("✅ User logged in:", user.nama, "(" + user.role + ")");
    }
  } else {
    console.log(
      "ℹ️ Fungsi isLoggedIn belum tersedia (auth.js mungkin belum dimuat)",
    );
  }
});
