function script() {
  document.getElementById("espera").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(function() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("espera").style.display = "block";
  }, 7000);
}
window.addEventListener('load', script);