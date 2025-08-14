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

console.log(
  bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
  )
);

console.log(
  bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
  )
);
console.log(
  bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
  )
);
console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
