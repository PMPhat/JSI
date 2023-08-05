// const getPosts = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       const main = document.querySelector("#main");
//       let html = "";
//       for (let i = 0; i < data.length; i++) {
//         let id = data[i].id;
//         let title = data[i].title;
//         let body = data[i].body;
//         html += `
//         <h1>${id}</h1>
//         <h2>${title}</h2>
//         <p>${body}</p>
//          `;
//       }
//     });
//   main.innerHTML = html;
// };

// getPosts();

const getPosts = async () => {
  // fetch("https://jsonplaceholder.typicode.com/comments")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     const main = document.querySelector("#main");
  //     console.log(main);
  //     for (let i=0;i<data.length;i++){

  //     }
  //   });
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
