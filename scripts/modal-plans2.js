// second script

const showButton2 = document.getElementById("showDialog2");
const favDialog2 = document.getElementById("favDialog2");
const outputBox2 = document.querySelector("output2");
const selectEl2 = favDialog2.querySelector("select2");
const confirmBtn2 = favDialog2.querySelector("#confirmBtn2");

// "Show the dialog" button opens the <dialog> modally
showButton2.addEventListener("click", () => {
  favDialog2.showModal();
});

selectEl2.addEventListener("change", (e) => {
  confirmBtn2.value = selectEl2.value;
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn2.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog2.close(selectEl2.value); // Have to send the select box value here.
});
