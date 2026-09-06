// ==========================================
// 1. PENGATURAN JAWABAN KUNCI RAHASIA
// ==========================================
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

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

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
  const errorMsg = document.getElementById("errorMsg");
  
  // Sembunyikan pesan error saat mulai mengetik lagi
  errorMsg.style.display = "none";
  input.classList.remove("shake");

  if (input.value.length < 4) {
    input.value += val;
  }
}

function clearPin() {
  const input = document.getElementById("pinInput");
  const errorMsg = document.getElementById("errorMsg");
  
  input.value = "";
  errorMsg.style.display = "none";
  input.classList.remove("shake");
}

function checkPin() {
  const input = document.getElementById("pinInput");
  const errorMsg = document.getElementById("errorMsg");
  
  if (input.value === CORRECT_PIN) {
    document.getElementById("pin-form").style.display = "none";
    document.getElementById("secretContent").style.display = "block";
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  } else {
    // Tampilkan pesan error manis & efek getar pada input
    errorMsg.innerText = "Hitungannya belum tepat nih 😜 Coba hitung lagi ya!";
    errorMsg.style.display = "block";
    
    input.classList.add("shake");
    
    setTimeout(() => {
      clearPin();
    }, 600);
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
