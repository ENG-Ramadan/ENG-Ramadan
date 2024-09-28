function login(){
    var us=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    console.log(us);
    console.log(pass);
    if(us=="relgbaly7@gmail.com"&&pass==712004712004){
        alert("LOG IN SUCCESS");
        window.location.assign("home_page.html");
    }else{
        alert("LOG IN FAILD");

    }

}