function isNatural(n) {
    if (typeof n !== 'number') {
      return false;
    }
    return (n >= 0 && Math.floor(n) === n && n !== Infinity);
  }
  console.log(isNatural(-15)); // false
  console.log(isNatural(1)); // true
  console.log(isNatural(10.22)); // false
  console.log(isNatural(10/0)); // false
  