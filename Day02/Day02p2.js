const { Console } = require("console");
const fs = require("fs");
contents = fs
  .readFileSync(
    "C:/Users/lloyd/Desktop/Coding/web development/Advent of Code 2023/Day02/input.txt",
    "utf-8"
  )
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", ""));

//regex patterns for finding color counts
const redFinder = /(\d+) red/g;
const blueFinder = /(\d+) blue/g;
const greenFinder = /(\d+) green/g;

function partTwoSolve() {
  let RunningSum = 0;
  for (x = 0; x < contents.length; x++) {
    let stringIsolate = contents.slice(x, x + 1).join("");

    //extracting useful components of each string
    let ListOfRedValues = stringIsolate.match(redFinder);
    let ListOfBlueValues = stringIsolate.match(blueFinder);
    let ListofGreenValues = stringIsolate.match(greenFinder);

    //processing lists of type str color values into type int arrays
    let redIntList = ListOfRedValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );
    let blueIntList = ListOfBlueValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );
    let greenIntList = ListofGreenValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );

    //enumerate over the array, find the max number (which is the minimum number of cubes)
    let redMin = Math.max(...redIntList);
    let blueMin = Math.max(...blueIntList);
    let greenMin = Math.max(...greenIntList);

    //finding the color power and summing it all up
    let lineColorPower = redMin * blueMin * greenMin;
    RunningSum += lineColorPower;
  }
  console.log(RunningSum);
}

partTwoSolve();
