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

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) == true && Array.isArray(arr2) == true) {
    if (arr1.length == arr2.length) {
      let i = 0;
      while (i < arr1.length) {
        if (typeof arr1[i] == typeof arr2[i]) {
          if (arr1[i] == arr2[i]) {
            i++;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

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
