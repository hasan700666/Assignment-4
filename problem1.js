function totalFine(fare) {
  if (typeof fare != "number" || fare <= 0) {
    return "Invalid";
  } else {
    let result = fare + fare * (20 / 100) + 30;
    return result;
  }
}

console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-52));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));

let a = "fdfgnfdnf fjbfgfabgfdu";

console.log(a.replace(" ", ""));
