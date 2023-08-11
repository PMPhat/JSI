// Cau 6
let student = [
  {
    name: "Duong",
    age: 11,
    hobbies: ["video game", "sleep", "learn"],
  },
  {
    name: "Dong",
    age: 12,
    hobbies: ["video game", "sick", "study"],
  },
  {
    name: "Minh",
    age: 13,
    hobbies: ["video game", "sick", "learn"],
  },
  {
    name: "Thanh",
    age: 9,
    hobbies: ["play game", "sleep", "learn"],
  },
  {
    name: "Hung",
    age: 11,
    hobbies: ["play game", "sick", "study"],
  },
];
// cau1
// const data = student.filter((item) => {
//   return item.age == 11;
// });
// const main = document.querySelector("#main");
// for (i = 0; i < student.length; i++) {
//   var Ten = data[i].name;
//   var Tuoi = data[i].age;
//   var hobbies = data[i].hobbies;
//   main.innerHTML += `
//       <h3>${Ten}</h3>
//       <h3>${Tuoi}</h3>

//   `;
// }

// cau 2
// const data = student.filter((item) => {
//   return (item.hobbies = "play game");
// });
// const main = document.querySelector("#main");
// for (i = 0; i < student.length; i++) {
//   var Ten = data[i].name;
//   var Tuoi = data[i].age;
//   var hobbies = data[i].hobbies;
//   main.innerHTML += `
//       <h3>${Ten}</h3>
//       <h3>${Tuoi}</h3>
//       <h3>${hobbies}</h3>

//   `;
// }

// cau 3
const data = student.filter((item) => {
  return (item.hobbies = "study");
});
const main = document.querySelector("#main");
for (i = 0; i < student.length; i++) {
  var Ten = data[i].name;
  var Tuoi = data[i].age;
  var hobbies = data[i].hobbies;
  main.innerHTML += `
      <h3>${Ten}</h3>
      <h3>${Tuoi}</h3>

  `;
}
