const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const main = document.querySelector("#main");
  console.log(data);
  data.forEach((item) => {
    var id = item.id;
    var name = item.name;
    var email = item.email;
    console.log(id, name, email);
    main.innerHTML += `
    <h3>${id}</h3>
    <h2>${name}</h2>
    <h4>${email}</h4>
    `;
  });
};

getPosts();
