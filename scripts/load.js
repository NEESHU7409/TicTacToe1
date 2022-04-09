window.addEventListener("load", askUserName);
function askUserName() {
  let firstPlayer = prompt("Enter First Player Name ", "");
  let secondPlayer = prompt("Enter Second Player Name ", "");
  document.getElementById(
    "player1"
  ).innerText = `First Player ${firstPlayer}`;
  document.getElementById(
    "player1"
  ).value = firstPlayer;
  document.getElementById(
    "player2"
  ).innerText = `Second Player ${secondPlayer}`;
  document.getElementById(
    "player2"
  ).value = secondPlayer;
}
