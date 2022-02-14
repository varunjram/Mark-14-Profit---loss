const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price")

const submitBtn = document.querySelector("#calculate-profit");

const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click',submitHandler)

function submitHandler () {

    var ip = Number(initialPrice.value) ;
    var qty = Number(stocksQuantity.value) ;
    var curr = Number(currentPrice.value) ;

     calculateProfitAndLoss(ip,qty,curr);

}



function calculateProfitAndLoss(initial,quantity,current) {
    if (initial > current) {
        // loss logic here
        var loss = (initial - current) * quantity
        var lossPercent = (loss/(initial*quantity))*100 

        // outputBox.innerText ='sorry for your loss of ' + loss + '₹ and your loss-percentage is ' + lossPercent;

        outputBox.innerText =`Sorry for your loss of ${loss} ₹ and your loss-percentage is ${lossPercent}%`;


    } else if (current> initial) {
        // profit logic here
        var profit = (current-initial)*quantity
        // var profitPercentage = (profit/(initial*quantity))*100
        var profitPercentage = ((current-initial)/initial)*100

        outputBox.innerText =`Congratulations on your profit of ${profit}₹₹₹ and your profit-percentage is ${profitPercentage}%`


    } else {

        outputBox.innerText = ('No Pain no gain, No gain No pain');

    }

}
// 

