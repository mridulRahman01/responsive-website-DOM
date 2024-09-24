function showSectionById(id) {
  document.getElementById("donation-btn").classList.add("hidden");
  document.getElementById("history-btn").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
