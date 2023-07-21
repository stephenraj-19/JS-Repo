function rand(min, max) {
    if (min === undefined) {
      min = 0;
    }
    if (max === undefined) {
      max = Number.MAX_SAFE_INTEGER;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }console.log(rand(15,15)); // 15
  console.log(rand(5,5)); // 5
  console.log(rand(1,1)); // 1
  console.log(rand(0,0)); // 0