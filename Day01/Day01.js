var fs = require('fs');

const newArr = fs.readFileSync('C:/Users/lloyd/Desktop/Coding/web development/Advent of Code 2023/Day01/input.txt', 'utf-8').trim().split("\n").map(lines => lines.replace("\r", ""));


function PartOneSolution(){

    let output = [];
    for (i = 0; i < newArr.length; i++){
        oneLine = newArr[i].split("")
        let numOne = oneLine.find((element) => !isNaN(element)) 
        let numTwo = oneLine.findLast((element) => !isNaN(element)) 
        output.push(numOne + numTwo)}

    FinalResult = output.map(str => parseInt(str, 10)).reduce((p, c) => {return p + c}, 0)
    console.log(FinalResult)
}
