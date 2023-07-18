document.getElementById("loginForm").addEventListener ("submit"), function(event) {
    event.preventDefault(); 
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
}
    if (username === "admin" && password === "password") {
    }
        else {
        
        document.getElementById("loginMessage").textContent = "Incorrect username or password.";
      }
      if  (ForgotPassword) 
    
         ("forgot-password")
         ResponseEntity<String> processForgotPassword(RequestParam("email") String email) {
            if (!isValidEmail(email)) {
                return ResponseEntity.badRequest().body("Invalid email address");
            }
             user = userService.getUserByEmail(email);
            if (user == null) {
                return ResponseEntity.notFound().body("User not found");
            }
     resetToken = generateResetToken();
    user.setResetToken(resetToken);
            userService.saveUser(user);

            sendResetInstructions(email, resetToken);
    
            return ResponseEntity.ok("Password reset instructions sent");
        }
    ;  

    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
      
        
        var message = "Name" + Name + "Username: " + username + "<br>Email: " + email + "<br>Password: " + password + "Phone" + Phone;
        document.getElementById("signupMessage").innerHTML = message;
      });