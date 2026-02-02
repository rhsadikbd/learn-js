/*
    1. take order
    2. processing order
    3. prepared order
    4. completed order
*/
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const preocessOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking completed`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder("Sadik", (customer) => {
  preocessOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
