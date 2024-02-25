var fs = require("fs");

const newArr = fs
  .readFileSync(
    "C:/Users/lloyd/Desktop/Coding/web development/Advent of Code 2023/Day01/input.txt",
    "utf-8"
  )
  .trim()
  .split("\n")
  .map((lines) => lines.replace("\r", ""));

// this function will break if it is asked to process a string like 'eightwone' because there are no numbers to process.
// the function for part two does solve this issue, so I am leaving this issue in for learning purposes.
//fixing it would require a similar regular expression "filter" to process such strings like in the part two function
function PartOneSolve() {
  let output = [];

  //see part two function for documentation on this process
  for (i = 0; i < newArr.length; i++) {
    oneLine = newArr[i].split("");
    let numOne = oneLine.find((element) => !isNaN(element));
    console.log(numOne);
    let numTwo = oneLine.findLast((element) => !isNaN(element));
    console.log(numTwo);
    output.push(numOne + numTwo);
  }
  console.log(output);

  FinalResult = output
    .map((str) => parseInt(str, 10))
    .reduce((p, c) => {
      return p + c;
    }, 0);
  console.log(FinalResult);
}

function partTwoSolve() {
  //first pass through, catches numbers with shared letters
  let removedSharedLetterList = newArr.map((item) => {
    return item
      .replace(/oneight/g, "18")
      .replace(/twone/g, "21")
      .replace(/threeight/g, "38")
      .replace(/fiveight/g, "58")
      .replace(/sevenine/g, "79")
      .replace(/eightwo/g, "82")
      .replace(/eighthree/g, "83")
      .replace(/nineight/g, "98");
  });

  //second pass through, processes all the rest of the strings and turns them into numbers
  let fullConversionList = removedSharedLetterList.map((item) => {
    return item
      .replace(/one/g, "1")
      .replace(/two/g, "2")
      .replace(/three/g, "3")
      .replace(/four/g, "4")
      .replace(/five/g, "5")
      .replace(/six/g, "6")
      .replace(/seven/g, "7")
      .replace(/eight/g, "8")
      .replace(/nine/g, "9");
  });

  let p2Output = [];

  //this is exactly the same process as in part one's solution
  //loops through the list and takes each list item at a time
  //then it finds the first and last instance of a number and makes it p2Num1 and p2Num2 respectively
  //finally it pushes these variables, which are still strings, into a list as a concatenated pair
  for (let x = 0; x < fullConversionList.length; x++) {
    let partTwoSplitStr = fullConversionList[x].split("");
    let p2Num1 = partTwoSplitStr.find((element) => !isNaN(element));
    let p2Num2 = partTwoSplitStr.findLast((element) => !isNaN(element));
    p2Output.push(p2Num1 + p2Num2);
  }

  //for each item in the p2Output list, convert strings to proper numbers, before adding them all up and returning the sum
  FinalResult2 = p2Output
    .map((str) => parseInt(str, 10))
    .reduce((p, c) => {
      return p + c;
    }, 0);
  console.log(FinalResult2);
}

PartOneSolve(); // will return NaN, because the second string in input.txt is eightwothree and cant be processed
partTwoSolve(); // will return 281
