function showSectionById(id) {
  document.getElementById("history-container").classList.add("hidden");
  document.getElementById("donation-form").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
