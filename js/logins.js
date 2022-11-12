function check(form) {
    if(form.userid.value == "admin" && form.pswrd.value == "admin")
        {
        location.href = 'destination.html';
        }
    else
        {
        alert("Error Password or Username Required");
        }
    }