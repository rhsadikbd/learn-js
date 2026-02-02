// console.clear();

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "GET",
// })
//   .then((res) => {
//     if (!res.ok) {
//       const message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });

const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error : ${res.status}`;
    console.log(message);
  }
  const data = await res.json();
  return data;
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

deleteData();

// const updateSingleData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//       title: "changed i",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// updateSingleData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "Sadik Added",
//       body: "bar",
//       userId: 1,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// updateData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "fooKJFH K,ADS FKSAJDFHKJ",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// sendData();

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// getData();
