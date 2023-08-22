let apiUser= 'https://64e3388cbac46e480e786991.mockapi.io/stogares';

const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', async ()=>{
    await getUser(handleLogin)
});

const signUpBtn =document.querySelector('#signup-btn');
signUpBtn.onclick= ()=>{
    handleCreateForm();
    
}

const btnChangeForward = [
    document.querySelector('#signup-f'),
    document.querySelector('#login-f')
]
const form = document.querySelectorAll(".form")

btnChangeForward[0].onclick = (e)=>{
    form[0].classList.remove("active")
    form[1].classList.add("active")
}

btnChangeForward[1].onclick = (e)=>{
    form[1].classList.remove("active")
    form[0].classList.add("active")
}

async function getUser(callback){
    await fetch(apiUser)
        .then((response)=>response.json())
        .then(callback)
}
function handleLogin(data){
    let check=true
    let uname_login=document.querySelector('#uname_login').value;
    let pw_login=document.querySelector('#pw_login').value;
    let ok=false;
    data.forEach(item => {
       
       if(item.username===''){
            ok=true;
            return;  
       }
        if(item.username==uname_login && item.password==pw_login){       
            localStorage.setItem("user",item.username);
            localStorage.setItem("id",item.id);
            window.location.href="./dasdboard.html";
            check=false;
        }
    });
   
    if(check){   
       alert('Tài khoản hoặc mật khẩu không chính xác')
    }
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
    let uname_signup=document.querySelector('#uname_signup').value;
    let pw_signup=document.querySelector('#pw_signup').value;
    let pw2_signup= document.querySelector('#pw2_signup').value;
    let user= {
       username: uname_signup,
       password: pw_signup,
        income:[],
        expense:[]
    }
    fetch(apiUser).then(res=>res.json()).then(data=>{
        if(data.length===0){
            createUser(user)
            alert("Đăng ký thành công")
        }
        else{
            let check=true;
            for(let i=0; i<data.length; i++){
                if(uname_signup==data[i].username){
                    alert("Tài khoản này đã tồn tại!!!");
                    check=false;
                }
                else if(pw_signup!=pw2_signup){
                    alert('Mật khẩu không trùng khớp')
                    check=false;
                }
            }
            if(check){
                createUser(user);
                alert("Đăng ký thành công")
            }
        }
    });
   
   
}

function add_active() {
    form[1].classList.add("active");
}