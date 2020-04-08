var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();

counter();
counter();
counter();
counter();

console.log( counter() ); 


