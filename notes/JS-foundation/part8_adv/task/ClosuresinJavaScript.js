function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function rateLimiter(fn, limit) {
  let canCall = true;
  return function (...args) {
    if (canCall) {
      canCall = false;
      setTimeout(() => {
        canCall = true;
      }, limit);
      return fn(...args);
    } else {
      return "Rate limit exceeded";
    }
  };
}

function memoize(fn) {
  const cache = {}; // store results

  return function (...args) {
    const key = JSON.stringify(args); // create a unique key based on arguments
    if (cache[key]) {
      console.log("Returning cached result");
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result; // save result in cache
      console.log("Computing new result");
      return result;
    }
  };
}
