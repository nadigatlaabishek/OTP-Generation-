var otpNum;
function otpGen()
{
    var num1=Math.floor(Math.random()*10)
    var num2=Math.floor(Math.random()*10)
    var num3=Math.floor(Math.random()*10)
    var num4=Math.floor(Math.random()*10)
    otpNum=String(num1)+String(num2)+String(num3)+String(num4);
    document.getElementById("otpwindow").style.display="flex"
    document.getElementById("otp").innerHTML=otpNum;

}
function comOtp()
{
    var userGivenOtp=document.getElementById("getOTP").value
    if (userGivenOtp==otpNum)
    {
        document.getElementById("result").innerHTML="Access Granted";
        document.getElementById("result").style.color="green"
    }
    else{
        document.getElementById("result").innerHTML="Access Denied";
        document.getElementById("result").style.color="red"
    }
}
function closeOtp()
{
    document.getElementById("otpwindow").style.display="none"
}