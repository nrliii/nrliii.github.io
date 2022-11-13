function check(form) {
    if(form.userid.value == "admin" && form.pswrd.value == "admin")
        {
        location.href = 'destination.html';
        }
    else if(form.userid.value == "lukexog" && form.pswrd.value == "123456")
        {
        location.href = 'https://www.youtube.com/c/Lukexog';
        }
    else
        {
        alert("Error Password or Username Required");
        }
    }