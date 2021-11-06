function nonConstructibleChange(coins=[]) {
  coins.sort((a,b)=>a-b);
  let currentChnage=0;
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    if(coin>currentChnage+1){
      return currentChnage+1;
    }
    currentChnage+=coin;
  }
  return currentChnage+1;
}

exports.nonConstructibleChange = nonConstructibleChange;
