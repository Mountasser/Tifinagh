const nums = {
    0: "ⴰⵎⵢⴰ",
    1: "ⵢⴰⵏ",
    2: "ⵙⵉⵏ",
    3: "ⴽⵕⴰⴹ",
    4: "ⴽⴽⵓⵥ",
    5: "ⵙⵎⵎⵓⵙ",
    6: "ⵚⴹⵉⵚ",
    7: "ⵙⴰ",
    8: "ⵜⵜⴰⵎ",
    9: "ⵜⵜⵥⴰ",
    10: "ⵎⵔⴰⵡ",
    20: "(ⵙⵉⵎⵔⴰⵡ / ⴰⴳⵏⴰⵔ)",
    30: "ⴽⵕⴰⵎⵔⴰⵡ",
    40: "ⴽⴽⵓⵥⵎⵔⴰⵡ",
    50: "ⵙⵎⵎⵓⵙⵎⵔⴰⵡ",
    60: "ⵚⴹⵉⵚⵎⵔⴰⵡ",
    70: "ⵙⴰⵎⵔⴰⵡ",
    80: "ⵜⵜⴰⵎⵎⵔⴰⵡ",
    90: "ⵜⵜⵣⴰⵎⵔⴰⵡ",
    100: "ⵜⵉⵎⵉⴹⵉ",
    200: "ⵙⵏⴰⵜ ⵏ ⵜⵉⵎⵎⴰⴹ",
    300: "ⴽⵕⴰⵜ ⵏ ⵜⵉⵎⵎⴰⴹ",
    400: "ⴽⴽⵓⵥ ⵏ ⵜⵉⵎⵎⴰⴹ",
    500: "ⵙⵎⵎⵓⵙ ⵏ ⵜⵉⵎⵎⴰⴹ",
    600: "ⵚⴹⵉⵚ ⵏ  ⵜⵉⵎⵎⴰⴹ",
    700: "ⵙⴰ ⵏ ⵜⵉⵎⵎⴰⴹ",
    800: "ⵜⵜⴰⵎ ⵏ ⵜⵉⵎⵎⴰⴹ",
    900: "ⵜⵜⵣⴰⵜ ⵏ ⵜⵉⵎⵎⴰⴹ",
    1000: "ⵉⴼⴹ",
    1000000: "ⴰⴳⵏⴷⵉⴷ",
    1000000000: "ⵎⵍⵢⴰⵕ",
    '.': "ⵜⵉⵙⴽⵔⵜ",
    '-': "ⵓⵣⴷⵉⵔ"
  };
  export const n2w = (n) => {
  n= Number(n.toString().replace(',','.'));  
    if (n < 0) {
      return nums["-"] + ", " + n2w(-1 * n);
    }
    if (Number.isInteger(n)) {
      if (n in nums) {
        return nums[n];
      } else {
        if (n % 1000 == 0 && n < 1000000) {
          return n2w(parseInt(n / 1000)) + " ⵏ " + nums[1000] + "ⵏ";
        }
        if (n % 1000000 == 0 && n < 1000000000) {
          return n2w(parseInt(n / 1000000)) + " ⵏ ⵉⴳⵏⴷⵉⴷⵏ";
        }
        if (n % 1000000000 == 0 && n < 1000000000000) {
          return n2w(parseInt(n / 1000000000)) + " " + nums[1000000000]
        }
        if (n > 10 && n < 20) {
          return nums[n % 10] + " ⴷ " + n2w(parseInt(n / 10) * 10);
        } else if (n > 20 && n < 100) {
          return nums[parseInt(n / 10) * 10] + " ⴷ " + n2w(n % 10);
        } else if (n > 100 && n < 1000) {
          return nums[parseInt(n / 100) * 100] + " ⴷ " + n2w(n % 100);
        } else if (n > 1000 && n < 1000000) {
          return n2w(parseInt(n / 1000) * 1000) + " ⴷ " + n2w(n % 1000);
        } else if (n > 1000000 && n < 1000000000) {
          return n2w(parseInt(n / 1000000) * 1000000) + " ⴷ " + n2w(n % 1000000);
        } else if (n > 1000000000 && n < 1000000000000) {
          return n2w(parseInt(n / 1000000000) * 1000000000) + " ⴷ " + n2w(n % 1000000000);
        } else {
          return 'too large';
        }
      }
    } else {
  
  
      let st = n.toString().split(".")
      let a = parseInt(st[0])
      let b = parseInt(st[1])
      if (a == 0 && b == 5) {
        return 'ⴰⵣⴳⵏ'
      }
      if (b == 5) {
        return n2w(parseInt(st[0])) + " ⴷ ⵓⵣⴳⵏ"
      } else {
        return n2w(parseInt(st[0])) + " " + nums["."] + " " + n2w(parseInt(st[1]));
      }
    }
  
  
  }