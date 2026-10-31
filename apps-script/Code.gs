// Referensi Google Apps Script Backend (lihat panduan kode lengkap sebelumnya)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, message: "API Running" })).setMimeType(ContentService.MimeType.JSON);
}
