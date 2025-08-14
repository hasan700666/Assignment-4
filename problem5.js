function resultReport(marks) {
  if (Array.isArray(marks) == true) {
    let sum = 0;
    let passMark = 0;
    let failMark = 0;
    for (let i = 0; i < marks.length; i++) {
      sum = sum + marks[i];
      if (marks[i] >= 40) {
        passMark = passMark + 1;
      } else {
        failMark = failMark + 1;
      }
    }
    let finalMark = 0;
    finalMark = Math.round(sum / marks.length);
    finalMark = finalMark || 0;
    return { finalScore: finalMark, pass: passMark, fail: failMark };
  } else {
    return "Invalid";
  }
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
