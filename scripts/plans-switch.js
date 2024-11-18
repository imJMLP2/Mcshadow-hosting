document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.getElementById("hs-basic-with-description");
  const monthlyPrices = document.querySelectorAll("[data-monthly]");
  const annualPrices = document.querySelectorAll("[data-annual]");

  switchInput.addEventListener("change", function () {
    const isAnnual = switchInput.checked;

    monthlyPrices.forEach(function (element) {
      element.textContent = isAnnual
        ? element.dataset.annual
        : element.dataset.monthly;
    });
  });
});
