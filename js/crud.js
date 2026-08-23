/* ============================================================
   CRUD OPERATIONS - SIPEDES (DATA HARDCODED - TANPA FETCH)
   ============================================================ */

var CRUD = {
  // ============================================================
  // DATA HARDCODED - LANGSUNG MUNCUL TANPA FETCH
  // ============================================================
  data: {
    desa: {
      identitas: {
        nama_desa: "Sleman",
        kecamatan: "Sliyeg",
        kabupaten: "Indramayu",
        provinsi: "Jawa Barat",
        kepala_desa: "Abdul Goni",
        jumlah_aparat: 13,
        jumlah_dusun: 4,
        luas_wilayah: 547.35,
        luas_sawah: 505.5,
        luas_kering: 14.06,
        luas_fasum: 27.8,
      },
      demografi: {
        total_penduduk: 4975,
        laki_laki: 2512,
        perempuan: 2463,
        jumlah_kk: 1969,
        kepadatan: 908.92,
      },
      pendidikan: {
        sd: { total: 4073 },
        sltp: { total: 1228 },
        slta: { total: 1681 },
        pt: { total: 116 },
        penduduk_menganggur: { total: 416 },
      },
      sekolah: {
        tk: { unit: 3, siswa: 97 },
        sd: { unit: 3, siswa: 1500 },
        ra: { unit: 1, siswa: 37 },
      },
      iklim: {
        curah_hujan: 2000,
        suhu_rata_rata: 31,
      },
    },
    potensi: {
      sektor: [
        {
          id: 1,
          nama: "Sektor Pertanian",
          icon: "fa-seedling",
          deskripsi: "Sektor utama dengan luas lahan sawah 505,50 Ha",
          warna: "#e8f5e9",
          teks_warna: "#2e7d32",
          detail: [
            "Sawah Irigasi Teknis: 445,50 Ha",
            "Sawah Irigasi Setengah Teknis: 45,00 Ha",
            "Sawah Pasang Surut: 15,00 Ha",
          ],
        },
        {
          id: 2,
          nama: "Peternakan",
          icon: "fa-cow",
          deskripsi: "31 unit usaha dengan 39 tenaga kerja",
          warna: "#fff3e0",
          teks_warna: "#e65100",
          detail: [
            "Unit Usaha: 31 unit",
            "Jenis Produk: 4 jenis",
            "Tenaga Kerja: 39 orang",
          ],
        },
        {
          id: 3,
          nama: "Jahit/Bordir",
          icon: "fa-tshirt",
          deskripsi: "15 unit usaha dengan 20 tenaga kerja",
          warna: "#fce4ec",
          teks_warna: "#c62828",
          detail: [
            "Unit Usaha: 15 unit",
            "Jenis Produk: 2 jenis",
            "Tenaga Kerja: 20 orang",
          ],
        },
        {
          id: 4,
          nama: "Pengolahan Kayu",
          icon: "fa-tree",
          deskripsi: "3 unit usaha dengan 8 tenaga kerja",
          warna: "#e3f2fd",
          teks_warna: "#1565c0",
          detail: [
            "Unit Usaha: 3 unit",
            "Jenis Produk: 5 jenis",
            "Tenaga Kerja: 8 orang",
          ],
        },
        {
          id: 5,
          nama: "BUMDes",
          icon: "fa-building",
          deskripsi: "1 unit dengan 6 jenis kegiatan usaha",
          warna: "#e8eaf6",
          teks_warna: "#283593",
          detail: [
            "Unit: 1 unit",
            "Jenis Kegiatan: 6 jenis",
            "Pengurus: 4 orang",
          ],
        },
        {
          id: 6,
          nama: "Lembaga Keuangan",
          icon: "fa-university",
          deskripsi: "1 unit bank pemerintah",
          warna: "#fff8e1",
          teks_warna: "#f57f17",
          detail: [
            "Unit: 1 unit",
            "Jenis Kegiatan: 2 jenis",
            "Pengurus: 7 orang",
          ],
        },
        {
          id: 7,
          nama: "Lembaga Pendidikan",
          icon: "fa-graduation-cap",
          deskripsi: "7 unit sekolah dengan 1.634 siswa",
          warna: "#f3e5f5",
          teks_warna: "#6a1b9a",
          detail: [
            "TK: 3 unit, 97 siswa",
            "SD: 3 unit, 1.500 siswa",
            "RA: 1 unit, 37 siswa",
          ],
        },
        {
          id: 8,
          nama: "Situs Sejarah",
          icon: "fa-landmark",
          deskripsi: "Potensi wisata sejarah 0,35 Ha",
          warna: "#efebe9",
          teks_warna: "#4e342e",
          detail: ["Luas: 0,35 Ha", "Potensi Wisata Sejarah"],
        },
      ],
    },
    strategi: {
      strategi: [
        {
          id: 1,
          nama: "Pengembangan Pertanian Modern dan Diversifikasi Komoditas",
          tipe: "SO",
          deskripsi: "Mengembangkan pertanian modern berbasis irigasi teknis.",
          sumber_dana: ["Dana Desa (APBDes)", "Bantuan Pemerintah Provinsi"],
          timeline: "2025-2030",
          indikator: [
            "Peningkatan produktivitas padi 20%",
            "Rehabilitasi 100% saluran irigasi",
          ],
        },
        {
          id: 2,
          nama: "Penguatan BUMDes sebagai Motor Penggerak Ekonomi Desa",
          tipe: "SO",
          deskripsi: "Memperkuat BUMDes dengan membuka unit usaha baru.",
          sumber_dana: ["Dana Desa", "PAD", "Investasi Swasta"],
          timeline: "2025-2030",
          indikator: [
            "Peningkatan pendapatan BUMDes 50%",
            "Terbentuk 3 unit usaha baru",
          ],
        },
        {
          id: 3,
          nama: "Pengembangan UMKM Berbasis Teknologi Digital",
          tipe: "WO",
          deskripsi: "Mengembangkan UMKM melalui program pemberdayaan.",
          sumber_dana: ["Dana Desa", "ADD", "Program Pemerintah Daerah"],
          timeline: "2025-2030",
          indikator: ["50% pelaku UMKM digital", "Terbentuk 10 UMKM baru"],
        },
        {
          id: 4,
          nama: "Peningkatan Kualitas Sumber Daya Manusia",
          tipe: "WO",
          deskripsi: "Meningkatkan kualitas SDM melalui pelatihan.",
          sumber_dana: ["ADD", "Dana Desa", "Bantuan Pendidikan"],
          timeline: "2025-2030",
          indikator: ["Penurunan pengangguran 30%", "100% anak sekolah"],
        },
        {
          id: 5,
          nama: "Diversifikasi Ekonomi dan Mitigasi Risiko",
          tipe: "ST",
          deskripsi: "Mendiversifikasi komoditas pertanian.",
          sumber_dana: ["Dana Desa", "Bantuan Provinsi", "APBD Kabupaten"],
          timeline: "2025-2030",
          indikator: [
            "Pengurangan risiko gagal panen 40%",
            "Banjir teratasi di 4 Ha",
          ],
        },
        {
          id: 6,
          nama: "Penguatan Kelembagaan dan Partisipasi Masyarakat",
          tipe: "WT",
          deskripsi: "Memperkuat kelembagaan BPD dan LKMD.",
          sumber_dana: ["ADD", "PAD", "APBDes"],
          timeline: "2025-2030",
          indikator: ["BPD aktif", "Terbentuk 5 kelompok usaha"],
        },
      ],
    },
    program: {
      program: [
        {
          id: 1,
          nama: "Pengembangan Pertanian Modern",
          deskripsi: "Optimalisasi lahan sawah irigasi teknis",
          sumber_dana: "Dana Desa (APBDes)",
          tahun_mulai: 2025,
          tahun_selesai: 2030,
          status: "Berjalan",
          indikator: "Peningkatan produksi padi 20%",
        },
        {
          id: 2,
          nama: "Penguatan BUMDes",
          deskripsi: "Pengembangan unit usaha pengolahan hasil pertanian",
          sumber_dana: "Dana Desa, PAD",
          tahun_mulai: 2025,
          tahun_selesai: 2030,
          status: "Berjalan",
          indikator: "Pendapatan BUMDes naik 50%",
        },
        {
          id: 3,
          nama: "Digitalisasi UMKM",
          deskripsi: "Pelatihan e-commerce dan sertifikasi produk",
          sumber_dana: "Dana Desa, ADD",
          tahun_mulai: 2025,
          tahun_selesai: 2030,
          status: "Berjalan",
          indikator: "50% UMKM go digital",
        },
        {
          id: 4,
          nama: "Program Beasiswa dan Pelatihan SDM",
          deskripsi: "Program beasiswa siswa berprestasi",
          sumber_dana: "ADD, Dana Desa",
          tahun_mulai: 2025,
          tahun_selesai: 2030,
          status: "Berjalan",
          indikator: "Penurunan pengangguran 30%",
        },
        {
          id: 5,
          nama: "Diversifikasi Komoditas Pertanian",
          deskripsi: "Pengembangan hortikultura dan tanaman obat",
          sumber_dana: "Dana Desa, Bantuan Provinsi",
          tahun_mulai: 2025,
          tahun_selesai: 2030,
          status: "Perencanaan",
          indikator: "5 komoditas unggulan baru",
        },
        {
          id: 6,
          nama: "Mitigasi Banjir dan Irigasi",
          deskripsi: "Pembangunan infrastruktur pengendalian banjir",
          sumber_dana: "Dana Desa, APBD",
          tahun_mulai: 2025,
          tahun_selesai: 2027,
          status: "Perencanaan",
          indikator: "0 genangan banjir di 4 Ha",
        },
        {
          id: 7,
          nama: "Penguatan BPD dan LKMD",
          deskripsi: "Reaktivasi fungsi pengawasan BPD",
          sumber_dana: "ADD, PAD",
          tahun_mulai: 2025,
          tahun_selesai: 2026,
          status: "Perencanaan",
          indikator: "BPD aktif dan berfungsi",
        },
        {
          id: 8,
          nama: "Pembentukan Koperasi Desa",
          deskripsi: "Pembentukan kelompok usaha bersama",
          sumber_dana: "Dana Desa, ADD",
          tahun_mulai: 2025,
          tahun_selesai: 2026,
          status: "Perencanaan",
          indikator: "5 kelompok usaha terbentuk",
        },
      ],
    },
    swot: {
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
    },
    apbdes: {
      tahun: [
        {
          tahun: 2024,
          pendapatan: { total: 2155218000 },
          belanja: { total: 2193650344 },
          defisit: -38432344,
        },
        {
          tahun: 2025,
          pendapatan: { total: 2123726000 },
          belanja: { total: 2186961683 },
          defisit: -63235683,
        },
      ],
    },
    users: {
      users: [
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
      ],
    },
  },

  // ============================================================
  // LOAD DATA - LANGSUNG DARI HARDCODED
  // ============================================================
  loadData: function (file) {
    var self = this;
    return new Promise(function (resolve, reject) {
      var local = self.getLocalData(file);
      if (local !== null) {
        resolve(local);
        return;
      }

      var data = self.data[file];
      if (data) {
        self.saveData(file, data);
        console.log("✅ Data " + file + " dimuat dari hardcoded");
        resolve(data);
      } else {
        reject(new Error("Data " + file + " tidak ditemukan"));
      }
    });
  },

  // ============================================================
  // SIMPAN DATA KE LOCALSTORAGE
  // ============================================================
  saveData: function (file, data) {
    return new Promise(function (resolve, reject) {
      try {
        localStorage.setItem("sipedes_" + file, JSON.stringify(data));
        resolve({ success: true });
      } catch (e) {
        reject(e);
      }
    });
  },

  // ============================================================
  // AMBIL DATA DARI LOCALSTORAGE
  // ============================================================
  getLocalData: function (file) {
    var data = localStorage.getItem("sipedes_" + file);
    if (data === null) return null;
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  },

  // ============================================================
  // HAPUS DATA DARI LOCALSTORAGE
  // ============================================================
  deleteData: function (file) {
    localStorage.removeItem("sipedes_" + file);
  },

  // ============================================================
  // AMBIL SEMUA DATA
  // ============================================================
  getAll: function (file) {
    return this.getLocalData(file);
  },

  // ============================================================
  // AMBIL DATA BERDASARKAN ID
  // ============================================================
  getById: function (file, id, key) {
    key = key || "id";
    var data = this.getLocalData(file);
    if (data === null || !Array.isArray(data)) return null;
    var result = null;
    data.forEach(function (item) {
      if (item[key] === id) result = item;
    });
    return result;
  },

  // ============================================================
  // TAMBAH DATA BARU
  // ============================================================
  add: function (file, item) {
    var data = this.getLocalData(file);
    if (data === null || !Array.isArray(data)) data = [];
    var maxId = 0;
    data.forEach(function (d) {
      if (d.id > maxId) maxId = d.id;
    });
    item.id = maxId + 1;
    data.push(item);
    this.saveData(file, data);
    return item;
  },

  // ============================================================
  // UPDATE DATA
  // ============================================================
  update: function (file, id, newData, key) {
    key = key || "id";
    var data = this.getLocalData(file);
    if (data === null || !Array.isArray(data)) return null;
    var index = -1;
    data.forEach(function (d, i) {
      if (d[key] === id) index = i;
    });
    if (index === -1) return null;
    for (var prop in newData) {
      if (newData.hasOwnProperty(prop)) {
        data[index][prop] = newData[prop];
      }
    }
    this.saveData(file, data);
    return data[index];
  },

  // ============================================================
  // HAPUS DATA
  // ============================================================
  remove: function (file, id, key) {
    key = key || "id";
    var data = this.getLocalData(file);
    if (data === null || !Array.isArray(data)) return false;
    var filtered = data.filter(function (item) {
      return item[key] !== id;
    });
    this.saveData(file, filtered);
    return true;
  },

  // ============================================================
  // CARI DATA
  // ============================================================
  search: function (file, keyword, fields) {
    var data = this.getLocalData(file);
    if (data === null || !Array.isArray(data)) return [];

    if (typeof keyword !== "string" || keyword.trim() === "") return data;

    var lowerKeyword = keyword.toLowerCase().trim();
    return data.filter(function (item) {
      var found = false;
      fields.forEach(function (field) {
        if (
          item[field] &&
          String(item[field]).toLowerCase().includes(lowerKeyword)
        ) {
          found = true;
        }
      });
      return found;
    });
  },
};

window.CRUD = CRUD;
