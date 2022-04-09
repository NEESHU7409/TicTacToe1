window.addEventListener("load", bindEvents);
// Buttons Attach Event Listener 
function bindEvents() {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", printXorZero);
    buttons[i].addEventListener("click",alertfun);
  }
}
var isXorZero = true;
function printXorZero() {
  // print on Button, On Which Button
  console.log(this); // this is a reserved keyword and it hold the current calling object reference
  this.innerText = isXorZero ? "X" : "0";
  this.value=isXorZero?"X" :"0";
  if(this.value=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Turn`;
  }
  else if(this.value=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Turn`;
  }

  isXorZero = !isXorZero;
  //this.disabled=true;
  console.log(this.value);
}
function alertfun(){
  var b1=document.getElementById("bt1").value;
  var b2=document.getElementById("bt2").value;
  var b3=document.getElementById("bt3").value;
  var b4=document.getElementById("bt4").value;
  var b5=document.getElementById("bt5").value;
  var b6=document.getElementById("bt6").value;
  var b7=document.getElementById("bt7").value;
  var b8=document.getElementById("bt8").value;
  var b9=document.getElementById("bt9").value;
  //checking for player 1
  if(b1=='X' && b5=='X' && b9==='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt2").disabled=true;

  }
  else if(b3=='X' && b5=='X' && b7=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }

  else if(b1=='X' && b2=='X' && b3=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b4=='X' && b5=='X' && b6=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    window.alert("player x won");
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b7=='X' && b8=='X' && b9=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    window.alert("player x won");
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt3").disabled=true;
  }
  else if(b1=='X' && b4=='X' && b7=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    window.alert("player x won");
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b2=='X' && b5=='X' && b8=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    window.alert("player x won");
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b3=='X' && b6=='X' && b9=='X'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player1").value} Won`;
    window.alert("player x won");
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt2").disabled=true;
  }
 else if(b1=='0' && b2=='0' && b3=='0'){
  document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player 0  Won");
    document.getElementById("print").innerHTML="player x won";
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b4=='0' && b5=='0' && b6=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player 0 won");
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b7=='0' && b8=='0' && b9=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player 0 won");
      document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt3").disabled=true;
  }
  else if(b1=='0' && b4=='0' && b7=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player x won");
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b2=='0' && b5=='0' && b8=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player 0 won");
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt9").disabled=true;
  }
  else if(b3=='0' && b6=='0' && b9=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    window.alert("player 0 won");
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt5").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt2").disabled=true;
  }

 else if(b1=='0' && b5=='0' && b9==='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt3").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt7").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt2").disabled=true;

  }
  else if(b3=='0' && b5=='0' && b7=='0'){
    document.getElementById("print").innerHTML=`Player ${document.getElementById("player2").value} Won`;
    document.getElementById("bt4").disabled=true;
    document.getElementById("bt1").disabled=true;
    document.getElementById("bt6").disabled=true;
    document.getElementById("bt2").disabled=true;
    document.getElementById("bt8").disabled=true;
    document.getElementById("bt9").disabled=true;
  }

  //for match tie
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
  || b2 == '0') && (b3 == 'X' || b3 == '0') &&
  (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
  b5 == '0') && (b6 == 'X' || b6 == '0') &&
  (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
  b8 == '0') && (b9 == 'X' || b9 == '0')) {
      document.getElementById('print')
          .innerHTML = "Match Tie";
      window.alert('Match Tie');
}

}

function reset() {
  location.reload();
  document.getElementById('b1').value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';

}
