const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const main = document.querySelector("#main");
  console.log(data);
  data.forEach((item) => {
    var postId = item.postId;
    var id = item.id;
    var name = item.name;
    var email = item.email;
    var body = item.body;
    console.log(id, name, email);
    main.innerHTML += `
    <h3>${postId}</h3>
    <h3>${id}</h3>
    <h1>${name}</h1>
    <h2>${email}</h2>
    <p>${body}</p>

    `;
  });
};

getPosts();
