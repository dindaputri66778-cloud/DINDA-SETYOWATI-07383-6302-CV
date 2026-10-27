
/* ==========================================
   1. WEBSITE BERHASIL DIMUAT
========================================== */

console.log("Website CV berhasil dimuat!");

/* ==========================================
   2. TOMBOL KLIK SAYA
========================================== */

const pesan = document.querySelector("#pesan-interaktif");
const tombolInteraktif = document.querySelector("#tombol-interaktif");

if (pesan && tombolInteraktif) {
    tombolInteraktif.addEventListener("click", function () {
        pesan.textContent =
            "Halo! Terima kasih sudah mengunjungi profil saya.";

        tombolInteraktif.textContent = "Terima Kasih!";
    });
} else {
    console.warn(
        "Elemen pesan atau tombol interaktif tidak ditemukan."
    );
}

/* ==========================================
   3. MODE GELAP DAN MODE TERANG
========================================== */

const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const modeGelapAktif =
            document.body.classList.contains("dark-mode");

        if (modeGelapAktif) {
            tombolTema.textContent = "Mode Terang";
            tombolTema.setAttribute("aria-pressed", "true");
        } else {
            tombolTema.textContent = "Mode Gelap";
            tombolTema.setAttribute("aria-pressed", "false");
        }
    });
} else {
    console.warn("Tombol tema tidak ditemukan.");
}

/* ==========================================
   4. TAHUN OTOMATIS DI FOOTER
========================================== */

const tahunSekarang = document.querySelector("#tahun-sekarang");

if (tahunSekarang) {
    tahunSekarang.textContent = new Date().getFullYear();
}

/* ==========================================
   5. NAVIGASI AKTIF
========================================== */

const semuaLinkNavigasi = document.querySelectorAll(".nav-menu a");

semuaLinkNavigasi.forEach(function (link) {
    link.addEventListener("click", function () {
        semuaLinkNavigasi.forEach(function (item) {
            item.removeAttribute("aria-current");
        });

        link.setAttribute("aria-current", "location");
    });
});

/* ==========================================
   6. ANIMASI SAAT SCROLL
========================================== */

const bagianWebsite = document.querySelectorAll(
    ".section-heading, .about-card, .timeline-item, " +
    ".skill-card, .project-card, .contact-card"
);

bagianWebsite.forEach(function (elemen) {
    elemen.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const pengamat = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    bagianWebsite.forEach(function (elemen) {
        pengamat.observe(elemen);
    });
} else {
    bagianWebsite.forEach(function (elemen) {
        elemen.classList.add("visible");
    });
}

/* ==========================================
   7. TOMBOL KEMBALI KE ATAS
========================================== */

const tombolKeAtas = document.createElement("button");

tombolKeAtas.type = "button";
tombolKeAtas.id = "tombol-ke-atas";
tombolKeAtas.textContent = "↑";
tombolKeAtas.setAttribute("aria-label", "Kembali ke atas");

document.body.appendChild(tombolKeAtas);

function perbaruiTombolKeAtas() {
    if (window.scrollY > 350) {
        tombolKeAtas.classList.add("tampil");
    } else {
        tombolKeAtas.classList.remove("tampil");
    }
}

window.addEventListener("scroll", perbaruiTombolKeAtas);

perbaruiTombolKeAtas();

tombolKeAtas.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ==========================================
   8. INTERAKSI KARTU
========================================== */

const semuaKartu = document.querySelectorAll(
    ".skill-card, .project-card"
);

semuaKartu.forEach(function (kartu) {
    kartu.addEventListener("mouseenter", function () {
        kartu.classList.add("card-hover");
    });

    kartu.addEventListener("mouseleave", function () {
        kartu.classList.remove("card-hover");
    });
});

/* ==========================================
   9. INTERAKSI EMAIL
========================================== */

const tautanEmail = document.querySelector(
    '.contact-item a[href^="mailto:"]'
);

if (tautanEmail) {
    tautanEmail.addEventListener("click", function () {
        console.log("Membuka tautan email...");
    });
}

/* ==========================================
   10. PESAN SELESAI
========================================== */

console.log("Semua fitur JavaScript siap digunakan!");
