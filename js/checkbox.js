document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggleEdit");
  const section = document.getElementById("edit");

  if (checkbox && section) {
    checkbox.addEventListener("change", function () {
      section.style.display = this.checked ? "block" : "none";
    });
  }
});