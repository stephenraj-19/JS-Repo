function curday(symbol) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    return `${month}${symbol}${day}${symbol}${year}`;
  }
   console.log(curday("*"));
   console.log(curday("-"));