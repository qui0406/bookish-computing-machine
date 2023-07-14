let apiUser= '  http://localhost:3000/users';

function signup(){
    handleCreateForm()
}

function createUser(data, callback){
    fetch(apiUser, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
    })
        .then(function(res){
            return res.json();
        })
        .then(callback)
}

function handleCreateForm(){
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    let confirm= document.querySelector('#confirm').value;
    let user= {
        username:username,
        password:password,
    }
    if(password!=confirm){
        alert('Mật khẩu không trùng khớp')
        return;
    }
    createUser(user);
}