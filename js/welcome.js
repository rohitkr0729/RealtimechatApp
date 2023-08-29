document.getElementById('button1').addEventListener("mouseover", biggerbtn);
document.getElementById('button1').addEventListener("mouseout", smallbtn);
document.getElementById('welcome').addEventListener("mouseover", headingshow);
document.getElementById('welcome').addEventListener("mouseout", headinghide);

function biggerbtn()
{
    document.getElementById('button1').style.fontSize="22px";
    document.getElementById('button1').style.height="42px";
    document.getElementById('button1').style.background="blue";
}
function smallbtn()
{
    document.getElementById('button1').style.fontSize="20px";
    document.getElementById('button1').style.height="40px";
    document.getElementById('button1').style.background="darkred"; 
}
function headingshow()
{
    document.getElementById('heading').innerHTML="Welcome To Realtime Live Chating APP"
}
function headinghide()
{
    document.getElementById('heading').innerHTML="";

}










document.getElementById('button1').addEventListener("click", showmobile);
function showmobile()
{
    document.getElementById('showpassmobile').style.display="block";
    document.getElementById('welcomepage').style.display="none";
    document.getElementById('backgroundset').style.backgroundImage="url(https://wallpaperaccess.com/full/82825.jpg)";
}








document.getElementById('display').addEventListener("click", displayon);
function displayon()
{
    //alert("hiii");
    document.getElementById('displayon1').style.display="block";
    document.getElementById('displayon1').style.backgroundImage="url(https://e0.pxfuel.com/wallpapers/703/50/desktop-wallpaper-top-95-shiv-ji-lord-shiva-siba-thumbnail.jpg)";
    document.getElementById('displaybutton').style.marginTop="2px";
}

document.getElementById('display2').addEventListener("click", displayon2);
function displayon2()
{
    //alert("hiii");
    document.getElementById('displayon2').style.display="block";
    document.getElementById('displayon2').style.backgroundImage="url(https://e0.pxfuel.com/wallpapers/450/268/desktop-wallpaper-jay-hanuman-bajrangbali-thumbnail.jpg)";
    document.getElementById('displaybutton2').style.marginTop="2px";
}















