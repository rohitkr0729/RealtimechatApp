document.getElementById('remove1').addEventListener("click", removedata);
document.getElementById('remove2').addEventListener("click", removedata2);

function removedata()
{
  const remove=document.getElementById('usr1textBox').value;
  const rem=remove.slice(0,-1);
  document.getElementById('usr1textBox').value=rem;
}

function removedata2()
{
  const remove=document.getElementById('usr2textBox').value;
  const rem=remove.slice(0,-1);
  document.getElementById('usr2textBox').value=rem;
  
}


