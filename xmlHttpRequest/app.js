console.clear();

const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      console.log("Error in API");
    };

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      console.log(res);
    },
  );
};

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   });
// };
// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "fooma",
//     body: "barma",
//     userId: 1,
//   });
// };
// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "I am change",
//   });
// };
// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };

getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();
