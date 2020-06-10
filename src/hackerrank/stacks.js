
// Get height for each cilinder
// Check the new height of a cilinder if last element is poped from the stack
//

// we have 3 other accumulators in which from the current height we remove last element and check the value in this way
// we need to compare the results of each stack, if they are equal, we return
// if not, we need to remove more items and then comapre again
//

// function equalStacks (s1 = [], s2 = [], s3 = []) {
//   const h1 = s1.reduce(addValues, 0);
//   const h2 = s2.reduce(addValues, 0);
//   const h3 = s3.reduce(addValues, 0);

//   let acc1 = h1;
//   let acc2 = h2;
//   let acc3 = h3;

//   const arr = [s1, s2, s3];
//   let count = 0;
//   let maxValue = 0;
//   let aux = 0;

//   while (!areEqual(acc1, acc2, acc3)) {
//     if (count > 2) count = 0;
//     const stack = arr[count];

//     if (maxValue === acc1 || count === 0) {
//       acc1 -= stack.pop();
//       aux = acc1;
//     } else if (maxValue === acc2 || count === 1) {
//       acc2 -= stack.pop();
//       aux = acc2;
//     } else if (maxValue === acc3 || count === 2) {
//       acc3 -= stack.pop();
//       aux = acc3;
//     }

//     if (aux > maxValue) maxValue = aux;

//     count++;
//   }
// }

// 5, 5, 6
// 5, 5, 5
// console.log(equalStacks([1, 1, 1, 2, 3], [2, 3, 4], [1, 4, 1, 1]));

// function addValues (prev, curr) {
//   return prev + curr;
// }

// function areEqual (v1, v2, v3) {
//   return v1 === v2 && v1 === v3;
// }

// idea
// acc1 = acc1 - s1.pop();

// if (areEqual(acc1,acc2,acc3)) {
//   return acc1;
// }

// acc2 = acc2 - s2.pop();

// if (areEqual(acc1,acc2,acc3)) {
//   return acc2;
// }

// acc3 = acc3 - s3.pop();

// if (areEqual(acc1,acc2,acc3)) {
//   return acc3;
// }

function sumUpArray (stack) {
  let counter = 0;
  for (let i = 0; i < stack.length; i++) {
    counter += stack[i];
  }
  return counter;
}

// 1) We pick the minHeight
// 2) We see if all the stacks can go there
// 3.1) If not, we need to see what's the highest number that we could obtain that is lower than previous hieght if we remove elements from any stack.
// 3.2) If yes, remove from those that need it and that's the result
// 4) Repeat 1
// 5) Repeat 3.1

function couldBeOfSpeicificHeight (stack, minHeight) {
  for (let i = 0; i < stack.length; i--) {
    if (stack[i] === minHeight) {} else {
      return false;
    }
  }
  return true; // or false
}
console.log(couldBeOfSpeicificHeight([3, 2, 2]));

function stacks (s1 = [], s2 = [], s3 = []) {
  const sumStackone = sumUpArray(s1);
  const sumStackTwo = sumUpArray(s2);
  const sumStackThree = sumUpArray(s3);
  const minHeight = Math.min(sumStackone, sumStackTwo, sumStackThree);
  console.log(minHeight);
  if (couldBeOfSpeicificHeight(s1, minHeight) && couldBeOfSpeicificHeight(s2, minHeight) && couldBeOfSpeicificHeight(s3, minHeight));
  return minHeight;
}

console.log(stacks([1, 1, 1, 2, 3], [2, 3, 4], [1, 4, 1, 1]));
