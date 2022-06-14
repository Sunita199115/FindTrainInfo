var inputBox = document.querySelector("#in_input");
var clickBtn = document.querySelector("#btn_click");
var outputEl = document.querySelector("#output");

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
    readData(response);
  } else {
    console.log("false");
    outputEl.innerHTML = "error!!";
  }
}
function readData(response) {
  outputEl.innerHTML = "";
  for (let i = 0; i < response.length; i++) {
    outputEl.innerHTML =
      outputEl.innerHTML +
      `<div class="outer">
         <div> Name = ${response[i].name}</div><div> TrainFrom =  ${response[i].train_from}</div><div> TrainTo = ${response[i].train_to}</div>
         <div>trainNumber =${response[i].train_num}</div></div> `;
  }
}
