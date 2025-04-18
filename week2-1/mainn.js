const username = window.prompt("คุณชื่ออะไรครับ")

if (username !== null || username !==""){
    document.getElementById("show-name").innerText = "สวัสดี" + username;
}

function showUserAgent(){
    const userAgent = navigator.userAgent;
    window.alert("User Agent:" + userAgent);
}
function gotoyoutube(){
    window.open("https://www.youtube.com/");
}