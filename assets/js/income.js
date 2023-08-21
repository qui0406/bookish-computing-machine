const add= document.querySelector('#income .newIncome > input');
const tableIncome=document.querySelector('#income .tableIncome');

const exit1=document.querySelector('.tableIncome .inputTable > a');
const exit2=document.querySelector('.tableIncome .inputTable form input#closeIncome');

let indexofIn=[];

let searchIncome =document.getElementById('search');
let icon_searchIncome=document.querySelector('#income > label i');

function searchIn(){
    for(let i=0; i<dataUser.income.length; i++){
        icon_searchIncome.onclick=()=>{
           
            let ok=true;
            let check=true;
            dataUser.income.filter((data1)=>{
                if(searchIncome.value===''){
                    searchIncome.classList.add('err');
                    ok=false;
                    return;
                }
                if(data1.type.includes(`${search.value}`)){
                    let tmp=document.querySelector(`.list-id-${data1.id}`);
                    tmp.classList.add('err');
                    check=false;
                }   
           })
           if(!ok){
                alert("Chưa nhập thông tin tìm kiếm!");
           }        
           if(check){
            alert("Không tìm thấy thông tin!");
           }
        }
    }
}
        


const apiIncome=`https://64e3388cbac46e480e786991.mockapi.io/stogares/${infoUser.id}`;


let search =document.getElementById('search');
let icon_search=document.querySelector('#income > label >i');

fetch(apiIncome)
    .then(res=>res.json())
    .then(data=>{
        icon_search.onclick=()=>{
            let ok=true;
           data.income.filter((data1)=>{
                if(search.value===''){
                    search.classList.add('err');
                    return;
                }
                if(data1.type.includes(`${search.value}`)){
                    let tmp=document.querySelector(`.list-id-${data1.id}`);
                    tmp.classList.add('err');
                }   
           })          
        }
    })
function createIncome(data1){
    fetch(apiIncome,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let id;
        if(data.income.length===0){
            id=1;
        }
        else{
            id=data.income[data.income.length-1].id+1;
        }
        data1.id=id;
        data.income.push(data1);
        fetch(apiIncome,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(async res=>{
            await checklogin();
            display(dataUser);
            tableIncome.classList.add('hide');
            res.json()
        })
    })

}
function createHandleIncome(){
    let infors=document.querySelectorAll('.tableIncome .inputTable input');

    let selectIncome=document.querySelector('.tableIncome .inputTable select');

    let saveIncome=document.getElementById('saveIncome');

    let other=document.getElementById('others');

    saveIncome.onclick=()=>{
        let income={
            type: infors[0].value,
            money: infors[1].value,
            date: infors[2].value,
            note: infors[3].value,
            time: infors[4].value
        }
        if(income.type===''){
            infors[0].classList.add('err');
            return;
        }
        else{
            infors[0].classList.remove('err');
        }
        if(income.money===''){
            infors[1].classList.add('err');
            return;
        }
        else{
            infors[1].classList.remove('err');
        }
        if(income.date===''){
            infors[2].classList.add('err');
            return;
        }
        else{
            infors[2].classList.remove('err');
        }
        if(income.time===''){
            infors[4].classList.add('err');
            return;
        }
        else{
            infors[4].classList.remove('err');
        }
        createIncome(income);
        
    }
}

let status1=document.querySelector('.status');
let prev=document.querySelector('#income .prev');
let next=document.querySelector('#income .next');

let pageNum = 1;
let maxPage = 10

let table=document.querySelector('#income table tbody');

//delete
function deleteListincome(id){
    fetch(apiIncome,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let income=data.income;
        for(let i=0; i<income.length; i++){
            if(income[i].id===id){
                data.income.splice(i, 1);
                fetch(apiIncome,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                .then(async res=>{
                    await checklogin();
                    display(dataUser);
                
                    res.json()
                })
                break;
            }
        }
   })
}


//edit
function editListIncome(id, data1){
    fetch(apiIncome,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let income=data.income;
        for(let i=0; i<income.length; i++){
            if(income[i].id===id){
                let id=income[i].id;
                data1.id=id;
                data.income[i]=data1;
                fetch(apiIncome,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),

                })
                .then(async res=>{
                    await checklogin();
                    display(dataUser);
                    tableIncome.classList.add('hide');
                    res.json()
                }
                    )
                break;
            }
        }
   })
}

let sumValueIncome=0;
let sumTotalIncome=document.querySelector('#income table tfoot th:nth-child(2)');
let menuAsideIncome= document.querySelectorAll('aside ul.menu > li');
menuAsideIncome[0].onclick=()=>{
    window.location.href="./dasdboard.html";
}
menuAsideIncome[1].onclick=()=>{
    window.location.href="./income.html";
}
let seeExpenseIncome=document.querySelector('aside ul.menu > li ul.submenu li:last-child');
seeExpenseIncome.onclick=()=>{
    window.location.href="./expense.html";
}
menuAsideIncome[4].onclick=()=>{
    window.location.href="./graph.html";
}

function display(dataUser){
    sumValueIncome=0;
    for(let i=0; i<dataUser.income.length; i++){
        sumValueIncome+=parseFloat(dataUser.income[i].money);
    }
    sumTotalIncome.innerText=`${Intl.NumberFormat().format(sumValueIncome)} VND`
    const sumMoney=document.querySelector('#income h2 sub');
    sumMoney.innerHTML=`(Tổng tiền: <span style="color:red";>${Intl.NumberFormat().format(sumValueIncome)} VND</span>)`  
           
    let length=dataUser.income.length;
    length = (maxPage*pageNum > length) ? length : maxPage*(pageNum);
    table.innerHTML='';
    for(let i= (pageNum-1)*maxPage; i<length ; i++){
        table.innerHTML+=`
            <tr class="list-id-${dataUser.income[i].id}">
                <td>${dataUser.income[i].id}</td>
                <td>${dataUser.income[i].type}</td>
                <td>${dataUser.income[i].money} VND</td>
                <td>${dataUser.income[i].date}</td>
                <td>${dataUser.income[i].note}</td>
                <td>${dataUser.income[i].time}</td>
                <td style="border:none;" class="flex between">
                <div onclick="deleteListincome(${dataUser.income[i].id})" class="delete">Xóa</div>
                <div onclick="editListIncome(${dataUser.income[i].id})" class="edit">Sửa</div></td>
            </tr>`
        indexofIn.push(dataUser.income[i].id);
    }


    let editIncome=document.querySelectorAll('#income table tr  .edit');
    for(let i=0; i<editIncome.length; i++){
        editIncome[i].onclick= function(){
            tableIncome.classList.remove('hide');
            let saveEdit= document.getElementById('saveIncome');
            saveEdit.onclick=()=>{
                let getData=document.querySelectorAll('.inputTable form input');
                let data1={
                    type:getData[0].value,
                    money: getData[1].value,
                    date: getData[3].value,
                    note: getData[2].value,
                    time: getData[4].value
                }
                editListIncome(indexofIn[i], data1);
            }   
        }
    }           
}
    
function app(){
    add.addEventListener('click',()=>{
        tableIncome.classList.remove('hide')
    })
    exit1.addEventListener('click',()=>{
        tableIncome.classList.add('hide');
    })
    exit2.addEventListener('click',()=>{
        tableIncome.classList.add('hide');
    })    

    createHandleIncome();
    display(dataUser);
    searchIn()
    let colorEven = document.querySelectorAll('#main table tr:nth-child(even)');
    for(let color of colorEven){
        color.style.backgroundColor='lightgrey';
    }
     
}


    