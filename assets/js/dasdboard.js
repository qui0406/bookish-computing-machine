let header=document.querySelector('nav');
header.scrollIntoView(true);

let moneyExpenseCurrent=0;

const target= document.querySelector('#target');
const accept =document.querySelector('main .target #accept');
const tmpBox=document.querySelector('main .target #box_temp');
const choseCoin= document.querySelector('main .target #chose')
// muc  tieu tiet kiem thang nay
accept.addEventListener('click',()=>{
    if(choseCoin.value=='VND'){
        tmpBox.innerHTML=`<h2>${Intl.NumberFormat().format(target.value)}VND</h2>`;
    }
    else{
      tmpBox.innerHTML=`<h2>${0} VND</h2>`;
    }
    target.style.display='none';
    accept.style.display='none';
    target.style.color='black';
    choseCoin.style.display='none'
})



let changeTarget=document.querySelector('main .target .icon_main');
changeTarget.addEventListener('click', ()=>{
    target.style.display='flex';
    accept.style.display='inline-block';
    tmpBox.innerHTML="";
    choseCoin.style.display='flex'; 
})

let menuAsideDasdboard= document.querySelectorAll('aside ul.menu > li');
menuAsideDasdboard[0].onclick=()=>{
    window.location.href="./dasdboard.html";
}
menuAsideDasdboard[1].onclick=()=>{
    window.location.href="./income.html";
}
// menuAside[2].onclick=()=>{
//     window.location.href="./expense.html";
// }
let seeExpenseDasdboard=document.querySelector('aside ul.menu > li ul.submenu li:last-child');
let addExpense1=document.querySelector('aside ul.menu > li ul.submenu li:first-child');

seeExpenseDasdboard.onclick=()=>{
    window.location.href="./expense.html";
}
menuAsideDasdboard[4].onclick=()=>{
    window.location.href="./graph.html";
}


function sumExpenseDay(){
    let sumEatDay=0;
    let sumEntertaimentDay=0;
    let sumStudyDay=0;
    let sumBuyDay=0;
    let sumHealthDay=0;
    let sumLivingDay=0;
    let sumTravelDay=0;
    let sumOtherDay=0;
    let sumofDay=0;
    let arrDay=[];

    let data=dataUser.expense 
    
    
    let d= new Date();
    let minisecFrom1970=d.getTime();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let thu=d.getDay();
    let miliseconds=d.getMilliseconds();
    let seconds=d.getSeconds();
    let manyDate=d.getDate();

    // bat dau tu thu 2
    let addMilisecondInWeek=(thu-1)*86400000;
    let minisecondWeeks=Math.floor(manyDate/7)*604800000;

    let sumMilisecondInDay=hours*60*60*1000+ minutes*60*1000 + seconds*1000+ miliseconds;

    for(let i=0; i<data.length; i++){ 
      let year=parseFloat(data[i].date.slice(0, 4));
      let month=parseFloat(data[i].date.slice(5, 7)-1);
      let date=parseFloat(data[i].date.slice(8, 10));
      let hour=parseFloat(data[i].time.slice(0,2));
      let minute=parseFloat(data[i].time.slice(3, 5));
      let s=new Date(year, month, date, hour, minute);
      let currrentTimeInput=s.getTime();
     
      // Day
      let limestoneTimeDay=minisecFrom1970-sumMilisecondInDay;
      if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput< limestoneTimeDay +86400000 && data[i].type=='Ăn uống'){
        sumEatDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Giải trí'){
        sumEntertaimentDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Học tập'){
        sumStudyDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Mua sắm'){
        sumBuyDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Sức khỏe'){
        sumHealthDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Sinh hoạt'){
        sumLivingDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type=='Di chuyển'){
        sumTravelDay+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeDay && currrentTimeInput<limestoneTimeDay+ 86400000 && data[i].type!='Học tập' && data[i].type!='Ăn uống' && data[i].type!='Giải trí' && data[i].type!='Mua sắm' && data[i].type!='Sức khỏe' && data[i].type!='Sinh hoạt' && data[i].type!='Di chuyển'){
        sumOtherDay+=parseFloat(data[i].money);
      }
      //Week

    }
    arrDay.push(sumEatDay);
    arrDay.push(sumEntertaimentDay);
    arrDay.push(sumStudyDay);
    arrDay.push(sumBuyDay);
    arrDay.push(sumHealthDay);
    arrDay.push(sumLivingDay);
    arrDay.push(sumTravelDay);
    arrDay.push(sumOtherDay);
    for(let a of arrDay){
      sumofDay+=a;
    }
    let expenseSumDay=document.querySelector('main .dasdboard .box_expense:first-child h3:last-child');
    expenseSumDay.innerHTML=`${Intl.NumberFormat().format(sumofDay)} VND` ;
    }

