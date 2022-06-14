var inputBox = document.querySelector("#in_input");
var clickBtn = document.querySelector("#btn_click");
var outputBox = document.querySelector("#output");
function calculateTrainDetails() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a21cd462d9mshf3038011dfbd8aap10d31fjsnb589f3fee5bd",
      "X-RapidAPI-Host": "trains.p.rapidapi.com",
    },
    body: `{"search":"${inputBox.value}"}`,
  };

  fetch("https://trains.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then(function (response) {
      console.log(response);
      printOnPage(response);
    })
    .catch((err) => console.error(err));
}
clickBtn.addEventListener("click", calculateTrainDetails);
function printOnPage(response) {
  console.log("print1 is called");
  if (response.length > 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
