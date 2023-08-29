document.getElementById("msgusr1send").addEventListener("click", msgUsr1Send);
document.getElementById("msgusr2send").addEventListener("click", msgUsr2Send);
document.getElementById("msg1TextBox").addEventListener("focus", msgTyping);
document.getElementById("msg1TextBox").addEventListener("blur", msgTypingclr);
document.getElementById("msg2TextBox").addEventListener("focus", msgTyping2);
document.getElementById("msg2TextBox").addEventListener("blur", msgTypingclr2);



// Mobile chatbox open and sending mesages

function msgUsr1Send() {
  let mydata = document.getElementById("msg1TextBox").value;
  if (mydata == "") {
    document.getElementById("msg1TextBox").focus();
  }
  else {
    let myelm1 = document.createElement("p");

    myelm1.style.width = "200px";
    myelm1.style.backgroundColor = "#ceedd7";
    myelm1.style.padding = "5px";
    myelm1.style.borderRadius = "5px";
    myelm1.style.float = "right";
    myelm1.innerHTML = mydata;
    document.getElementById("usr1TextArea").appendChild(myelm1);
    myelm1.scrollIntoView(false);


    document.getElementById("msg1TextBox").value = "";
    let myelm2 = document.createElement("p");

    myelm2.style.width = "200px";
    myelm2.style.backgroundColor = "#e7ceed";
    myelm2.style.padding = "5px";
    myelm2.style.borderRadius = "5px";
    myelm2.style.float = "left";
    myelm2.innerHTML = mydata;

    setTimeout(Display2Data, 700);

    function Display2Data() {
      document.getElementById("usr2TextArea").appendChild(myelm2);
    }
  }

}








function msgUsr2Send() {

  let mydata1 = document.getElementById("msg2TextBox").value;
  if (mydata1 == "") {
    document.getElementById("msg2TextBox").focus();
  }
  else {
    let myelm3 = document.createElement("p");

    myelm3.style.width = "200px";
    myelm3.style.backgroundColor = "#e7f7da";
    myelm3.style.padding = "5px";
    myelm3.style.borderRadius = "5px";
    myelm3.style.float = "right";
    myelm3.innerHTML = mydata1;
    document.getElementById("usr2TextArea").appendChild(myelm3);
    myelm3.scrollIntoView(false);

    document.getElementById("msg2TextBox").value = "";
    let myelm4 = document.createElement("p");

    myelm4.style.width = "200px";
    myelm4.style.backgroundColor = "#ede9f7";
    myelm4.style.padding = "5px";
    myelm4.style.borderRadius = "5px";
    myelm4.style.float = "left";
    myelm4.innerHTML = mydata1;

    setTimeout(Display3Data, 700);

    function Display3Data() {
      document.getElementById("usr1TextArea").appendChild(myelm4);
    }
  }

}




function msgTyping() {
  document.getElementById("typmsg1").innerHTML = "Typing...";
}

function msgTypingclr() {
  document.getElementById("typmsg1").innerHTML = "Online";
}

function msgTyping2() {
  document.getElementById("typmsg2").innerHTML = "Typing...";
}

function msgTypingclr2() {
  document.getElementById("typmsg2").innerHTML = "Online";
}




