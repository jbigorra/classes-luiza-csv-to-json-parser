// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.
// The function must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle height

function birthdayCakeCandles (ar) {
  let highestHeight = 0;
  let amountOfHighestCandles = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > highestHeight) {
      highestHeight = ar[i];
    }
  }

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === highestHeight) {
      amountOfHighestCandles++;
    }
  }
  console.log(amountOfHighestCandles);
}
birthdayCakeCandles([1, 5, 5, 5]);

// Fede's solution:

function segundo (ar) {
  let highestHeight = 0;
  const timesPerValue = [];

  for (let i = 0; i < ar.length; i++) {
    console.log('highestHeight', highestHeight);
    if (ar[i] > highestHeight) {
      highestHeight = ar[i];
      console.log('new highestHeight', highestHeight);
      timesPerValue[highestHeight] = 1;
      console.log('timesPerValue', timesPerValue);
    } else {
      if (ar[i] === highestHeight) timesPerValue[highestHeight]++;
    }
    console.log('timesPerValue[highestHeight]', timesPerValue[highestHeight]);
  }
  console.log('timesPerValue', timesPerValue);
  console.log(timesPerValue[highestHeight]);
}
segundo([1, 5, 5, 5]);
