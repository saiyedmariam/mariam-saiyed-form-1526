// Preventing the form from submission
document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();


  // Declaring all the variables
  var fisrstLastName = document.getElementById("full-name");
  var emailName = document.getElementById("email");
  var msgDisplay = document.getElementById("msg");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Initializing errors and display of errors
  // Constant data {} Constant error []
  var data = {};
  var errors = [];

  // Validating first and last name
  if (fisrstLastName.value !== "") {
    data.fullname = fisrstLastName.value;
  } else {
    errors.push("First and last name is required");
  }

  // Validating Email ID
  if (emailName.value !== "") {
    if (emailRegex.test(emailName.value)) {
      data.email = emailName.value;
    } else {
      errors.push("Invalid Email");
    }
  } else {
    errors.push("Email is required");
  }

  // Validating display of message
  if (msgDisplay.value !== "") {
    data.message = msgDisplay.value;
  } else {
    errors.push("Message is required");
  }

  // Print feedback or error message here
  if (errors.length > 0) {
    console.log("Errors:", errors);
  } else {
    console.log("Data:", data);
    fisrstLastName.value = "";
    emailName.value = "";
    msgDisplay.value = "";
  }
});
