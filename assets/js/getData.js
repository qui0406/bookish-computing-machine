let dataUser;
async function checklogin(){
    await fetch('https://64e3388cbac46e480e786991.mockapi.io/stogares').then(res=>res.json()).then(data=>{
        let user=localStorage.getItem("user");
        let ok=false;
        for(let i of data){
            if(i["username"]===user){
                ok=true;
                dataUser=i;
                break;
            }
        }
        if(!ok){
            window.location.href="./login.html"
        }
    })
}


window.onload=async()=>{

    await checklogin();
    
    app();
}