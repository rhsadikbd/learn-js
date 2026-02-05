// const fetchData = async (config) => {
//   const res = await axios(config);
//   return res.data;
// };
// const postsElement = document.querySelector(".posts");
// const loadAllData = async () => {
//   const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
//   try {
//     posts.map((post) => {
//       const postElement = document.createElement("div");
//       postElement.classList.add("post");
//       postElement.innerHTML = `
//       <div class="post">
//         <h4 class="title">${post.title}</h4>
//         <p class="desc">
//             ${post.body}
//         </p>
//         </div>
//       `;
//       postsElement.appendChild(postElement);
//     });
//   } catch (error) {
//     throw Error("Data not fatched");
//   }
// };

// loadAllData();

const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (err) {
    console.log("Error fatching data");
    return [];
  }
};

const postsEl = document.querySelector(".posts");

const loadAllData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");

    postEl.innerHTML = `
       <h4 class="title">${post.title}</h4>
        <p class="desc">
            ${post.body}
        </p>
    `;
    postsEl.appendChild(postEl);
  });
};

loadAllData();
