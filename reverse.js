const reverse = (input) => {
  let start = 0;
  let end = input.length - 1;
  let inputArr = input.split("");
  
  while (start < end) {
    let startValue = inputArr[start];
    let endValue = inputArr[end];
    if (startValue == " ") {
      start++;
      continue;
    } else if (endValue == " ") {
      end--;
      continue;
    } else {

      inputArr[start] =
        startValue == startValue.toUpperCase()
          ? endValue.toUpperCase()
          : endValue.toLowerCase();
          inputArr[end] =
        endValue == endValue.toUpperCase()
          ? startValue.toUpperCase()
          : startValue.toLowerCase();
      start++;
      end--;
    }
  }
  return inputArr.join("");
};

let input = "UPPER lower";
console.log(`reverse: ${reverse(input)}`);
