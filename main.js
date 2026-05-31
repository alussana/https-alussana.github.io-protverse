// ============================================================
// ProtVerse landing page — small bits of interactivity.
// ============================================================

// ---- Configure the download link here ----------------------
// Replace with the real URL when it's ready.
const DOWNLOAD_URL = "#";

// ------------------------------------------------------------
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.href = DOWNLOAD_URL;
  // Open external links in a new tab; leave in-page anchors alone.
  if (/^https?:\/\//.test(DOWNLOAD_URL)) {
    downloadBtn.target = "_blank";
    downloadBtn.rel = "noopener noreferrer";
  }
}

// Auto-update the footer year.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
