console.log("Hello, welcome to the food app");
console.log("Let's create an account");
var username = prompt("please create a username: ");
var password = prompt("please create a password: ");
console.log("Thank you your account has been created");

console.log("please enter your login informations");
var tryuser = prompt("Username: ");
var trypass = prompt("Password: ");

while (username != tryuser && password != trypass) {
  console.log("wrong username or password please try again");
  var tryuser = prompt("Enter you username");
  var trypass = prompt("Enter you password");
}

console.log("You are connected");

var balance = 10;
console.log("Your current balance is " + balance + " dollars");
var q1 = prompt("would you like to add money to your account");

if (q1 == "yes") {
  var q2 = prompt("how much would you like to add: ");
  var balance = balance + Number(q2);
  console.log("Your new balance is " + balance + "dollars");
} else {
  console.log("great");
}

q4 = prompt("would you like a burger ");

if (q4 == "yes") {
  console.log("please choose what burger you want");
  var burgertypes = ["cheese burger", "Fish burger", "All dress burger"];
  var prices = [2, 3, 4];
  console.log("choice 1: " + burgertypes[0] + "  " + prices[0] + " dollars");
  console.log("choice 2: " + burgertypes[1] + "  " + prices[1] + " dollars");
  console.log("choice 3: " + burgertypes[2] + "  " + prices[2] + " dollars");
}

var q5 = prompt("what is your choice");

if (q5 == "choice 1") {
  console.log("you have ordered a " + burgertypes[0]);
  console.log("the total of the order is " + prices[0] + " dollars");
  var balance = balance - prices[0];
  console.log("you have " + balance + "dollars left on your balance");
} else if (q5 == "choice 2") {
  console.log("you have ordered a " + burgertypes[1]);
  console.log("the total of the order is " + prices[1] + " dollars");
  var balance = balance - prices[1];
  console.log("you have " + balance + "dollars left on your balance");
} else if (q5 == "choice 3") {
  console.log("you have ordered a " + burgertypes[2]);
  console.log("the total of the order is " + prices[2] + " dollars");
  var balance = balance - prices[2];
  console.log("you have " + balance + " dollars left on your balance");
} else {
  console.log("have a good day");
}

