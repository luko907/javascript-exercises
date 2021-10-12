"use strict";

function BinaryToDecimal(num) {
  const arr = num.split("");
  const pos = arr.length - 1;
  let decimal = 0;

  for (let i = 0; i < arr.length; i++) {
    decimal += arr[i] * 2 ** pos;
    pos--;
  }
  return decimal;
}

function DecimalToBinary(num) {
  let array = [];
  while (num > 0) {
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return array.join("");
}
