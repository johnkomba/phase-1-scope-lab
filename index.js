var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Jane Doe";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "New Jane Doe"; // This will result in an error as constants cannot be reassigned
}
