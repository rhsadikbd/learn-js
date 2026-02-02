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

async function course() {
  try {
    await enrollment();
    await progress();
    const result = await getCertificate();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

course();
