const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
  const trimValua = input.value.trim();
  if (trimValua === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = trimValua;
  }
});
