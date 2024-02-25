const fs = require("fs");
const contents = fs
  .readFileSync(
    "C:/Users/lloyd/Desktop/Coding/web development/Advent of Code 2023/Day02/input.txt",
    "utf-8"
  )
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", ""));

//constructing maximums
const maxRed = 12;
const maxBlue = 14;
const maxGreen = 13;

//regex patterns for finding game Id and color counts
const gameIdFinder = /Game (\d+):/;
const redFinder = /(\d+) red/g;
const blueFinder = /(\d+) blue/g;
const greenFinder = /(\d+) green/g;

function partOneSolve() {
  let RunningSum = 0;
  for (x = 0; x < contents.length; x++) {
    let stringIsolate = contents.slice(x, x + 1).join(""); //slice one item out of contents from index (x to x+1) and make it a string with .join('')

    //extracting useful components of each string
    let CurrentGameId = stringIsolate.match(gameIdFinder)[1]; //find the game Id by applying gameIdFinder regex to the current isolated string in the loop
    let ListOfRedValues = stringIsolate.match(redFinder);
    let ListOfBlueValues = stringIsolate.match(blueFinder);
    let ListofGreenValues = stringIsolate.match(greenFinder);

    //processing gameID to be an integer
    let NumericalGameId = parseInt(CurrentGameId, 10);

    //processing lists of color values into comparable integers
    let ExtractedRedInts = ListOfRedValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );
    let ExtractedBlueInts = ListOfBlueValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );
    let ExtractedGreenInts = ListofGreenValues.map((item) =>
      parseInt(item.match(/\d+/), 10)
    );

    //setting up if statement to enumerate lists of colors' numbers and compare each item to the color's max
    if (
      Math.max(...ExtractedRedInts) <= 12 &&
      Math.max(...ExtractedBlueInts) <= 14 &&
      Math.max(...ExtractedGreenInts) <= 13
    ) {
      RunningSum += NumericalGameId;
    } else {
      console.log(`${CurrentGameId} failed the test`);
    }
  }
  console.log(RunningSum);
}

partOneSolve();
