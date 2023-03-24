var generate = document.getElementById("generate");

generate.addEventListener("click", async () => {

    var charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var newpassword = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        newpassword += charset.substring(randomNumber, randomNumber +1);
    }

    var text = document.getElementById('password');

    text.value = newpassword;
});

var copy = document.getElementById("copy");

copy.addEventListener("click", async () => {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
})