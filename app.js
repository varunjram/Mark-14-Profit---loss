const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#calculate-profit");
const outputBox = document.querySelector("#output-box");
const form = document.querySelector("#form");
const grey = document.querySelector(".grey");
submitBtn.addEventListener("click", submitHandler);
form.addEventListener("submit", (e) => e.preventDefault());

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current && initial > 0) {
    // loss logic here
    var loss = (initial - current) * quantity;
    var lossPercent = (loss / (initial * quantity)).toFixed(2) * 100;
    // outputBox.innerText ='sorry for your loss of ' + loss + '₹ and your loss-percentage is ' + lossPercent;
    outputBox.innerText = `Sorry for your loss of ${loss} ₹ and your loss-percentage is ${lossPercent}%`;
    grey.style.backgroundColor = "red";
    grey.style.transition = "all 0.2s ease-in";
  } else if (current > initial && initial > 0) {
    // profit logic here
    var profit = (current - initial) * quantity;
    // var profitPercentage = (profit/(initial*quantity))*100
    var profitPercentage = ((current - initial) / initial).toFixed(2) * 100;
    outputBox.innerText = `Congratulations on your profit of ${profit}₹₹₹ and your profit-percentage is ${profitPercentage}%`;
    grey.style.backgroundColor = "green";
    grey.style.transition = "all 0.2s ease-in";
  } else if (initial == current && initial > 0) {
    outputBox.innerText = "No Pain no gain, No gain No pain";
    grey.style.backgroundColor = "lightyellow";
    grey.style.transition = "all 0.2s ease-in";
    grey.style.color = "black";
  }
}
//
