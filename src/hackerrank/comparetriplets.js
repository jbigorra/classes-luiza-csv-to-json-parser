// Alice and Bob created a problem in HR, rewievers rate both challenges awarding points in 3 categories.
// alice score = (1,2,3) bob score = (3,2,1)
// comparison: compare EACH rate, a[value]>b[value] 1 point for Alice, a<b 1 point for Bob;
// a = b no points
// compare points in the total points each earned and present it
// in an array where Alice is first, Bob is 2nd. like this: [1, 1] meaning 1 pt for Alice, 1 pt for Bob

function compareTriplets (a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    } else {
      continue;
    }
  }
  return [aliceScore, bobScore];
}

compareTriplets([1, 3, 5], [0, 2, 1]);