function sumExpenseWeek(){
    let sumEatWeek=0;
    let sumEntertaimentWeek=0;
    let sumStudyWeek=0;
    let sumBuyWeek=0;
    let sumHealthWeek=0;
    let sumLivingWeek=0;
    let sumTravelWeek=0;
    let sumOtherWeek=0;
    let sumofWeek=0;
    let arrWeek=[];
         
        let data=dataUser.expense
    let d= new Date();
    let minisecFrom1970=d.getTime();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let thu=d.getDay();
    let miliseconds=d.getMilliseconds();
    let seconds=d.getSeconds();
    let manyDate=d.getDate();

    // bat dau tu thu 2
    let addMilisecondInWeek=(thu-1)*86400000;
    let minisecondWeeks=Math.floor(manyDate/7)*604800000;

    let sumMilisecondInDay=hours*60*60*1000+ minutes*60*1000 + seconds*1000+ miliseconds;

    let sumMilisecondInWeek=addMilisecondInWeek+sumMilisecondInDay;

    for(let i=0; i<data.length; i++){ 
      let year=parseFloat(data[i].date.slice(0, 4));
      let month=parseFloat(data[i].date.slice(5, 7)-1);
      let date=parseFloat(data[i].date.slice(8, 10));
      let hour=parseFloat(data[i].time.slice(0,2));
      let minute=parseFloat(data[i].time.slice(3, 5));
      let s=new Date(year, month, date, hour, minute);
      let currrentTimeInput=s.getTime();

      let limestoneTimeWeek=minisecFrom1970-sumMilisecondInWeek;
      if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput< limestoneTimeWeek + 604800000 && data[i].type=='Ăn uống'){
        sumEatWeek+=parseFloat(data[i].money);
        console.log("heloo000")
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Giải trí'){
        sumEntertaimentWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Học tập'){
        sumStudyWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Mua sắm'){
        sumBuyWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Sức khỏe'){
        sumHealthWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Sinh hoạt'){
        sumLivingWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type=='Di chuyển'){
        sumTravelWeek+=parseFloat(data[i].money);
      }
      else if(currrentTimeInput>=limestoneTimeWeek && currrentTimeInput<limestoneTimeWeek+  604800000 && data[i].type!='Học tập' && data[i].type!='Ăn uống' && data[i].type!='Giải trí' && data[i].type!='Mua sắm' && data[i].type!='Sức khỏe' && data[i].type!='Sinh hoạt' && data[i].type!='Di chuyển'){
        sumOtherWeek+=parseFloat(data[i].money);
      }
    }
    
    arrWeek.push(sumEatWeek);
    arrWeek.push(sumEntertaimentWeek);
    arrWeek.push(sumStudyWeek);
    arrWeek.push(sumBuyWeek);
    arrWeek.push(sumHealthWeek);
    arrWeek.push(sumLivingWeek);
    arrWeek.push(sumTravelWeek);
    arrWeek.push(sumOtherWeek);
    for(let a of arrWeek){
      sumofWeek+=a;
    }
    let expenseSumWeek=document.querySelector('main .dasdboard .box_expense:nth-child(2) h3:last-child');
    expenseSumWeek.innerHTML=`${Intl.NumberFormat().format(sumofWeek)} VND` ;
}


