

// Get height for each cilinder
// Check and get the max height from 1 of the 3 stacks
// loop while the heights are not equal
// Pop element from the stack with the largest height value

function equalStacks(s1 = [], s2 = [], s3 = []) {
  let h1 = calculateHeight(s1);
  let h2 = calculateHeight(s2);
  let h3 = calculateHeight(s3);

  let maxHeight = getMaxHeight([h1, h2, h3]);

  while (!areEqual(h1, h2, h3)) {
    if (maxHeight === h1) {
      h1 -= s1.pop();
    } else if (maxHeight === h2) {
      h2 -= s2.pop();
    } else if (maxHeight === h3) {
      h3 -= s3.pop();
    }
    maxHeight = getMaxHeight([h1, h2, h3]);
  }

  return getMaxHeight([h1, h2, h3]);
}

console.log(equalStacks([1, 1, 1, 2, 3, 5], [1, 2, 3, 4], [1, 4, 1, 1]));

function getMaxHeight(heights = []) {
  return Math.max(...heights);
}

function calculateHeight(stack = []) {
  return stack.reduce(addValues, 0);
}

function addValues(prev, curr) {
  return prev + curr;
}

function areEqual(v1, v2, v3) {
  return v1 === v2 && v1 === v3;
}

function equalStacksShift(s1 = [], s2 = [], s3 = []) {
  let h1 = calculateHeight(s1);
  let h2 = calculateHeight(s2);
  let h3 = calculateHeight(s3);

  let maxHeight = getMaxHeight([h1, h2, h3]);

  while (!areEqual(h1, h2, h3)) {
    if (maxHeight === h1) {
      h1 -= s1.shift();
    } else if (maxHeight === h2) {
      h2 -= s2.shift();
    } else if (maxHeight === h3) {
      h3 -= s3.shift();
    }
    maxHeight = getMaxHeight([h1, h2, h3]);
  }

  return getMaxHeight([h1, h2, h3]);
}

console.log(equalStacksShift([5, 3, 2, 1, 1, 1], [4, 3, 2, 1], [1, 1, 4, 1]));
