// Callback Function

let paymentSuccess = true;
let marks = 40;

function enrollment(callback) {
  console.log(`Courese enrollment is in process`);
  setTimeout(() => {
    if (paymentSuccess) {
      callback();
    } else {
      console.log(`Payment Failed!`);
    }
  }, 2000);
}
function progress(callback) {
  console.log(`Course on progress...`);
  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log(`You could not get enough marks to get the certificate!`);
    }
  }, 3000);
}
function getCertificate() {
  console.log(`Preparing your certificate!`);
  setTimeout(() => {
    console.log(`Congrats, you got your certificate!`);
  }, 1000);
}
enrollment(() => {
  progress(getCertificate);
});
