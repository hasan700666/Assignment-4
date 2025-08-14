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

function bestTeam(player1, player2) {
  if (typeof player1 != "object" || typeof player2 != "object") {
    return "Invalid";
  } else {
    let All_foul1 = player1.foul + player1.cardY + player1.cardR;
    let All_foul2 = player2.foul + player2.cardY + player2.cardR;

    if (All_foul1 < All_foul2) {
      return player1.name;
    } else if (All_foul1 > All_foul2) {
      return player2.name;
    } else {
      return "Tie";
    }
  }
}
