const idDisplays = [
  "profile-name",
  "profile-desc",
  "profile-availability",
  "profile-age",
  "profile-location",
  "profile-experience",
  "profile-email",
];

const inputFields = [
  "inputName",
  "inputRole",
  "inputAvailability",
  "inputAge",
  "inputLokasi",
  "inputExperience",
  "inputEmail",
];

function editProfile() {
  const cekForm = document.getElementById("form");
  if (cekForm.classList.contains("hidden")) {
    cekForm.classList.remove("hidden");
  } else {
    cekForm.classList.add("hidden");
  }

  // get variable from id array
  idDisplays.forEach((item) => {
    const profile = document.getElementById(item);
    console.log(profile.innerText);
  });

  // set value input from profile
  for (let i = 0; i < idDisplays.length; i++) {
    const profile = document.getElementById(idDisplays[i]);
    const input = document.getElementById(inputFields[i]);
    input.value = profile.innerText;
  }
}

function saveProfile() {
  for (let i = 0; i < idDisplays.length; i++) {
    const profile = document.getElementById(idDisplays[i]);
    const input = document.getElementById(inputFields[i]);
    profile.innerText = input.value;
  }

  for (let i = 0; i < idDisplays.length; i++) {
    const profile = document.getElementById(idDisplays[i]);
    const input = document.getElementById(inputFields[i]);
    input.value = profile.innerText;
  }

  resetForm();
}

function resetForm() {
  for (let i = 0; i < idDisplays.length; i++) {
    const input = document.getElementById(inputFields[i]);
    input.value = "";
  }

  const cekForm = document.getElementById("form");
  cekForm.classList.add("hidden");
}
