function sumVariadic(...b) {
  let total = 0;
  b.forEach((value) => {
    total += value;
  });
  return total;
}

function sumVariadicReduce(...b) {
  return b.reduce((total, value) => total + value, 0);
}

console.log(sumVariadic(1, 2, 3, 4, 5));
console.log(sumVariadicReduce(1, 2, 3, 4, 5));

const sumVariadicArrow = (...b) => {
  return b.reduce((total, value) => total + value, 0);
};

console.log(sumVariadicArrow(1, 2, 3, 4, 5));

const sumVariadicArrowSingle = (...b) =>
  b.reduce((total, value) => total + value, 0);

const kalian = (kalian) => kalian * kalian;
console.log(kalian(5)); // 25

function tombolClick() {
  console.log("Tombol diklik");
  const cekevent = document.getElementById("eventdisini");
  if (cekevent.classList.contains("hidden")) {
    cekevent.classList.remove("hidden");
  } else {
    cekevent.classList.add("hidden");
  }
}

const submitForm = document.getElementById("submitForm");
const inputNama = document.getElementById("inputNama");
const inputEducation = document.getElementById("inputEdu");

inputNama.addEventListener("input", function (event) {
  console.log(event.target.value);

  const value = event.target.value;
  const displayName = document.getElementById("displayName");
  displayName.textContent = value;
});

inputEducation.addEventListener("change", function (event) {
  console.log(event.target.value);

  const value = event.target.value;
  const displayEducation = document.getElementById("displayEdu");
  displayEducation.textContent = value;
});

const inputGender = document.querySelectorAll("[name='gender']");
let selectedGender;
inputGender.forEach((value) => {
  value.addEventListener("change", function (event) {
    selectedGender = event.target.value;
    console.log(selectedGender);
  });
});

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  const displayGender = document.getElementById("displayGender");
  displayGender.textContent = selectedGender;
});
