const buttons = document.querySelectorAll("[ data-button]");
const submit = document.querySelector("[ data-submit]");
const buttonDiv = document.querySelector(" #rating-button");
const rateDiv = document.querySelector(" #rate");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const active = document.querySelector(".work");
    if (active) {
      active.classList.remove("work");
    }
    button.classList.add("work");
    rate = button.textContent;
  });
});

submit.addEventListener("click", () => {
  buttonDiv.classList.add("hide");
  rateDiv.classList.remove("hide");
  rateDiv.textContent = `YOUR rate is: ${rate}`;
  if (rate == 1 || rate == 2) {
    rateDiv.classList.add("bad");
  }
  if (rate == 3) {
    rateDiv.classList.add("normal");
  }

  if (rate == 4 || rate == 5) {
    rateDiv.classList.add("excellent");
  }
});
