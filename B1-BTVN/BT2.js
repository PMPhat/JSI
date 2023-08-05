const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(url);
  const data = await res.json();
  const data2 = data.filter((item) => {
    return item.postId == 2;
  });
  console.log(data2);
  const main = document.querySelector("#main");
  let html = "";
  for (let i = 0; i < data2.length; i++) {
    var PostId = data2[i].postId;
    var id = data2[i].id;
    var name = data2[i].name;
    var email = data2[i].email;
    var body = data2[i].body;
    html += `
    <h3>${PostId}</h3>
    <h2>${id}</h2>
    <h4>${name}</h4>
    <h4>${email}</h4>
    <p>${body}</p>`;
  }
  main.innerHTML = html;
};
getPosts();