function sumExpenseMonth(){
  let sumEatMonth=0;
  let sumEntertaimentMonth=0;
  let sumStudyMonth=0;
  let sumBuyMonth=0;
  let sumHealthMonth=0;
  let sumLivingMonth=0;
  let sumTravelMonth=0;
  let sumOtherMonth=0;
  let sumofMonth=0;
  let arrMonth=[];  
         
      let data=dataUser.expense;  
      let d= new Date();
      let minisecFrom1970=d.getTime();
      let hours=d.getHours();
      let minutes=d.getMinutes();
      let thu=d.getDay();
      let miliseconds=d.getMilliseconds();
      let seconds=d.getSeconds();
      let manyDate=d.getDate();
      let addMilisecondInWeek=(thu-1)*86400000;
      let minisecondWeeks=Math.floor(manyDate/7)*604800000;
      let sumMilisecondInDay=hours*60*60*1000+ minutes*60*1000 + seconds*1000+ miliseconds;
      let sumMilisecondInWeek=addMilisecondInWeek+sumMilisecondInDay;
      let sumMilisecondInMonth=minisecondWeeks+sumMilisecondInDay;
      for(let i=0; i<data.length; i++){ 
        let year=parseFloat(data[i].date.slice(0, 4));
        let month=parseFloat(data[i].date.slice(5, 7)-1);
        let date=parseFloat(data[i].date.slice(8, 10));
        let hour=parseFloat(data[i].time.slice(0,2));
        let minute=parseFloat(data[i].time.slice(3, 5));
        let s=new Date(year, month, date, hour, minute);
        let currrentTimeInput=s.getTime();
  
        
        let
         limestoneTimeMonth=minisecFrom1970-sumMilisecondInMonth;
        if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput< limestoneTimeMonth +86400000*30 && data[i].type=='Ăn uống'){
          sumEatMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Giải trí'){
          sumEntertaimentMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Học tập'){
          sumStudyMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Mua sắm'){
          sumBuyMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Sức khỏe'){
          sumHealthMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Sinh hoạt'){
          sumLivingMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type=='Di chuyển'){
          sumTravelMonth+=parseFloat(data[i].money);
        }
        else if(currrentTimeInput>=limestoneTimeMonth && currrentTimeInput<limestoneTimeMonth+ 86400000*30 && data[i].type!='Học tập' && data[i].type!='Ăn uống' && data[i].type!='Giải trí' && data[i].type!='Mua sắm' && data[i].type!='Sức khỏe' && data[i].type!='Sinh hoạt' && data[i].type!='Di chuyển'){
          sumOtherMonth+=parseFloat(data[i].money);
        } 
      }
      arrMonth.push(sumEatMonth);
      arrMonth.push(sumEntertaimentMonth);
      arrMonth.push(sumStudyMonth);
      arrMonth.push(sumBuyMonth);
      arrMonth.push(sumHealthMonth);
      arrMonth.push(sumLivingMonth);
      arrMonth.push(sumTravelMonth);
      arrMonth.push(sumOtherMonth);
      for(let a of arrMonth){
        sumofMonth+=a;
      }
      let expenseSumMonth=document.querySelector('main .dasdboard .box_expense:last-child h3:last-child');
      expenseSumMonth.innerHTML=`${Intl.NumberFormat().format(sumofMonth)} VND` ;
      
    }

function sumIncomeMonth(){
    let sumofIncome=0;
    let data=dataUser.income;
    let lengthlist=data.length;
    for(let i=0; i<lengthlist; i++){
      sumofIncome+=parseFloat(data[i].money);
    }
    let sumincomeOfCurrent=document.querySelector('.incomeMoney h2:last-child');
    sumincomeOfCurrent.innerHTML=`${Intl.NumberFormat().format(sumofIncome)} VND`   
}

function app(){
    sumExpenseDay();
    sumExpenseWeek();
    sumExpenseMonth();
    sumIncomeMonth();
}
