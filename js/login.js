 function login() {
     
  
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var userA = ["Apple", "Google", "Microsoft"];
  var passA = ["AAPL", "GOOGL", "MSFT"];
        for (i=0; i < unArray.length; i++) {
          if (user == userA[i] && pass == passA[i]){
          window.location = "index.html";
          break;
        }
          else {
            alert("Invalid Login ID please try again.")
          }
        }
 }

 function init() {
   var login_button = document.getElementById("login_button");
   if (login_button !== null) {
     login_button.onclick = login;
   }
 }