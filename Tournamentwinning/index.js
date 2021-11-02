const HOME_TEAM = 1;
function tournamentWinner(competitions, results) {
  // Write your code here.
  let winMapping = {};
  const winner = { max: 0, team: "" };
  for (let i = 0; i < competitions.length; i++) {
    let [homeTeam, awayTeam] = competitions[i];
    let isWon = results[i];
    let winningTeam = isWon === HOME_TEAM ? homeTeam : awayTeam;

    if (winMapping[winningTeam]) {
      let updatedCount = (winMapping[winningTeam] += 1);
      winMapping[winningTeam] = updatedCount;
      if (winner["max"] < updatedCount) {
        winner["max"] = updatedCount;
        winner["team"] = winningTeam;
      }
    } else {
      winMapping[winningTeam] = 1;
    }
  }
  return winner["team"];
}


exports.tournamentWinner = tournamentWinner;
