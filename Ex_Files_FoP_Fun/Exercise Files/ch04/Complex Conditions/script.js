var balance = 5000;

if (  balance > 0 ) {
  alert("The balance is positive");
  if ( balance > 10000 ) {
    alert("The balance is large!");
  }
} else if (balance == 0) {
  alert("There is no balance");
} else {
  alert("The balance is negative");
}