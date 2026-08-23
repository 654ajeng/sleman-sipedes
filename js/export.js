/* ============================================================
   EXPORT REPORT - SIPEDES
   ============================================================ */

var ExportReport = {
  /**
   * Export ke PDF menggunakan html2canvas + jsPDF
   */
  toPDF: function () {
    if (typeof jspdf === "undefined" || typeof html2canvas === "undefined") {
      this.loadLibraries("pdf");
      return;
    }

    var content = document.getElementById("report-content");
    if (!content) {
      alert("Konten laporan tidak ditemukan!");
      return;
    }

    html2canvas(content, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    })
      .then(function (canvas) {
        var imgData = canvas.toDataURL("image/png");
        var pdf = new jspdf.jsPDF("p", "mm", "a4");
        var imgWidth = 210;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("Laporan_SIPEDES.pdf");
      })
      .catch(function (err) {
        alert("Gagal export PDF: " + err.message);
      });
  },

  /**
   * Export ke Excel menggunakan SheetJS
   */
  toExcel: function () {
    if (typeof XLSX === "undefined") {
      this.loadLibraries("excel");
      return;
    }

    var workbook = XLSX.utils.book_new();

    // Data Laporan sesuai skripsi
    var data = [
      ["LAPORAN SIPEDES - DESA SLEMAN"],
      [""],
      ["Desa", "Sleman"],
      ["Kecamatan", "Sliyeg"],
      ["Kabupaten", "Indramayu"],
      [""],
      ["Total Penduduk", "4.975"],
      ["Luas Lahan", "505,50 Ha"],
      ["Jumlah Potensi", "8 Sektor"],
      ["Jumlah Strategi", "6"],
      [""],
      ["IFAS (S - W)", "+1.22"],
      ["EFAS (O - T)", "+0.67"],
      ["Kuadran", "I (Agresif/SO)"],
      [""],
      ["Dicetak:", new Date().toLocaleString()],
    ];

    var ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, ws, "Laporan SIPEDES");
    XLSX.writeFile(workbook, "Laporan_SIPEDES.xlsx");
  },

  /**
   * Load library yang dibutuhkan
   */
  loadLibraries: function (type) {
    var scripts = [];

    if (type === "pdf") {
      scripts.push(
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
      );
    } else if (type === "excel") {
      scripts.push(
        "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
      );
    }

    var loaded = 0;
    for (var i = 0; i < scripts.length; i++) {
      var script = document.createElement("script");
      script.src = scripts[i];
      script.onload = function () {
        loaded++;
        if (loaded === scripts.length) {
          if (type === "pdf") {
            ExportReport.toPDF();
          } else if (type === "excel") {
            ExportReport.toExcel();
          }
        }
      };
      document.head.appendChild(script);
    }
  },

  /**
   * Print halaman
   */
  print: function () {
    window.print();
  },
};

// Ekspor ke global
window.ExportReport = ExportReport;
