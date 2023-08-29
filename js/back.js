document.getElementById('delete').addEventListener("click", deletechat);
document.getElementById('delete2').addEventListener("click", deletechat2);

function deletechat()
{
  document.getElementById('usr1TextArea').remove();
  
}

function deletechat2()
{
  document.getElementById('usr2TextArea').remove();
  
}