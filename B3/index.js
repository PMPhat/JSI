const getApi = async () => {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "66dde638cfmsh1588ac7540c3ad5p10c00bjsndf60a98b68a0",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.results;
    console.log(data);
    const Item = document.querySelector("#item");
    let html = "";
    for (let i = 0; i < data.length; i++) {
      let add = data[i].address;
      let img = data[i].images[0];
      let name = data[i].name;
      html += `
        <p>${add}</p>
        <img src='${img}'/>
        <h1>${name}</h1>
         `;
    }
    Item.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};
getApi();
