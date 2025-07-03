// === COUNTDOWN TIMER ===
const deadline = new Date("2025-07-22T23:59:00").getTime();
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    timerElement.innerHTML = "⚠️ Pengumpulan telah ditutup.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// === SMOOTH SCROLL TO SECTION ===
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

// === SLIDESHOW GALERI OTOMATIS ===
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let slide of slides) {
    slide.style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 4000); // Ganti slide tiap 4 detik
}
showSlides();

// === (OPSIONAL) NOTIFIKASI PENGINGAT ===
// Aktifkan hanya jika ingin notifikasi
// if ("Notification" in window && Notification.permission !== "granted") {
//   Notification.requestPermission();
// }

// function sendReminder() {
//   if (Notification.permission === "granted") {
//     new Notification("⏰ Deadline Tugas!", {
//       body: "Ingat, deadline tugas akhir adalah 22 Juli 2025 pukul 23.59 WIB.",
//       icon: "icon.png" // ganti sesuai asset ikon
//     });
//   }
// }

// // Kirim pengingat 1 menit setelah buka halaman
// setTimeout(sendReminder, 60000);
