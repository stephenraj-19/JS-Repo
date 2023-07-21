function getDaysInMonth(month, year) {
    const isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear) {
      daysInMonth[1] = 29;
    }
    return daysInMonth[month - 1];
  }
  console.log(getDaysInMonth(1, 2012)); // 31
  console.log(getDaysInMonth(2, 2012)); // 29
  console.log(getDaysInMonth(9, 2012)); // 30
  console.log(getDaysInMonth(12, 2012)); // 31