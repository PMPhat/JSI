const getApi = async () => {
  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=Chicago&checkin=2023-09-18&checkout=2023-09-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
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
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
getApi();
