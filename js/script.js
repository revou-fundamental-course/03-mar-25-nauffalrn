const jobTitles = [
  "Web Developer",
  "Backend Developer",
  "Full Stack Developer",
];
let index = 0;

// Fungsi untuk mengetik teks pekerjaan secara animasi
function typeJobTitle(title, element) {
  let i = 0;
  element.classList.add("typing");
  const interval = setInterval(() => {
    if (i < title.length) {
      element.textContent += title.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        eraseJobTitle(element);
      }, 1000);
    }
  }, 150);
}

// Fungsi untuk menghapus teks pekerjaan secara animasi
function eraseJobTitle(element) {
  let text = element.textContent;
  const interval = setInterval(() => {
    if (text.length > 0) {
      text = text.slice(0, -1);
      element.textContent = text;
    } else {
      clearInterval(interval);
      index = (index + 1) % jobTitles.length;
      setTimeout(() => {
        typeJobTitle(jobTitles[index], element);
      }, 500);
    }
  }, 100);
}

// Menjalankan animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const jobTitleElement = document.getElementById("job-title");
  typeJobTitle(jobTitles[index], jobTitleElement);
});

function toggleMenu() {
  const navbarNav = document.querySelector(".navbar-nav");
  navbarNav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu());
  }

  // JavaScript for welcoming speech
  const userName = prompt("Please enter your name:");
  document.getElementById("username").innerText = userName || "Guest";
});

document.getElementById("submit").addEventListener("click", function () {
  // Mengambil nilai dari input
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();
  var gender = document.getElementById("gender").value.trim();
  var birthDate = document.getElementById("birthDate").value.trim();
  var genderValue = gender ? gender : "Tidak diisi";

  // Mendapatkan waktu saat ini
  let today = new Date();
  let dateTimeNow = today.toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // Validasi tanggal lahir
  let birthDateFormatted = birthDate
    ? new Date(birthDate).toDateString()
    : "Tidak diisi";

  // Menampilkan hasil di bagian result
  document.getElementById("displayName").innerText =
    "Nama: " + (name || "Tidak diisi");
  document.getElementById("displayEmail").innerText =
    "Email: " + (email || "Tidak diisi");
  document.getElementById("displayPhone").innerText =
    "Nomor Telepon: " + (phone || "Tidak diisi");
  document.getElementById("displayMessage").innerText =
    "Pesan: " + (message || "Tidak diisi");
  document.getElementById("displayGender").innerText = "Gender: " + genderValue;
  document.getElementById("displayBirthDate").innerText =
    "Tanggal Lahir: " + birthDateFormatted;
  document.getElementById("displayDateTime").innerText =
    "Waktu Saat Ini: " + dateTimeNow;

  // Menampilkan div result
  document.getElementById("result").style.display = "block";
});
