console.log("hi");

const api = "70c74ccb3c1e3030150ac713037778ec";
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    // Storing Longitude and Latitude in variables
    long = position.coords.longitude;
    lat = position.coords.latitude;
    const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

    // Using fetch to get data
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // const temp_min = data.main.temp_min;
        // const temp_max = data.main.temp_max;
        const temp = data.main.temp;
        const place = data.name;
        const { description, icon } = data.weather[0];
        console.log(description);
        document.getElementById("location").innerText = place;
        document.getElementById("temp-value").innerText = temp;
        document.getElementById("condition").innerText = `${description}`;
        document.getElementById("icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`;


      });
  });
}
  document.getElementById("loc-search").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    update();
    }
  });
  function update(){
    let cityname = document.getElementById("loc-search").value;
    document.getElementById("loc-search").value = "";
    cityname.replace(/ /g, "");
    if (cityname != "") {

        const base1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}&units=metric`;
        fetch(base1)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // const temp_min = data.main.temp_min;
            // const temp_max = data.main.temp_max;
            const temp = data.main.temp;
            const place = data.name;
            const { description, icon } = data.weather[0];

            document.getElementById("location").innerText = place;
            document.getElementById("temp-value").innerText = temp;
            document.getElementById("condition").innerText = `${description}`;
            document.getElementById("icon").src=`http://openweathermap.org/img/wn/${icon}@2x.png`;

          });
      }
    }
  