// ==========================================
// 1. PENGATURAN TANGGAL & PIN
// ==========================================
// Sesuaikan tanggal ulang tahun (Format: YYYY-MM-DD)
const targetDate = new Date("2026-10-12T00:00:00").getTime(); 

// PIN rahasia untuk buka pesan (Format: DDMM)
const CORRECT_PIN = "1210"; 


// ==========================================
// 2. LOGIK HIKUNG MUNDUR (COUNTDOWN)
// ==========================================
function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
  }
}

// Jalankan countdown tiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown();


// ==========================================
// 3. LOGIK CEK PIN PESAN RAHASIA
// ==========================================
function checkPin() {
  const input = document.getElementById("pinInput").value;
  
  if (input === CORRECT_PIN) {
    document.getElementById("pin-form").style.display = "none";
    document.getElementById("secretContent").style.display = "block";
  } else {
    alert("PIN salah nih 😜 Coba ingat-ingat lagi tanggal penting kita!");
  }
}


// ==========================================
// 4. LOGIK PEMUTAR MUSIK
// ==========================================
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

function toggleMusic() {
  if (music.paused) {
    music.play();
    playBtn.innerText = "⏸";
  } else {
    music.pause();
    playBtn.innerText = "▶";
  }
}
