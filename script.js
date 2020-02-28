const email = document.getElementById("inputEmail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Type mismatch, expected email address.");
  } else {
    email.setCustomValidity("");
  }
});

const zip = document.getElementById("zipcode");

zip.addEventListener("input", function (event) {
  if (isNaN(zip)) {
    zip.setCustomValidity("Type mismatch, expected a zipcode");
  } else {
    zip.setCustomValidity("");
  }
});