/*
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});
*/
// const addToCalender = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calender);
//   });
// };
/*
const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

*/

const promise1 = Promise.resolve("promise1 resolved");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
  }, 2000);
});

// promise1.then((res) => {
//   console.log(res);
// });
// promise2.then((res) => {
//   console.log(res);
// });

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res);
// });
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
