// Label filter: show all claims, or only facts, interpretations or predictions.
// Without JavaScript the filter stays hidden and the whole page is readable.

(function () {
  var filter = document.getElementById("filter");
  var status = document.getElementById("filter-status");
  if (!filter) return;

  var buttons = filter.querySelectorAll("button");
  var claims = document.querySelectorAll(".claim");
  var names = {
    all: "Showing everything",
    fact: "Showing facts only",
    interpretation: "Showing interpretations only",
    prediction: "Showing predictions only"
  };

  filter.hidden = false;

  function show(type) {
    claims.forEach(function (claim) {
      claim.hidden = type !== "all" && claim.dataset.type !== type;
    });
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.show === type));
    });
    status.textContent = names[type];
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      show(button.dataset.show);
    });
  });
})();