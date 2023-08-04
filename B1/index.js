const getPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const main = document.querySelector("#main");
      let html = "";
      for (let i = 0; i < data.length; i++) {
        let id = data[i].id;
        let title = data[i].title;
        let body = data[i].body;
        html += `
        <h1>${id}</h1>
        <h2>${title}</h2>
        <p>${body}</p>
         `;
      }
    });
  main.innerHTML = html;
};

getPosts();
