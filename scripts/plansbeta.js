var tierOneBtn = document.querySelector("#tierOneBtn");
var tierTwoBtn = document.querySelector("#tierTwoBtn");

function processPlanChange(slider) {
  var rangeplans = document.querySelectorAll("#rangeplans article");
  for (var i = 0; i < rangeplans.length; i++) {
    rangeplans[i].classList.add("hidden");
  }

  document
    .querySelector("." + slider.className + slider.value)
    .classList.remove("hidden");
}

function switchTab(tab) {
  console.log(tab);

  if (tab == "tierOne") {
    document.querySelector("#tierTwo").classList.add("hidden");
    document.querySelector("#tierOne").classList.remove("hidden");

    processPlanChange(document.querySelector(".rangeTierOne"));

    tierOneBtn.classList.remove("bg-border");
    tierOneBtn.classList.remove("text-white");
    tierOneBtn.classList.add("bg-minecraft");
    tierOneBtn.classList.add("text-black");
    tierOneBtn.classList.add("apply-button-marker");

    tierTwoBtn.classList.remove("bg-minecraft");
    tierTwoBtn.classList.remove("text-black");
    tierTwoBtn.classList.remove("apply-button-marker");
    tierTwoBtn.classList.add("bg-border");
    tierTwoBtn.classList.add("text-white");
  } else {
    document.querySelector("#tierOne").classList.add("hidden");
    document.querySelector("#tierTwo").classList.remove("hidden");

    processPlanChange(document.querySelector(".rangeTierTwo"));

    tierTwoBtn.classList.remove("bg-border");
    tierTwoBtn.classList.remove("text-white");
    tierTwoBtn.classList.add("bg-minecraft");
    tierTwoBtn.classList.add("text-black");
    tierTwoBtn.classList.add("apply-button-marker");

    tierOneBtn.classList.remove("bg-minecraft");
    tierOneBtn.classList.remove("text-black");
    tierOneBtn.classList.remove("apply-button-marker");
    tierOneBtn.classList.add("bg-border");
    tierOneBtn.classList.add("text-white");
  }
}
