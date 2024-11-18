// third script

const showButton3 = document.getElementById("showDialog3");
const favDialog3 = document.getElementById("favDialog3");
const outputBox3 = document.querySelector("output3");
const selectEl3 = favDialog3.querySelector("select3");
const confirmBtn3 = favDialog3.querySelector("#confirmBtn3");

// "Show the dialog" button opens the <dialog> modally
showButton3.addEventListener("click", () => {
  favDialog3.showModal();
});

selectEl3.addEventListener("change", (e) => {
  confirmBtn3.value = selectEl3.value;
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn3.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog3.close(selectEl3.value); // Have to send the select box value here.
});
