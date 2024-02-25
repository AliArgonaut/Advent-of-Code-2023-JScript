const fs = require("fs");
const contents = fs
  .readFileSync(
    "C:/Users/lloyd/Desktop/Coding/web development/Advent of Code 2023/Day02/input.txt",
    "utf-8"
  )
  .trim()
  .split("\n")
  .map((item) => item.replace("\r", ""));

const maxRed = 12;
const maxBlue = 14;
const maxGreen = 13;

function partOneSolve() {
  for (x = 0; x < contents.length; x++) {
    let section = contents.slice(x, x + 1);
    console.log(section);
  }
}

partOneSolve()