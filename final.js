function totalFine(fare) {
  if (typeof fare != "number" || fare <= 0) {
    return "Invalid";
  } else {
    let result = fare + fare * (20 / 100) + 30;
    return result;
  }
}
