// ==========================================
// 1. PENGATURAN PIN RAHASIA
// ==========================================
const CORRECT_PIN = "1210"; // Ubah tanggal rahasia (Format: DDMM)

// ==========================================
// 2. LOGIK BUKA KADO UTAMA (SPLASH SCREEN)
// ==========================================
function openMainContent() {
  const overlay = document.getElementById("giftOverlay");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playBtn");

  // Sembunyikan Overlay Kado
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    
    // Tampilkan Konten Utama
    mainContent.classList.add("show");

    // Efek Kembang Api / Confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    // Otomatis Putar Musik Latar
    music.play().then(() => {
      playBtn.innerText = "⏸";
    }).catch(err => {
      console.log("Autoplay diblokir oleh browser:", err);
      playBtn.innerText = "▶";
    });

  }, 500);
}

// ==========================================
// 3. LOGIK KUIS INTERAKTIF
// ==========================================
function checkAnswer(isCorrect) {
  const feedback = document.getElementById("quizFeedback");
  if (isCorrect) {
    feedback.innerText = "Pintar! 100 buat kamu! 🥰";
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
  } else {
    feedback.innerText = "Tetot! Salah 😜 Coba ingat-ingat lagi!";
  }
}

// ==========================================
// 4. LOGIK KEYPAD & CEK PIN
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
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  } else {
    alert("PIN salah nih 😜 Coba ingat-ingat lagi tanggal penting kita!");
    clearPin();
  }
}

// ==========================================
// 5. LOGIK PEMUTAR MUSIK
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
