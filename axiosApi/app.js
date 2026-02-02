console.clear();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts/100")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foommma vahsvd gvaa",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       id: 1,
//       title: "foo kala ma tha",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      body: "bar makjhkjhk",
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1", {})
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
