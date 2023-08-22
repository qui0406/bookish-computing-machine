let prevents= document.querySelectorAll('aside ul li a');
let tmp;
var tmpEx;

let asideMenu=document.querySelector('#main aside');
let opacity=document.querySelector('.box_opacity');

let taskBar=document.querySelector('nav .showTask_bar');
taskBar.onclick=function(){
    opacity.classList.remove('hide')
    asideMenu.classList.toggle('animate__slideOutLeft');
    asideMenu.classList.add('animate__slideInLeft');
}
opacity.onclick=()=>{
    opacity.classList.add('hide')
    asideMenu.classList.add('animate__slideOutLeft');

}

let hea=document.querySelector('nav');
hea.scrollIntoView(true);

let asi=document.querySelector('aside');
asi.scrollIntoView(true);

let infoUser = {
    "name":localStorage.getItem('user'),
    "id":localStorage.getItem("id")
};

for(let prevent of prevents){
    prevent.addEventListener('click', (e)=>{
        e.preventDefault();
    })   
}

const grogress=document.querySelector('main .grogress');
let grogress_icon=document.querySelector('main .grogress i');

function loadTimeOut(){
    grogress.classList.add('active');
    grogress_icon.classList.add('active');

    setTimeout(()=>{
        grogress.classList.remove('active');
        grogress_icon.classList.remove('active');
        localStorage.clear();
        window.location='./trangBia.html';
    }, 2000);
}

let img_nav=document.querySelector('#sub_nav .img_nav');
let nav= document.querySelector('nav');
let aside=document.querySelector('aside');
let main=document.querySelector('#main')

if(document.getElementById('main').offsetWidth>800){
    window.onscroll=()=>{
        if(window.scrollY>=img_nav.clientHeight-2){
            nav.style.position='fixed';
            aside.style.display='flex';
            main.style.marginTop=`${nav.offsetHeight}px`;
            asideMenu.classList.remove('animate__slideOutLeft');
            asideMenu.classList.add('animate__slideInLeft');
        }
        else{
            main.style.marginTop=0;
            nav.style.position='static';
            asideMenu.classList.remove('animate__slideInLeft');
            asideMenu.classList.add('animate__slideOutLeft');
        }
    }
}
else{
    window.onscroll=()=>{
        if(window.scrollY>=img_nav.clientHeight-2){
            nav.style.position='fixed';
            aside.style.display='flex';
            main.style.marginTop=`${nav.offsetHeight}px`;
        }
        else{
            main.style.marginTop=0;
            nav.style.position='static';
            asideMenu.classList.remove('animate__slideInLeft');
            asideMenu.classList.add('animate__slideOutLeft');
        }
    }
}


let accountUser=document.querySelector('nav > div >div');
accountUser.innerText=localStorage.getItem('user');
// hien submenu and change icon
document.querySelectorAll('#main ul.menu > li').forEach((item, index)=>{
    item.querySelector('div').onclick=()=>{
        const show_submenu=document.querySelector(`#main ul.menu > li:nth-child(${index+1}) .submenu`);
        show_submenu.classList.toggle('open_submenu');
        const changeIcon = document.querySelector(`#main ul.menu li:nth-child(${index+1}) div > i`);
        changeIcon.classList.toggle('fa-angle-right')
        changeIcon.classList.toggle('fa-angle-down')
    }
})


// logout
const btnLogout= document.querySelector('.menu li .logout');
const showLogout= document.querySelector('div.showlogout');

function showTableLogout(){
   showLogout.classList.add('show');
}
function hideTableLogout(){
    showLogout.classList.remove('show');
}
btnLogout.addEventListener('click', showTableLogout);
const no=document.querySelector('main .showlogout button.no');
no.addEventListener('click',hideTableLogout);

const exitLogout=document.querySelector('.showlogout #logout >a');

exitLogout.onclick=()=>{
    showLogout.classList.remove('show');
}



