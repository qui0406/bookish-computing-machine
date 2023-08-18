

let tmpEx2;
let indexofEx=[];

// chi tieu
const addExpense=document.querySelector('#main aside li:nth-child(3) ul.submenu li:first-child');
const addExpense2=document.querySelector('#expense .newExpense >input');
const inputTableExpense=document.querySelector('#expense .tableExpense .inputTable');

const tableExpense=document.querySelector('#expense .tableExpense');
const exitExpense1=document.querySelector('.tableExpense .inputTable > a');
const exitExpense2=document.querySelector('#expense .tableExpense form input#closeExpense');


//

const apiExpense=`http://localhost:3000/users/${infoUser.id}`;
function createExpense(data1, callback){
    fetch(apiExpense,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let id;
        if(data.expense.length===0){
            id=1;
        }
        else{
            id=data.expense[data.expense.length-1].id+1;
        }
        data1.id=id;
        console.log(id);
        data.expense.push(data1);
                fetch(apiExpense,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),

                })
                .then(res=>res.json())
            }
        
   )
}

function createHandleExpense(){
    let inforExpenses=document.querySelectorAll('.tableExpense .inputTable input');
    let selectExpense=document.querySelector('.tableExpense .inputTable select');
    let saveExpense=document.getElementById('saveExpense');
    let otherEx=document.getElementById('otherExpense');
   
    selectExpense.onchange=function(){
        tmpEx=selectExpense.value;
        if(tmpEx ==='other'){
            otherEx.style.display='block';            
        }
        else{
            otherEx.style.display='none';
        }
    }
    otherEx.oninput =()=>{
        if (selectExpense.value == "other") {
            tmpEx = otherEx.value
        }
    }
   
    saveExpense.onclick=()=>{
        
        let expense={
            type: tmpEx || "Ăn uống",
            money: inforExpenses[1].value,
            date: inforExpenses[2].value,
            note: inforExpenses[3].value,
            time: inforExpenses[4].value
        }
        if(expense.type===''){
            inforExpenses[0].classList.add('err');
            return;
        }
        else{
            inforExpenses[0].classList.remove('err');
        }
        if(expense.money===''){
            inforExpenses[1].classList.add('err');
            return;
        }
        else{
            inforExpenses[1].classList.remove('err');
        }
        if(expense.date===''){
            inforExpenses[2].classList.add('err');
            return;
        }
        else{
            inforExpenses[2].classList.remove('err');
        }
        if(expense.time===''){
            inforExpenses[4].classList.add('err');
            return;
        }
        else{
            inforExpenses[4].classList.remove('err');
        }
        createExpense(expense);
    }
}


let tableEx=document.querySelector('#expense table tbody');


function deleteListExpense(id){
   fetch(apiExpense,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let expense=data.expense;
        for(let i=0; i<expense.length; i++){
            if(expense[i].id===id){
                data.expense.splice(i, 1);
                fetch(apiExpense,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),

                })
                .then(res=>res.json())
                break;
            }
        }
   })
}

//edit

function editListExpense(id, data1, callback){
    fetch(apiExpense,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
   })
   .then(res=>res.json())
   .then(data=>{
        let expense=data.expense;
      
        for(let i=0; i<expense.length; i++){
            if(expense[i].id===id){
                let id=expense[i].id;
                data1.id=id;
                data.expense[i]=data1;
                fetch(apiExpense,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),

                })
                .then(res=>res.json())
                break;
            }
        }
   })
}






// ket qua
var sumValueExpense=0;
let sumTotalExpense=document.querySelector('#expense table tfoot th:nth-child(2)');


// inner dasdboard


function app(){
    addExpense.addEventListener('click',()=>{
        tableExpense.classList.remove('hide')
    });
    addExpense2.addEventListener('click',()=>{
        tableExpense.classList.remove('hide')
    });
    
    exitExpense1.addEventListener('click',()=>{
        tableExpense.classList.add('hide');
    })
    exitExpense2.addEventListener('click',()=>{
        tableExpense.classList.add('hide');
    })
    createHandleExpense();
    fetch(apiExpense).then((res)=>res.json()).then((data)=>{

        let length=data.expense.length;
     
        for(let i=0; i<length; i++){
             tableEx.innerHTML+=`
             <tr class="list-id-${data.expense[i].id}">
                 <td>${data.expense[i].id}</td>
                 <td>${data.expense[i].type}</td>
                 <td>${data.expense[i].money} VND</td>
                 <td>${data.expense[i].date}</td>
                 <td>${data.expense[i].note}</td>
                 <td>${data.expense[i].time}</td>
                 <td style="border:none;" class="flex between">
                 <div onclick="deleteListExpense(${data.expense[i].id})" class="delete">
                     Xóa
                 </div>
                 <div onclick="editListExpense(${data.expense[i].id})" class="edit">
                     Sửa
                 </div>
             </td>
             </tr>
         `
         indexofEx.push(data.expense[i].id);
        }
        let colorEven = document.querySelectorAll('#main table tr:nth-child(even)');
        for(let color of colorEven){
             color.style.backgroundColor='lightgrey';
        }
        let editExpense=document.querySelectorAll('#expense table tr td .edit');
        for(let i=0; i<editExpense.length; i++){
             editExpense[i].onclick= function(){
                 tableExpense.classList.remove('hide');
                 let saveEdit= document.getElementById('saveExpense');
     
                 let selectExpense=document.querySelector('.tableExpense .inputTable select');
                 let otherEx=document.getElementById('otherExpense');
                 let tmpExpense;
                 selectExpense.onchange=function(){
                     tmpExpense=selectExpense.value;
                     if(tmpExpense ==='other'){
                         otherEx.style.display='block';            
                     }
                     else{
                         otherEx.style.display='none';
                     }
                 }
                 otherEx.oninput =()=>{
                     if (selectExpense.value == "other") {
                         tmpExpense = otherEx.value
                     }
                 }
     
                 saveEdit.onclick=()=>{
                     let getData=document.querySelectorAll('.inputTable form input');
                     let data1={
                         type: tmpExpense || "Ăn uống",
                         money: getData[1].value,
                         date: getData[2].value,
                         note: getData[3].value,
                         time: getData[4].value
                     }
                 console.log(data1)
               
                 editListExpense(indexofEx[i], data1);
                 console.log(this);
                 }
                 
             }
         }
         
     })

     fetch(apiExpense).then((res)=>res.json()).then((data)=>{
        for(let i=0; i<data.expense.length; i++){
             sumValueExpense+=parseFloat(data.expense[i].money);
        }
        sumTotalExpense.innerText=`${sumValueExpense} VND`
        const sumMoneyExpense=document.querySelector('#expense h2 sub');
        sumMoneyExpense.innerHTML=`(Tổng tiền: <span style="color:red";>${Intl.NumberFormat().format(sumValueExpense)} VND</span>)`
     })


     let menuAsideExpense= document.querySelectorAll('aside ul.menu > li');
menuAsideExpense[0].onclick=()=>{
    window.location.href="./dasdboard.html";
}
menuAsideExpense[1].onclick=()=>{
    window.location.href="./income.html";
}
// menuAside[2].onclick=()=>{
//     window.location.href="./expense.html";
// }
let seeExpenseExpense=document.querySelector('aside ul.menu > li ul.submenu li:last-child');
let addExpense1=document.querySelector('aside ul.menu > li ul.submenu li:first-child');

seeExpenseExpense.onclick=()=>{
    window.location.href="./expense.html";
}
menuAsideExpense[4].onclick=()=>{
    window.location.href="./graph.html";
}



}