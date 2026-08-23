/* ============================================================
   DASHBOARD - SIPEDES
   ============================================================ */

var Dashboard = {
  /**
   * Load dashboard utama
   */
  load: function () {
    // Cek login
    var user = isLoggedIn();
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    // Tampilkan user
    var avatarEl = document.getElementById("userAvatar");
    var nameEl = document.getElementById("userName");

    if (avatarEl) {
      avatarEl.textContent = user.nama.charAt(0).toUpperCase();
    }
    if (nameEl) {
      nameEl.textContent = user.nama;
    }

    // Load data
    this.loadStats();
    this.loadChart();
    this.loadActivities();
  },

  /**
   * Load statistik
   */
  loadStats: function () {
    var container = document.getElementById("statsGrid");
    if (!container) return;

    // Data dari skripsi
    var stats = [
      {
        icon: "fa-users",
        color: "#2e7d32",
        bg: "#e8f5e9",
        number: "4.975",
        label: "Penduduk",
      },
      {
        icon: "fa-seedling",
        color: "#0d47a1",
        bg: "#e3f2fd",
        number: "505,5",
        label: "Lahan (Ha)",
      },
      {
        icon: "fa-store",
        color: "#e65100",
        bg: "#fff3e0",
        number: "8",
        label: "Potensi",
      },
      {
        icon: "fa-bullseye",
        color: "#6a1b9a",
        bg: "#f3e5f5",
        number: "6",
        label: "Strategi",
      },
    ];

    var html = "";
    for (var i = 0; i < stats.length; i++) {
      var s = stats[i];
      html +=
        '<div class="stat-card">' +
        '<div class="stat-icon" style="background:' +
        s.bg +
        ";color:" +
        s.color +
        ';">' +
        '<i class="fas ' +
        s.icon +
        '"></i>' +
        "</div>" +
        '<div class="stat-number">' +
        s.number +
        "</div>" +
        '<div class="stat-label">' +
        s.label +
        "</div>" +
        "</div>";
    }
    container.innerHTML = html;
  },

  /**
   * Load chart APBDes
   */
  loadChart: function () {
    var canvas = document.getElementById("apbdesChart");
    if (!canvas || typeof Chart === "undefined") return;

    // Data APBDes dari skripsi
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["2024", "2025"],
        datasets: [
          {
            label: "Pendapatan (Rp Juta)",
            data: [2155, 2124],
            backgroundColor: "rgba(15, 76, 58, 0.8)",
            borderColor: "#0f4c3a",
            borderWidth: 2,
            borderRadius: 4,
          },
          {
            label: "Belanja (Rp Juta)",
            data: [2194, 2187],
            backgroundColor: "rgba(201, 149, 107, 0.8)",
            borderColor: "#c9956b",
            borderWidth: 2,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              font: { family: "Inter", size: 10 },
              padding: 12,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (v) {
                return "Rp" + v.toLocaleString();
              },
              font: { family: "Inter", size: 9 },
            },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: "Inter", size: 11, weight: "600" } },
          },
        },
      },
    });
  },

  /**
   * Load aktivitas
   */
  loadActivities: function () {
    var container = document.getElementById("activityList");
    if (!container) return;

    var activities = [
      {
        icon: "fa-check",
        color: "green",
        text: "Analisis SWOT <strong>diperbarui</strong>",
        time: "5 menit lalu",
      },
      {
        icon: "fa-edit",
        color: "blue",
        text: "APBDes 2025 <strong>diperbaharui</strong>",
        time: "1 jam lalu",
      },
      {
        icon: "fa-plus",
        color: "green",
        text: "Faktor SWOT <strong>ditambahkan</strong>",
        time: "3 jam lalu",
      },
      {
        icon: "fa-file-export",
        color: "orange",
        text: "Laporan <strong>diekspor</strong>",
        time: "5 jam lalu",
      },
      {
        icon: "fa-user",
        color: "blue",
        text: "Admin <strong>login</strong>",
        time: "8 jam lalu",
      },
    ];

    var html = "";
    for (var i = 0; i < activities.length; i++) {
      var a = activities[i];
      html +=
        '<div class="activity-item">' +
        '<div class="icon ' +
        a.color +
        '">' +
        '<i class="fas ' +
        a.icon +
        '"></i>' +
        "</div>" +
        '<div class="content">' +
        '<div class="text">' +
        a.text +
        "</div>" +
        '<div class="time">' +
        a.time +
        "</div>" +
        "</div>" +
        "</div>";
    }
    container.innerHTML = html;
  },
};

// Ekspor ke global
window.Dashboard = Dashboard;

// Auto-load jika ada element statsGrid
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("statsGrid")) {
    Dashboard.load();
  }
});
