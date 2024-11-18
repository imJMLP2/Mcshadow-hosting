function toggleDropdown() {
  var dropdownMenu = document.getElementById("termsOfUseDropdownMenu");
  dropdownMenu.classList.toggle("hidden");
}

// Function to scroll to a section
function scrollToSection(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

// Function to toggle the dropdown menu
function toggleDropdownMenu() {
  const dropdownMenu = document.getElementById("termsOfUseDropdownMenu");
  dropdownMenu.classList.toggle("hidden");
}
