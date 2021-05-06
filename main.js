let freeTrialForm = document.getElementById("free-trial");
freeTrialForm.addEventListener("click", validateForm);

// Validate form
function validateForm(e) {
  // Prevent default behaviour
  e.preventDefault();

  // Defining a function to display error message
  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    
  }
  

  // Retrieving the values of form elements
  var first_name = document.freeTrialForm.first_name.value;
  var last_name = document.freeTrialForm.last_name.value;
  var email = document.freeTrialForm.email.value;
  var password = document.freeTrialForm.password.value;

  // var nameErr, emailErr, numberErr, amountErr;
  var firstNameErr = (lastNameErr = emailErr = passwordErr = true);

  var inputFirstName = document.getElementById('first_name');
  var inputLastName = document.getElementById('last_name');
  var inputEmail = document.getElementById('email');
  var inputPassword = document.getElementById("password");

  // Validate firstname
  if (first_name == "") {
    printError("firstNameErr", "First Name cannot be empty");
     inputFirstName.classList.add("error-state");
  } else {
    printError("firstNameErr", "");
    nameErr = false;
     inputFirstName.classList.remove("error-state");

  }

  // Validate lastname
  if (last_name == "") {
    printError("lastNameErr", "Last Name cannot be empty");
     inputLastName.classList.add("error-state");

  } else {
    printError("lastNameErr", "");
    nameErr = false;
    inputLastName.classList.remove("error-state");
  }

  // Validate email address
  if (email == "") {
    printError("emailErr", "Email Address cannot be empty");
     inputEmail.classList.add("error-state");

  } else {
    // Regular expression for email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Looks like this is not an email");
     inputEmail.classList.add("error-state");
    } else {
      printError("emailErr", "");
      emailErr = false;
     inputEmail.classList.remove("error-state");

    }
    
  }

  // Validate password
  if (password == "") {
    printError("passwordErr", "Password cannot be empty");
     inputPassword.classList.add("error-state");

  } else {
    printError("passwordErr", "");
    amountErr = false;
    inputPassword.classList.remove("error-state");
  }

  // Prevent the form from being submitted if there are any errors
  if ((firstNameErr || lastNameErr || emailErr || passwordErr) == true) {
    return false;
  }
}


