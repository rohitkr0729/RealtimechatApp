document.getElementById('loginBtn').addEventListener("click", usr1Check);
document.getElementById('loginBtn2').addEventListener("click", usr2Check);








function usr1Check()
{
  let txtPwd=document.getElementById('usr1textBox').value;
  if (txtPwd=="1234")
  {
    document.getElementById('mobile1').style.display="none";
    document.getElementById("usr1ChatBox").style.display="block";

  }
  else 
  {
    document.getElementById('password').innerHTML="Incorrect Password";
    document.getElementById('password').style.color="red";
  	//alert("Invalid Login Detail!");
  	document.getElementById("usr1textBox").value="";
  	document.getElementById('usr1textBox').focus();
  }
  
}


function usr2Check()
{
  let txtPwd=document.getElementById('usr2textBox').value;
  if (txtPwd=="1212")
  {
    document.getElementById('mobile2').style.display="none";
    document.getElementById("usr2ChatBox").style.display="block";

  }
  else 
  {
    document.getElementById('password2').innerHTML="Incorrect Password";
    document.getElementById('password2').style.color="red";
  	//alert("Invalid Login Detail!");
  	document.getElementById("usr2textBox").value="";
  	document.getElementById('usr2textBox').focus();
  }
  
}

