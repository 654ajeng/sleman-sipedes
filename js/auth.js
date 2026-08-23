/* ============================================================
   AUTHENTICATION - SIPEDES (3 ROLE)
   ============================================================ */

// Data users dari users.json
var USERS = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    nama: "Administrator Sistem",
    role: "admin",
  },
  {
    id: 2,
    username: "perangkat",
    password: "perangkat123",
    nama: "Perangkat Desa",
    role: "perangkat",
  },
  {
    id: 3,
    username: "kades",
    password: "kades123",
    nama: "Kepala Desa Sleman",
    role: "kades",
  },
];

/**
 * Fungsi login - memeriksa username dan password
 * @param {string} username - Username pengguna
 * @param {string} password - Password pengguna
 * @returns {object} - Hasil login { success, user, message }
 */
function login(username, password) {
  var user = USERS.find(function (u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    localStorage.setItem("sipedes_user", JSON.stringify(user));
    return { success: true, user: user };
  }
  return { success: false, message: "Username atau password salah!" };
}

/**
 * Mengecek apakah user sudah login
 * @returns {object|null} - Data user jika login, null jika tidak
 */
function isLoggedIn() {
  var data = localStorage.getItem("sipedes_user");
  return data ? JSON.parse(data) : null;
}

/**
 * Fungsi logout - menghapus session
 */
function logout() {
  localStorage.removeItem("sipedes_user");
  sessionStorage.clear();
  window.location.href = "login.html";
}

/**
 * Redirect berdasarkan role pengguna
 * @param {string} role - Role pengguna (admin/perangkat/kades)
 */
function redirectByRole(role) {
  var pages = {
    admin: "dashboard-admin.html",
    perangkat: "dashboard-perangkat.html",
    kades: "dashboard-kades.html",
  };
  window.location.href = pages[role] || "index.html";
}

/**
 * Mendapatkan nama user yang sedang login
 * @returns {string} - Nama user
 */
function getCurrentUserName() {
  var user = isLoggedIn();
  return user ? user.nama : "Pengunjung";
}

/**
 * Mendapatkan role user yang sedang login
 * @returns {string} - Role user
 */
function getCurrentUserRole() {
  var user = isLoggedIn();
  return user ? user.role : null;
}

// Ekspor fungsi ke global
window.login = login;
window.isLoggedIn = isLoggedIn;
window.logout = logout;
window.redirectByRole = redirectByRole;
window.getCurrentUserName = getCurrentUserName;
window.getCurrentUserRole = getCurrentUserRole;
window.USERS = USERS;
