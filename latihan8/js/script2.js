function editProfile() {
  const cekForm = document.getElementById("form");
  if (cekForm.classList.contains("hidden")) {
    cekForm.classList.remove("hidden");
  } else {
    cekForm.classList.add("hidden");
  }

  const name = document.getElementById("profile-name");
  const desc = document.getElementById("profile-desc");
  const availability = document.getElementById("profile-availability");
  const age = document.getElementById("profile-age");
  const location = document.getElementById("profile-location");
  const experience = document.getElementById("profile-experience");
  const email = document.getElementById("profile-email");

  const inputName = document.getElementById("inputName");
  inputName.value = name.textContent;
  const inputRole = document.getElementById("inputRole");
  inputRole.value = desc.textContent;
  const inputAvailability = document.getElementById("inputAvailability");
  inputAvailability.value = availability.textContent;
  const inputAge = document.getElementById("inputAge");
  inputAge.value = age.textContent;
  const inputLocation = document.getElementById("inputLokasi");
  inputLocation.value = location.textContent;
  const inputExperience = document.getElementById("inputExperience");
  inputExperience.value = experience.textContent;
  const inputEmail = document.getElementById("inputEmail");
  inputEmail.value = email.textContent;
}

function saveProfile() {
  const inputName = document.getElementById("inputName");
  const inputRole = document.getElementById("inputRole");
  const inputAvailability = document.getElementById("inputAvailability");
  const inputAge = document.getElementById("inputAge");
  const inputLocation = document.getElementById("inputLokasi");
  const inputExperience = document.getElementById("inputExperience");
  const inputEmail = document.getElementById("inputEmail");

  const name = document.getElementById("profile-name");
  const desc = document.getElementById("profile-desc");
  const availability = document.getElementById("profile-availability");
  const age = document.getElementById("profile-age");
  const location = document.getElementById("profile-location");
  const experience = document.getElementById("profile-experience");
  const email = document.getElementById("profile-email");

  name.textContent = inputName.value;
  desc.textContent = inputRole.value;
  availability.textContent = inputAvailability.value;
  age.textContent = inputAge.value;
  location.textContent = inputLocation.value;
  experience.textContent = inputExperience.value;
  email.textContent = inputEmail.value;

  resetForm();
}

function resetForm() {
  document.getElementById("inputName").value = "";
  document.getElementById("inputRole").value = "";
  document.getElementById("inputAvailability").value = "";
  document.getElementById("inputAge").value = "";
  document.getElementById("inputLokasi").value = "";
  document.getElementById("inputExperience").value = "";
  document.getElementById("inputEmail").value = "";

  const cekForm = document.getElementById("form");
  cekForm.classList.add("hidden");
}
