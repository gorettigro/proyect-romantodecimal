const romanMap = new Map();
  romanMap.set(1000, 'M');
  romanMap.set(900, 'CM');
  romanMap.set(500, 'D');
  romanMap.set(400, 'CM');
  romanMap.set(100, 'C');
  romanMap.set(90, 'XC');
  romanMap.set(50, 'L');
  romanMap.set(40, 'XL');
  romanMap.set(10, 'X');
  romanMap.set(9, 'IX');
  romanMap.set(5, 'V');
  romanMap.set(4, 'IV');
  romanMap.set(1, 'I');
    
export const int_2_roman = (int) => {
  let str = '';
  for (let [key, value] of romanMap.entries()) {
    while (int >= key) {
      str += value;
      int -= key;
    }
  }
  return str;
}

export const roman_2_int = (str) => {
  const romanObj = Object.fromEntries(romanMap)
  const n = str.length;

  const num = (chr) => +Object.keys(romanObj).find(key => romanObj[key] === chr)
  
  let total = num(str[n - 1])

  //de dch a izq
  for (let i = n - 2; i >= 0; i--) {
    if (num(str[i]) >= num(str[i+1])) {
        total += num(str[i])
    } else {
        total -= num(str[i])
    }
  }
  return total;
}
