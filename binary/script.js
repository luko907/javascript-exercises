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

function DecimalToBinary(num) {}
