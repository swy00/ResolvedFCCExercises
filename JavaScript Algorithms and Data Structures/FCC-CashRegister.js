/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/


function checkCashRegister(price, cash, cid) {
    const conversion = [       
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];
    let changeArr = [];
    let contadorMonedas = [];
    let change = cash - price;
    let total = cid.reduce((sum, category) => sum + category[1], 0).toFixed(2);
    let sum = 0;
    let auxiliaryArr = [];
  
    for (let i = 0; i < Object.keys(conversion).length; i++) {
      contadorMonedas.unshift(Math.round(cid[i][1] / conversion[i][1]));
    }
    
    conversion.reverse();
  
    for (let i = 0; i < contadorMonedas.length; i++) {
      let sum = 0;
      
      if (change < conversion[i][1]) {
        continue;
      } else {
        for (let j = 0; j < contadorMonedas[i] && change - conversion[i][1] >= 0; j++) {
          change -= conversion[i][1];
          change = change.toFixed(2); 
          total -= conversion[i][1];
          total = total.toFixed(2); 
          sum += conversion[i][1];
        }
  
        let auxiliaryArr = [conversion[i][0], Number(sum.toFixed(2))];
        changeArr.push(auxiliaryArr);
      }
    }
    
  
    if (change == 0 && total > 0) {
      for (let i = 0; i < changeArr.length; i++) {
        if (changeArr[i + 1] && changeArr[i + 1][0] == changeArr[i][0]) {
          delete changeArr[i];
        }
      }
      changeArr = changeArr.filter(function (el) {
        return el != null;
      });
      return { status: "OPEN", change: changeArr };
    } else if (change == 0 && total == 0) {
      return { status: "CLOSED", change: cid };
    } else if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])  
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])   
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])  
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])  