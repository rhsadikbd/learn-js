const fetchData = async (config) => {
  const res = await axios(config);
  return res.data;
};
const postsElement = document.querySelector(".posts");
const loadAllData = async () => {
  try {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
      //   const postElement = document.createElement("div");
      //   postElement.classList.add("post");
      postsElement.innerHTML = `
      <div class="post">
        <h4 class="title">${post.title}</h4>
        <p class="desc">
            ${post.body}
        </p>
        </div>
      `;
      //   postsElement.appendChild(postElement);
    });
  } catch (error) {
    throw Error("Data not fatched");
  }
};

loadAllData();
