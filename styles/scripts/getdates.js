// Get current year
const year = new Date().getFullYear();

// Insert current year into footer
document.getElementById("currentyear").textContent = year;

// Insert last modified date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;