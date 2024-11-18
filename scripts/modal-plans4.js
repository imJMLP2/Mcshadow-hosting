// third script

const showButton4 = document.getElementById("showDialog4");
const favDialog4 = document.getElementById("favDialog4");
const outputBox4 = document.querySelector("output4");
const selectEl4 = favDialog4.querySelector("select4");
const confirmBtn4 = favDialog4.querySelector("#confirmBtn4");

// "Show the dialog" button opens the <dialog> modally
showButton4.addEventListener("click", () => {
  favDialog4.showModal();
});

selectEl4.addEventListener("change", (e) => {
  confirmBtn4.value = selectEl4.value;
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn4.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog4.close(selectEl4.value); // Have to send the select box value here.
});
