function validate_form() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var address = document.getElementById("address").value;

  if (username.length < 6 || !/^[a-zA-Z]+$/.test(username)) {
    alert("First Name should contain at least 6 alphabetic characters");
    return false;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email format");
    return false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile Number should contain exactly 10 digits");
    return false;
  }

  if (address.trim().length === 0) {
    alert("Address should not be empty");
    return false;
  }
}
