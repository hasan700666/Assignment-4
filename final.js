function totalFine(fare) {
  if (typeof fare != "number" || fare <= 0) {
    return "Invalid";
  } else {
    let result = fare + fare * (20 / 100) + 30;
    return result;
  }
}

function onlyCharacter(str) {
  if (typeof str != "string") {
    return "Invalid";
  } else {
    str = str.replaceAll(" ", "");
    str = str.toUpperCase();
    return str;
  }
}
