function month_name(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = date.getMonth();
    return monthNames[month];
  }
  console.log(month_name(new Date("10/11/2009")));
  
  console.log(month_name(new Date("11/13/2014")));