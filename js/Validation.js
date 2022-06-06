function formValid() {
    let name = document.getElementById("i-1");
    let email = document.getElementById("i-3");
    let message = document.getElementById("i-4");
    let sendBtn = document.getElementById("send_message")

    if(nameValid(name))
    {
        if(emailValid(email))
        {
            if(messageValid(message))
            {
                sendBtn.disabled = false;
                return
            }
        }
    
    }

    sendBtn.disabled = true;
}


function nameValid(name) {
    if (name.value.length > 0)
    {
        return true;
    }
    
    alert("Name must be longer than 0 symbols");
    return false;
}

function emailValid(email) {
    let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(email.value.length <= 0){
        alert("Write email");
        return false;
    }

    if(!regex.test(String(email.value).toLowerCase())){
        alert("Invalid email");
        return false;
    }
    else {
        return true;
    }
}

function messageValid(message) {
    if (message.value != null)
    {
        return true;
    }

    alert("Write a message");
    return false;
}