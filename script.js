// ==========================================
// 1. PENGATURAN JAWABAN KUNCI RAHASIA
// ==========================================
// Kunci Jawaban: Tanggal lahirku + tanggal lahirmu = 37
const CORRECT_PIN = "37"; 

// ==========================================
// 2. LOGIK BUKA KADO UTAMA (SPLASH SCREEN)
// ==========================================
function openMainContent() {
  const overlay = document.getElementById("giftOverlay");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playBtn");

  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    mainContent.classList.add("show");

    // Efek Confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    // Otomatis Putar Lagu Islami Romantis (Maher Zain)
    music.play().then(() => {
      playBtn.innerText = "⏸";
    }).catch(err => {
      console.log("Autoplay diblokir oleh browser:", err);
      playBtn.innerText = "▶";
    });

  }, 500);
}

// ==========================================
// 3. LOGIK KEYPAD & CEK PIN
// ==========================================
function pressPin(val) {
  const input = document.getElementById("pinInput");
  if (input.value.length < 4) {
    input.value += val;
  }
}

function clearPin() {
  document.getElementById("pinInput").value = "";
}

function checkPin() {
  const input = document.getElementById("pinInput").value;
  
  if (input === CORRECT_PIN) {
    document.getElementById("pin-form").style.display = "none";
    document.getElementById("secretContent").style.display = "block";
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  } else {
    alert("Hitungannya belum tepat nih 😜 Coba dijumlahkan lagi ya!");
    clearPin();
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
