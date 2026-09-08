// ==========================================
// 1. PENGATURAN KUNCI RAHASIA & TOTAL FOTO
// ==========================================
const CORRECT_PIN = "37"; 

// Tentukan berapa jumlah foto yang kamu punya di GitHub (1.jpg, 2.jpg, dst)
// Jika nanti upload foto ke-3 (3.jpg), ubah angka ini menjadi 3
const totalPhotos = 5; 

// ==========================================
// 2. LOGIK BUKA KADO UTAMA (SPLASH SCREEN)
// ==========================================
function openMainContent() {
  const overlay = document.getElementById("giftOverlay");
  const mainContent = document.getElementById("mainContent");

  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    mainContent.classList.add("show");

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
  }, 500);
}

// ==========================================
// 3. LOGIK KEYPAD & CEK PIN
// ==========================================
function pressPin(val) {
  const input = document.getElementById("pinInput");
  const errorMsg = document.getElementById("errorMsg");
  
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
    
    // Jalankan fungsi untuk memuat galeri foto
    loadGallery();

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  } else {
    errorMsg.innerText = "Hitungannya belum tepat nih 😜 Coba hitung lagi ya!";
    errorMsg.style.display = "block";
    input.classList.add("shake");
    
    setTimeout(() => {
      clearPin();
    }, 600);
  }
}

// ==========================================
// 4. LOGIK RENDER GALERI FOTO (LOOPING)
// ==========================================
function loadGallery() {
  const galleryContainer = document.getElementById("photoGallery");
  galleryContainer.innerHTML = ""; // Bersihkan kontainer

  // Looping berdasarkan totalPhotos
  for (let i = 1; i <= totalPhotos; i++) {
    const img = document.createElement("img");
    img.src = `${i}.jpg`;
    img.alt = `Kenangan ${i}`;
    img.className = "gallery-img";
    
    // Penanganan jika file foto tidak ditemukan di GitHub
    img.onerror = function() {
      this.style.display = "none";
    };

    galleryContainer.appendChild(img);
  }
}
