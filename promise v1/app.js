// const hasTask = true;

// console.log(`Task 1`);
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (hasTask) {
//       resolve(`Task 2`);
//     } else {
//       reject(`failed`);
//     }
//   }, 2000);
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(`Task 3`);

let paymentSuccess = true;
let marks = 90;

function enrollment() {
  console.log(`Courese enrollment is in process`);

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject(`Payment Failed!`);
      }
    }, 2000);
  });

  return myPromise;
}

function progress() {
  console.log(`Course on progress...`);

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject(`You could not get enough marks to get the certificate!`);
      }
    }, 3000);
  });
  return myPromise;
}

function getCertificate() {
  console.log(`Preparing your certificate!`);

  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Congrats, you got the certificate!`);
    }, 1000);
  });
  return myPromise;
}

enrollment()
  .then(progress)
  .then(getCertificate)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
