console.log("Hello World")

function sum(a, b) {
    return a + b;
}

console.log(sum(7,3))
module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen(euro) {
return euro*oneEuroIs.USD
  }


  function fromDollarToYen(usd) {
    return (usd/oneEuroIs.USD)*oneEuroIs.JPY
      }

      
      function fromYenToPound(usd) {
        return (yen/oneEuroIs)*oneEuroIs.GBP
          }
        
          module.exports = { sum,  fromDollarToYen, fromEuroToDollar, fromYenToPound }

          