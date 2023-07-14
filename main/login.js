let apiUser= 'http://localhost:3000/users';
const warn= document.querySelector('.box .warning');
warn

function login(){
    getUser(handleLogin)
}

function getUser(callback){
    fetch(apiUser)
        .then((response)=>response.json())
        .then(callback)
}
function handleLogin(data){
    let check=true
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    data.forEach(item => {
        warn.classList.remove('show_warning');
        if(item.username==username && item.password==password){
            window.location.href="https://www.facebook.com/";
            check=false;
        }
    });
    if(check){
        warn.classList.add('show_warning');
       
    }
}

