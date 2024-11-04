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

function toggleHidden() {
  const form = document.getElementById("form");
  form.classList.toggle("hidden");
}

function editProfile() {
  toggleHidden();

  idDisplays.forEach((id, index) => {
    const profile = document.getElementById(id);
    const input = document.getElementById(inputFields[index]);
    input.value = profile.innerText;
  });
}

const editForm = document.getElementById("form-contact");
editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  idDisplays.forEach((id, index) => {
    const profile = document.getElementById(id);
    const input = document.getElementById(inputFields[index]);
    profile.innerText = input.value;
  });

  resetForm();
});

function resetForm() {
  for (let i = 0; i < idDisplays.length; i++) {
    const input = document.getElementById(inputFields[i]);
    input.value = "";
  }

  toggleHidden();
}
