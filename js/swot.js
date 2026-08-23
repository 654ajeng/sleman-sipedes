/* ============================================================
   SWOT ANALISIS - SIPEDES (LENGKAP DENGAN IFAS & EFAS)
   ============================================================ */

var SWOT = {
  colors: {
    kekuatan: {
      bg: "#e8f5e9",
      border: "#2e7d32",
      text: "#1b5e20",
      icon: "#2e7d32",
    },
    kelemahan: {
      bg: "#ffebee",
      border: "#c62828",
      text: "#b71c1c",
      icon: "#c62828",
    },
    peluang: {
      bg: "#e3f2fd",
      border: "#0d47a1",
      text: "#0d47a1",
      icon: "#1565c0",
    },
    ancaman: {
      bg: "#fff3e0",
      border: "#e65100",
      text: "#bf360c",
      icon: "#e65100",
    },
  },

  // ============================================================
  // GET DEFAULT SWOT DATA (DARI SKRIPSI)
  // ============================================================
  getDefaultSWOT: function () {
    return {
      faktor: {
        kekuatan: [
          {
            id: "S1",
            nama: "Lahan pertanian luas (505,50 Ha) dengan irigasi teknis",
            bobot: 0.15,
            rating: 4,
          },
          {
            id: "S2",
            nama: "Jumlah penduduk besar (4.975 jiwa) sebagai tenaga kerja",
            bobot: 0.1,
            rating: 3,
          },
          {
            id: "S3",
            nama: "BUMDes aktif dengan 6 jenis unit usaha",
            bobot: 0.1,
            rating: 3,
          },
          {
            id: "S4",
            nama: "Usaha peternakan (31 unit), jahit/bordir (15 unit), kayu (3 unit)",
            bobot: 0.08,
            rating: 3,
          },
          {
            id: "S5",
            nama: "Lembaga pendidikan (TK & SD) sebagai modal SDM",
            bobot: 0.07,
            rating: 3,
          },
          {
            id: "S6",
            nama: "Struktur pemerintahan desa lengkap (13 aparat)",
            bobot: 0.05,
            rating: 3,
          },
          {
            id: "S7",
            nama: "Pendapatan Asli Desa stabil Rp342 juta/tahun",
            bobot: 0.05,
            rating: 3,
          },
        ],
        kelemahan: [
          {
            id: "W1",
            nama: "Tingkat pendidikan rendah (dominan SD 4.073 orang)",
            bobot: 0.12,
            rating: 1,
          },
          {
            id: "W2",
            nama: "416 penduduk usia produktif menganggur",
            bobot: 0.08,
            rating: 2,
          },
          {
            id: "W3",
            nama: "Keterbatasan akses pasar dan jaringan pemasaran",
            bobot: 0.08,
            rating: 1,
          },
          {
            id: "W4",
            nama: "Minimnya pemanfaatan teknologi digital",
            bobot: 0.07,
            rating: 1,
          },
          {
            id: "W5",
            nama: "Ketergantungan pada transfer/Dana Desa",
            bobot: 0.05,
            rating: 2,
          },
          {
            id: "W6",
            nama: "Kapasitas manajemen usaha masyarakat terbatas",
            bobot: 0.06,
            rating: 2,
          },
          { id: "W7", nama: "BPD berstatus pasif", bobot: 0.04, rating: 2 },
        ],
        peluang: [
          {
            id: "O1",
            nama: "Program Dana Desa dan ADD berkelanjutan",
            bobot: 0.15,
            rating: 4,
          },
          {
            id: "O2",
            nama: "Perkembangan teknologi digital membuka pasar luas",
            bobot: 0.12,
            rating: 3,
          },
          {
            id: "O3",
            nama: "Meningkatnya permintaan produk pertanian organik",
            bobot: 0.1,
            rating: 3,
          },
          {
            id: "O4",
            nama: "Program pemberdayaan UMKM dari pemerintah daerah",
            bobot: 0.08,
            rating: 3,
          },
          {
            id: "O5",
            nama: "Potensi kerja sama dengan swasta & perguruan tinggi",
            bobot: 0.05,
            rating: 2,
          },
          {
            id: "O6",
            nama: "Program ketahanan pangan nasional",
            bobot: 0.07,
            rating: 3,
          },
          {
            id: "O7",
            nama: "Infrastruktur jalan yang dapat ditingkatkan",
            bobot: 0.03,
            rating: 2,
          },
        ],
        ancaman: [
          {
            id: "T1",
            nama: "Persaingan produk dari luar daerah yang ketat",
            bobot: 0.15,
            rating: 2,
          },
          {
            id: "T2",
            nama: "Fluktuasi harga komoditas pertanian",
            bobot: 0.12,
            rating: 2,
          },
          {
            id: "T3",
            nama: "Dampak perubahan iklim terhadap produktivitas",
            bobot: 0.1,
            rating: 2,
          },
          {
            id: "T4",
            nama: "Fenomena urbanisasi mengurangi tenaga kerja",
            bobot: 0.08,
            rating: 2,
          },
          {
            id: "T5",
            nama: "Ketergantungan pada curah hujan & irigasi",
            bobot: 0.05,
            rating: 2,
          },
          {
            id: "T6",
            nama: "Risiko banjir pada sebagian wilayah (4 Ha)",
            bobot: 0.05,
            rating: 2,
          },
          {
            id: "T7",
            nama: "Rendahnya daya saing produk lokal",
            bobot: 0.05,
            rating: 2,
          },
        ],
      },
      hasil: {},
      ifas: {},
      efas: {},
    };
  },

  // ============================================================
  // RENDER FORM SWOT
  // ============================================================
  renderForm: function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var data = CRUD.getLocalData("swot");
    if (!data) {
      data = this.getDefaultSWOT();
      CRUD.saveData("swot", data);
    }

    var faktor = data.faktor || {
      kekuatan: [],
      kelemahan: [],
      peluang: [],
      ancaman: [],
    };

    var html = '<div class="swot-container-inner">';
    html += '<div class="swot-form-grid">';
    html += this.renderKolom(
      faktor.kekuatan,
      "kekuatan",
      "S",
      this.colors.kekuatan,
    );
    html += this.renderKolom(
      faktor.kelemahan,
      "kelemahan",
      "W",
      this.colors.kelemahan,
    );
    html += this.renderKolom(
      faktor.peluang,
      "peluang",
      "O",
      this.colors.peluang,
    );
    html += this.renderKolom(
      faktor.ancaman,
      "ancaman",
      "T",
      this.colors.ancaman,
    );
    html += "</div>";

    html += '<div class="swot-form-actions">';
    html +=
      '<button class="btn btn-primary" onclick="SWOT.hitungSWOT()" style="background:#0f4c3a;color:#fff;padding:10px 24px;border:none;border-radius:30px;cursor:pointer;font-weight:600;">';
    html += '<i class="fas fa-calculator"></i> Hitung Analisis';
    html += "</button>";
    html +=
      '<button class="btn btn-outline" onclick="SWOT.resetSWOT()" style="background:#c62828;color:#fff;padding:10px 24px;border:none;border-radius:30px;cursor:pointer;font-weight:600;">';
    html += '<i class="fas fa-undo"></i> Reset';
    html += "</button>";
    html += "</div>";
    html += "</div>";

    container.innerHTML = html;

    if (data.hasil && typeof data.hasil.total_s !== "undefined") {
      this.tampilkanHasil(data.hasil);
      this.renderKuadran(data.hasil);
      this.renderMatriks();
      var hasilEl = document.getElementById("swotHasil");
      var kuadranEl = document.getElementById("swotKuadran");
      var matrixEl = document.getElementById("matrixWrapper");
      if (hasilEl) hasilEl.style.display = "block";
      if (kuadranEl) kuadranEl.style.display = "block";
      if (matrixEl) matrixEl.style.display = "block";
    }
  },

  // ============================================================
  // RENDER KOLOM SWOT
  // ============================================================
  renderKolom: function (faktorList, tipe, prefix, colors) {
    var listHtml = "";

    if (faktorList && faktorList.length > 0) {
      faktorList.forEach(function (f, index) {
        listHtml +=
          '<div class="swot-faktor-item" style="border-left:4px solid ' +
          colors.border +
          ';">';
        listHtml +=
          '<span class="faktor-id" style="color:' +
          colors.border +
          ';">' +
          (f.id || prefix + (index + 1)) +
          "</span>";
        listHtml +=
          '<input type="text" class="faktor-nama" value="' +
          (f.nama || "") +
          '" placeholder="Nama faktor" data-tipe="' +
          tipe +
          '" data-index="' +
          index +
          '" style="border-color:' +
          colors.border +
          ';">';
        listHtml +=
          '<input type="number" class="faktor-bobot" value="' +
          (f.bobot || 0) +
          '" step="0.01" min="0" max="1" placeholder="Bobot" data-tipe="' +
          tipe +
          '" data-index="' +
          index +
          '" style="border-color:' +
          colors.border +
          ';">';
        listHtml +=
          '<select class="faktor-rating" data-tipe="' +
          tipe +
          '" data-index="' +
          index +
          '" style="border-color:' +
          colors.border +
          ';">';
        listHtml +=
          '<option value="1" ' +
          (f.rating === 1 ? "selected" : "") +
          ">1</option>";
        listHtml +=
          '<option value="2" ' +
          (f.rating === 2 ? "selected" : "") +
          ">2</option>";
        listHtml +=
          '<option value="3" ' +
          (f.rating === 3 ? "selected" : "") +
          ">3</option>";
        listHtml +=
          '<option value="4" ' +
          (f.rating === 4 ? "selected" : "") +
          ">4</option>";
        listHtml += "</select>";
        listHtml +=
          '<span class="faktor-skor" style="color:' +
          colors.border +
          ';">' +
          (f.bobot * f.rating).toFixed(2) +
          "</span>";
        listHtml +=
          '<button class="btn-remove" onclick="SWOT.hapusFaktor(\'' +
          tipe +
          "', " +
          index +
          ')" style="color:' +
          colors.border +
          ';">';
        listHtml += '<i class="fas fa-times"></i>';
        listHtml += "</button>";
        listHtml += "</div>";
      });
    } else {
      listHtml =
        '<div class="empty-state">Belum ada data. Klik "Tambah" untuk menambahkan.</div>';
    }

    var iconMap = {
      kekuatan: "fa-plus-circle",
      kelemahan: "fa-minus-circle",
      peluang: "fa-arrow-trend-up",
      ancaman: "fa-triangle-exclamation",
    };

    var titleMap = {
      kekuatan: "Kekuatan",
      kelemahan: "Kelemahan",
      peluang: "Peluang",
      ancaman: "Ancaman",
    };

    return (
      '<div class="swot-form-col" style="background:' +
      colors.bg +
      ";border-radius:12px;padding:12px;border:2px solid " +
      colors.border +
      ';">' +
      '<h4 style="color:' +
      colors.text +
      ';"><i class="fas ' +
      iconMap[tipe] +
      '" style="color:' +
      colors.icon +
      ';"></i> ' +
      titleMap[tipe] +
      " (" +
      prefix +
      ') <span style="font-weight:400;font-size:11px;color:#7a8a92;margin-left:6px;">' +
      (faktorList ? faktorList.length : 0) +
      "</span></h4>" +
      '<div class="swot-faktor-list">' +
      listHtml +
      "</div>" +
      '<button class="btn-sm btn-add" onclick="SWOT.tambahFaktor(\'' +
      tipe +
      "', '" +
      prefix +
      '\')" style="background:' +
      colors.border +
      ';color:#fff;">' +
      '<i class="fas fa-plus"></i> Tambah Faktor' +
      "</button>" +
      "</div>"
    );
  },

  // ============================================================
  // TAMBAH FAKTOR
  // ============================================================
  tambahFaktor: function (tipe, prefix) {
    var data = CRUD.getLocalData("swot");
    if (!data) {
      data = this.getDefaultSWOT();
    }
    if (!data.faktor) {
      data.faktor = { kekuatan: [], kelemahan: [], peluang: [], ancaman: [] };
    }
    if (!data.faktor[tipe]) {
      data.faktor[tipe] = [];
    }

    var newId = prefix + (data.faktor[tipe].length + 1);
    data.faktor[tipe].push({ id: newId, nama: "", bobot: 0, rating: 3 });

    CRUD.saveData("swot", data).then(function () {
      SWOT.renderForm("swotContainer");
      if (typeof showToast === "function") {
        showToast("Faktor baru berhasil ditambahkan", "success");
      }
    });
  },

  // ============================================================
  // HAPUS FAKTOR
  // ============================================================
  hapusFaktor: function (tipe, index) {
    var self = this;

    if (typeof showConfirm === "function") {
      showConfirm(
        "Yakin ingin menghapus faktor ini?",
        function (confirmed) {
          if (!confirmed) return;
          self._hapusFaktorProcess(tipe, index);
        },
        "danger",
        "Hapus Faktor SWOT",
      );
    } else {
      if (confirm("Yakin ingin menghapus faktor ini?")) {
        self._hapusFaktorProcess(tipe, index);
      }
    }
  },

  _hapusFaktorProcess: function (tipe, index) {
    var data = CRUD.getLocalData("swot");
    if (!data || !data.faktor || !data.faktor[tipe]) return;

    var faktor = data.faktor[tipe][index];

    // Data default dari skripsi tidak boleh dihapus
    var defaultIds = [
      "S1",
      "S2",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "W1",
      "W2",
      "W3",
      "W4",
      "W5",
      "W6",
      "W7",
      "O1",
      "O2",
      "O3",
      "O4",
      "O5",
      "O6",
      "O7",
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
    ];

    if (faktor && defaultIds.indexOf(faktor.id) !== -1) {
      if (typeof showToast === "function") {
        showToast("Data default dari skripsi tidak dapat dihapus!", "warning");
      }
      return;
    }

    data.faktor[tipe].splice(index, 1);
    CRUD.saveData("swot", data).then(function () {
      SWOT.renderForm("swotContainer");
      if (typeof showToast === "function") {
        showToast("Faktor berhasil dihapus", "info");
      }
    });
  },

  // ============================================================
  // HITUNG SWOT
  // ============================================================
  hitungSWOT: function () {
    var faktor = { kekuatan: [], kelemahan: [], peluang: [], ancaman: [] };

    var tipeList = ["kekuatan", "kelemahan", "peluang", "ancaman"];
    tipeList.forEach(function (tipe) {
      var items = document.querySelectorAll(
        '.faktor-nama[data-tipe="' + tipe + '"]',
      );
      items.forEach(function (item, i) {
        if (item.value.trim()) {
          var bobots = document.querySelectorAll(
            '.faktor-bobot[data-tipe="' + tipe + '"]',
          );
          var ratings = document.querySelectorAll(
            '.faktor-rating[data-tipe="' + tipe + '"]',
          );
          var idEl = item
            .closest(".swot-faktor-item")
            .querySelector(".faktor-id");

          faktor[tipe].push({
            id: idEl
              ? idEl.textContent
              : tipe.charAt(0).toUpperCase() + (i + 1),
            nama: item.value.trim(),
            bobot: parseFloat(bobots[i]?.value) || 0,
            rating: parseInt(ratings[i]?.value) || 3,
          });
        }
      });
    });

    // Validasi minimal 1 faktor per kategori
    if (
      faktor.kekuatan.length === 0 ||
      faktor.kelemahan.length === 0 ||
      faktor.peluang.length === 0 ||
      faktor.ancaman.length === 0
    ) {
      if (typeof showToast === "function") {
        showToast("Setiap kategori harus memiliki minimal 1 faktor", "error");
      }
      return;
    }

    // Hitung total bobot
    var semuaFaktor = [];
    semuaFaktor = semuaFaktor.concat(
      faktor.kekuatan,
      faktor.kelemahan,
      faktor.peluang,
      faktor.ancaman,
    );
    var totalBobot = 0;
    semuaFaktor.forEach(function (f) {
      totalBobot += f.bobot;
    });

    if (totalBobot < 0.9 || totalBobot > 1.1) {
      if (typeof showToast === "function") {
        showToast(
          "Total bobot: " + totalBobot.toFixed(2) + " (idealnya 1.00)",
          "warning",
        );
      }
    }

    // Hitung skor
    var hasil = this.hitungSkor(faktor);

    // Simpan ke localStorage
    var data = CRUD.getLocalData("swot");
    if (!data) data = { faktor: {}, hasil: {} };
    data.faktor = faktor;
    data.hasil = hasil;
    data.ifas = {
      total_kekuatan: hasil.total_s,
      total_kelemahan: hasil.total_w,
      selisih_s_w: hasil.selisih_s_w,
    };
    data.efas = {
      total_peluang: hasil.total_o,
      total_ancaman: hasil.total_t,
      selisih_o_t: hasil.selisih_o_t,
    };

    CRUD.saveData("swot", data).then(function () {
      SWOT.tampilkanHasil(hasil);
      SWOT.renderKuadran(hasil);
      SWOT.renderMatriks();
      var hasilEl = document.getElementById("swotHasil");
      var kuadranEl = document.getElementById("swotKuadran");
      var matrixEl = document.getElementById("matrixWrapper");
      if (hasilEl) hasilEl.style.display = "block";
      if (kuadranEl) kuadranEl.style.display = "block";
      if (matrixEl) matrixEl.style.display = "block";
      if (hasilEl)
        hasilEl.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof showToast === "function") {
        showToast("Analisis SWOT berhasil dihitung", "success");
      }
    });
  },

  // ============================================================
  // HITUNG SKOR
  // ============================================================
  hitungSkor: function (faktor) {
    var totalS = 0;
    faktor.kekuatan.forEach(function (f) {
      totalS += f.bobot * f.rating;
    });

    var totalW = 0;
    faktor.kelemahan.forEach(function (f) {
      totalW += f.bobot * f.rating;
    });

    var totalO = 0;
    faktor.peluang.forEach(function (f) {
      totalO += f.bobot * f.rating;
    });

    var totalT = 0;
    faktor.ancaman.forEach(function (f) {
      totalT += f.bobot * f.rating;
    });

    var selisihSW = totalS - totalW;
    var selisihOT = totalO - totalT;

    var kuadran, strategi, deskripsi, warna;

    if (selisihSW > 0 && selisihOT > 0) {
      kuadran = "I";
      strategi = "Agresif (SO)";
      deskripsi = "Memanfaatkan kekuatan untuk merebut peluang yang ada";
      warna = "#2e7d32";
    } else if (selisihSW < 0 && selisihOT > 0) {
      kuadran = "II";
      strategi = "Diversifikasi (ST)";
      deskripsi = "Menggunakan kekuatan untuk menghadapi ancaman";
      warna = "#e65100";
    } else if (selisihSW < 0 && selisihOT < 0) {
      kuadran = "III";
      strategi = "Turnaround (WO)";
      deskripsi = "Memperbaiki kelemahan dengan memanfaatkan peluang";
      warna = "#0d47a1";
    } else {
      kuadran = "IV";
      strategi = "Defensif (WT)";
      deskripsi = "Meminimalkan kelemahan dan menghindari ancaman";
      warna = "#c62828";
    }

    return {
      total_s: totalS,
      total_w: totalW,
      total_o: totalO,
      total_t: totalT,
      selisih_s_w: selisihSW,
      selisih_o_t: selisihOT,
      kuadran: kuadran,
      strategi: strategi,
      deskripsi: deskripsi,
      warna: warna,
      posisi_x: selisihSW,
      posisi_y: selisihOT,
    };
  },

  // ============================================================
  // TAMPILKAN HASIL
  // ============================================================
  tampilkanHasil: function (hasil) {
    var container = document.getElementById("swotHasilContent");
    if (!container) return;

    var warnaS = hasil.selisih_s_w >= 0 ? "#2e7d32" : "#c62828";
    var warnaO = hasil.selisih_o_t >= 0 ? "#0d47a1" : "#e65100";

    var html = '<div class="hasil-container">';
    html += '<div class="hasil-grid">';

    var items = [
      {
        label: "Kekuatan (S)",
        value: hasil.total_s.toFixed(2),
        color: "#2e7d32",
        bg: "#e8f5e9",
        icon: "fa-plus-circle",
      },
      {
        label: "Kelemahan (W)",
        value: hasil.total_w.toFixed(2),
        color: "#c62828",
        bg: "#ffebee",
        icon: "fa-minus-circle",
      },
      {
        label: "Selisih (S - W)",
        value:
          (hasil.selisih_s_w >= 0 ? "+" : "") + hasil.selisih_s_w.toFixed(2),
        color: warnaS,
        bg: warnaS + "15",
        icon: "fa-arrow-right",
        highlight: true,
      },
      {
        label: "Peluang (O)",
        value: hasil.total_o.toFixed(2),
        color: "#0d47a1",
        bg: "#e3f2fd",
        icon: "fa-arrow-trend-up",
      },
      {
        label: "Ancaman (T)",
        value: hasil.total_t.toFixed(2),
        color: "#e65100",
        bg: "#fff3e0",
        icon: "fa-triangle-exclamation",
      },
      {
        label: "Selisih (O - T)",
        value:
          (hasil.selisih_o_t >= 0 ? "+" : "") + hasil.selisih_o_t.toFixed(2),
        color: warnaO,
        bg: warnaO + "15",
        icon: "fa-arrow-right",
        highlight: true,
      },
    ];

    items.forEach(function (item) {
      var highlightClass = item.highlight ? " highlight" : "";
      html +=
        '<div class="hasil-item' +
        highlightClass +
        '" style="border-left:4px solid ' +
        item.color +
        ";background:" +
        item.bg +
        ';">';
      html +=
        '<span class="hasil-label"><i class="fas ' +
        item.icon +
        '" style="color:' +
        item.color +
        ';"></i> ' +
        item.label +
        "</span>";
      html +=
        '<span class="hasil-value" style="color:' +
        item.color +
        ";" +
        (item.highlight ? "font-size:28px;" : "") +
        '">' +
        item.value +
        "</span>";
      html += "</div>";
    });

    html += "</div>";
    html +=
      '<div class="hasil-kuadran-info" style="border-top:4px solid ' +
      hasil.warna +
      ';">';
    html +=
      '<span class="kuadran-badge" style="background:' +
      hasil.warna +
      ';">Kuadran ' +
      hasil.kuadran +
      "</span>";
    html +=
      '<span class="strategi-badge" style="background:' +
      hasil.warna +
      ';">' +
      hasil.strategi +
      "</span>";
    html +=
      '<p class="strategi-deskripsi" style="color:' +
      hasil.warna +
      ';"><i class="fas fa-lightbulb" style="color:' +
      hasil.warna +
      ';"></i> ' +
      hasil.deskripsi +
      "</p>";
    html += '<div style="margin-top:8px;font-size:13px;color:#7a8a92;">';
    html +=
      "<span>IFAS: S-W = " +
      (hasil.selisih_s_w >= 0 ? "+" : "") +
      hasil.selisih_s_w.toFixed(2) +
      "</span>";
    html += '<span style="margin:0 8px;">|</span>';
    html +=
      "<span>EFAS: O-T = " +
      (hasil.selisih_o_t >= 0 ? "+" : "") +
      hasil.selisih_o_t.toFixed(2) +
      "</span>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    container.innerHTML = html;
  },

  // ============================================================
  // RENDER KUADRAN
  // ============================================================
  renderKuadran: function (hasil) {
    var container = document.getElementById("swotKuadranContent");
    if (!container) return;

    var x = Math.min(Math.max(hasil.selisih_s_w, -2), 2);
    var y = Math.min(Math.max(hasil.selisih_o_t, -2), 2);
    var posX = ((x + 2) / 4) * 100;
    var posY = 100 - ((y + 2) / 4) * 100;

    var kuadranData = [
      {
        id: "II",
        label: "Kuadran II",
        strategy: "Diversifikasi (ST)",
        color: "#e65100",
        bg: "#fff3e0",
      },
      {
        id: "I",
        label: "Kuadran I",
        strategy: "Agresif (SO)",
        color: "#2e7d32",
        bg: "#e8f5e9",
        active: true,
      },
      {
        id: "III",
        label: "Kuadran III",
        strategy: "Turnaround (WO)",
        color: "#0d47a1",
        bg: "#e3f2fd",
      },
      {
        id: "IV",
        label: "Kuadran IV",
        strategy: "Defensif (WT)",
        color: "#c62828",
        bg: "#ffebee",
      },
    ];

    var html = '<div class="kuadran-container">';
    html +=
      '<div class="kuadran-chart-wrapper" style="display:flex;justify-content:center;margin-bottom:12px;">';
    html += '<div class="kuadran-chart">';
    html +=
      '<div class="kuadran-axis-x"><span>← Kelemahan</span><span>Kekuatan →</span></div>';
    html +=
      '<div class="kuadran-axis-y"><span>Ancaman ↑</span><span>↓ Peluang</span></div>';
    html += '<div class="kuadran-grid">';

    // Render 4 kuadran
    kuadranData.forEach(function (k) {
      var isActive = hasil.kuadran === k.id;
      var activeClass = isActive ? "active" : "";
      var style = isActive
        ? "background:" + k.bg + ";border-color:" + k.color + ";"
        : "";
      var checkMark = isActive
        ? '<span class="check" style="color:' + k.color + ';">✓</span>'
        : "";
      html +=
        '<div class="kuadran-area ' + activeClass + '" style="' + style + '">';
      html +=
        '<div><span class="kuadran-label" style="color:' +
        k.color +
        ';">' +
        k.label +
        "</span>";
      html +=
        '<span class="kuadran-strategy" style="color:' +
        k.color +
        ';">' +
        k.strategy +
        "</span>" +
        checkMark;
      html += "</div></div>";
    });

    html +=
      '<div class="kuadran-dot" style="left:' +
      posX +
      "%;top:" +
      posY +
      "%;background:" +
      hasil.warna +
      ';">';
    html +=
      '<span class="dot-label">(' +
      hasil.selisih_s_w.toFixed(2) +
      ", " +
      hasil.selisih_o_t.toFixed(2) +
      ")</span>";
    html += "</div>";
    html += "</div></div></div>";
    html +=
      '<div class="kuadran-note" style="border-left:4px solid ' +
      hasil.warna +
      ';">';
    html +=
      '<i class="fas fa-location-dot" style="color:' + hasil.warna + ';"></i> ';
    html +=
      'Desa Sleman berada pada <strong style="color:' +
      hasil.warna +
      ';">Kuadran ' +
      hasil.kuadran +
      "</strong>, ";
    html +=
      'strategi: <strong style="color:' +
      hasil.warna +
      ';">' +
      hasil.strategi +
      "</strong>";
    html += "</div></div>";

    container.innerHTML = html;
  },

  // ============================================================
  // RENDER MATRIKS
  // ============================================================
  renderMatriks: function () {
    var container = document.getElementById("matrixContent");
    if (!container) return;

    var matrixData = [
      {
        tipe: "SO",
        label: "Strategi SO (Agresif)",
        color: "#2e7d32",
        bg: "#e8f5e9",
        items: [
          "Mengembangkan pertanian modern berbasis irigasi teknis",
          "Memperkuat BUMDes dengan Dana Desa",
          "Mengembangkan UMKM melalui program pemberdayaan",
        ],
      },
      {
        tipe: "WO",
        label: "Strategi WO (Turnaround)",
        color: "#0d47a1",
        bg: "#e3f2fd",
        items: [
          "Pelatihan keterampilan & literasi digital",
          "Memanfaatkan e-commerce untuk pemasaran",
          "Kerja sama program beasiswa & pendidikan",
        ],
      },
      {
        tipe: "ST",
        label: "Strategi ST (Diversifikasi)",
        color: "#e65100",
        bg: "#fff3e0",
        items: [
          "Diversifikasi komoditas pertanian",
          "Mengembangkan usaha non-pertanian alternatif",
          "Membangun infrastruktur pengendalian banjir",
        ],
      },
      {
        tipe: "WT",
        label: "Strategi WT (Defensif)",
        color: "#c62828",
        bg: "#ffebee",
        items: [
          "Memperkuat BPD dan LKMD",
          "Membentuk koperasi/kelompok usaha bersama",
          "Efisiensi APBDes untuk program berdampak ekonomi",
        ],
      },
    ];

    var html = '<div class="matrix-container"><div class="matrix-grid">';
    html += '<div class="matrix-header"></div>';
    html +=
      '<div class="matrix-header matrix-s" style="background:#2e7d32;color:#fff;padding:8px 12px;font-weight:700;font-size:12px;text-align:center;">Kekuatan (S)</div>';
    html +=
      '<div class="matrix-header matrix-w" style="background:#c62828;color:#fff;padding:8px 12px;font-weight:700;font-size:12px;text-align:center;">Kelemahan (W)</div>';
    html +=
      '<div class="matrix-header matrix-o" style="background:#0d47a1;color:#fff;padding:8px 12px;font-weight:700;font-size:12px;text-align:center;">Peluang (O)</div>';

    // SO
    var so = matrixData[0];
    html +=
      '<div class="matrix-cell matrix-so" style="border-left:4px solid ' +
      so.color +
      ";background:" +
      so.bg +
      ';padding:10px 14px;">';
    html +=
      '<strong style="color:' + so.color + ';">' + so.label + "</strong><ul>";
    so.items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";

    // WO
    var wo = matrixData[1];
    html +=
      '<div class="matrix-cell matrix-wo" style="border-left:4px solid ' +
      wo.color +
      ";background:" +
      wo.bg +
      ';padding:10px 14px;">';
    html +=
      '<strong style="color:' + wo.color + ';">' + wo.label + "</strong><ul>";
    wo.items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";

    html +=
      '<div class="matrix-header matrix-t" style="background:#e65100;color:#fff;padding:8px 12px;font-weight:700;font-size:12px;text-align:center;">Ancaman (T)</div>';

    // ST
    var st = matrixData[2];
    html +=
      '<div class="matrix-cell matrix-st" style="border-left:4px solid ' +
      st.color +
      ";background:" +
      st.bg +
      ';padding:10px 14px;">';
    html +=
      '<strong style="color:' + st.color + ';">' + st.label + "</strong><ul>";
    st.items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";

    // WT
    var wt = matrixData[3];
    html +=
      '<div class="matrix-cell matrix-wt" style="border-left:4px solid ' +
      wt.color +
      ";background:" +
      wt.bg +
      ';padding:10px 14px;">';
    html +=
      '<strong style="color:' + wt.color + ';">' + wt.label + "</strong><ul>";
    wt.items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul></div>";

    html += "</div></div>";
    container.innerHTML = html;
  },

  // ============================================================
  // RESET SWOT
  // ============================================================
  resetSWOT: function () {
    var self = this;

    if (typeof showConfirm === "function") {
      showConfirm(
        "Yakin ingin mereset semua data SWOT ke default?",
        function (confirmed) {
          if (!confirmed) return;
          self._resetSWOTProcess();
        },
        "warning",
        "Reset SWOT",
      );
    } else {
      if (confirm("Yakin ingin mereset semua data SWOT ke default?")) {
        self._resetSWOTProcess();
      }
    }
  },

  _resetSWOTProcess: function () {
    var data = this.getDefaultSWOT();
    CRUD.saveData("swot", data).then(function () {
      SWOT.renderForm("swotContainer");
      var hasilEl = document.getElementById("swotHasil");
      var kuadranEl = document.getElementById("swotKuadran");
      var matrixEl = document.getElementById("matrixWrapper");
      if (hasilEl) hasilEl.style.display = "none";
      if (kuadranEl) kuadranEl.style.display = "none";
      if (matrixEl) matrixEl.style.display = "none";
      if (typeof showToast === "function") {
        showToast("SWOT direset ke default", "success");
      }
    });
  },
};

window.SWOT = SWOT;
