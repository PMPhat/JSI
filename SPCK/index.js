const getApi = async () => {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Chicago&checkin=2023-10-16&checkout=2023-10-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "13a048fa60msh6379c5259907578p1e9aaajsn97db41d63ad6",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result.results[0].name);
    if (result) {
      const data = result.results;
      let html = `
     `;
      for (let i = 0; i < data.length; i++) {
        let city = data[i].city;
        let img = data[i].images[0];
        let name = data[i].name;
        let price = data[i].price.total;
        html += `<div class="content-item">
          <img
            src=${img}
            alt=""
          />
          <div class="content-body">
            <div class="content-topInfo">
              <p class="content-topInfoName">
                ${name}
              </p>
              <p class="content-topInfoStar">
                <i class="fa-solid fa-star"></i>4,84
              </p>
            </div>
            <div class="content-middleInfo">
              <p class="content-middleInfoCity">City: ${city}</p>
              <p class="content-middleInfoDate">Dec 31- Jan 5</p>
            </div>
            <div class="content-bottom">
              <p class="content-bottomPrice">$${price} night</p>
            </div>
          </div>
        </div>
        `;
      }
      console.log(html);
      document.querySelector(".content-list").innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
};
// getApi();
