let sumEatDay=0;
let sumEntertaimentDay=0;
let sumStudyDay=0;
let sumBuyDay=0;
let sumHealthDay=0;
let sumLivingDay=0;
let sumTravelDay=0;
let sumOtherDay=0;
let sumofDay=0;


let sumEatWeek=0;
let sumEntertaimentWeek=0;
let sumStudyWeek=0;
let sumBuyWeek=0;
let sumHealthWeek=0;
let sumLivingWeek=0;
let sumTravelWeek=0;
let sumOtherWeek=0;
let sumofWeek=0;

let sumEatMonth=0;
let sumEntertaimentMonth=0;
let sumStudyMonth=0;
let sumBuyMonth=0;
let sumHealthMonth=0;
let sumLivingMonth=0;
let sumTravelMonth=0;
let sumOtherMonth=0;
let sumofMonth=0;

let arrDay=[];
let percentExpenseDay=[];
let arrWeek=[];
let percentExpenseWeek=[];
let arrMonth=[];
let percentExpenseMonth=[];


function graphDay(){ 
    let data=dataUser.expense;     
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
    let sumMilisecondInMonth=minisecondWeeks+sumMilisecondInDay;

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
    percentExpenseDay.push((sumEatDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumEntertaimentDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumStudyDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumBuyDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumHealthDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumLivingDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumTravelDay*100/sumofDay).toFixed(2));
    percentExpenseDay.push((sumOtherDay*100/sumofDay).toFixed(2));
    
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
        datasets: [{
          label: 'Biểu đồ chi tiêu trong ngày',
          data: arrDay,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(183, 29, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgba(183, 29, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctxDay=document.getElementById('myChartDay');
    new Chart(ctxDay, {
      type: 'doughnut',
      data: {
        labels:['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
        datasets: [{
          label: 'Biểu đồ chi tiêu trong ngày',
          data: percentExpenseDay,
          backgroundColor: [
            '#F9F871',
            '#FFBB47',
            '#FF764D',
            '#F8256B',
            '#BE008F',
            '#4D16AB',
            '#008C6E',
            '#A9D67D'
          ],
          hoverOffset: 4 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}


function graphWeek(){
  let data=dataUser.expense;      
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
    percentExpenseWeek.push((sumEatWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumEntertaimentWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumStudyWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumBuyWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumHealthWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumLivingWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumTravelWeek*100/sumofWeek).toFixed(2));
    percentExpenseWeek.push((sumOtherWeek*100/sumofWeek).toFixed(2));
    

    const ctx1=document.getElementById('myChart1');
    let config1= new Chart(ctx1, {
      type: 'bar',
      data: {
      labels: ['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
      datasets: [{
      label: 'Biểu đồ chi tiêu trong tuần',
      data: arrWeek,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(183, 29, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgba(183, 29, 207, 0.2)'
      ],
      borderWidth: 1
    }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    });


    const ctx11=document.getElementById('myChart11');
    new Chart(ctx11, {
      type: 'doughnut',
      data: {
        labels:['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
        datasets: [{
          label: 'Biểu đồ chi tiêu trong tuần',
          data: percentExpenseWeek,
          backgroundColor: [
            '#F9F871',
            '#FFBB47',
            '#FF764D',
            '#F8256B',
            '#BE008F',
            '#4D16AB',
            '#008C6E',
            '#A9D67D'
          ],
          hoverOffset: 4 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
};


function graphMonth(){ 
  let data=dataUser.expense;     
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
    let sumMilisecondInMonth=minisecondWeeks+sumMilisecondInDay;

    for(let i=0; i<data.length; i++){ 
      let year=parseFloat(data[i].date.slice(0, 4));
      let month=parseFloat(data[i].date.slice(5, 7)-1);
      let date=parseFloat(data[i].date.slice(8, 10));
      let hour=parseFloat(data[i].time.slice(0,2));
      let minute=parseFloat(data[i].time.slice(3, 5));
      let s=new Date(year, month, date, hour, minute);
      let currrentTimeInput=s.getTime();
     

  
      let limestoneTimeMonth=minisecFrom1970-sumMilisecondInMonth;
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
    percentExpenseMonth.push((sumEatMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumEntertaimentMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumStudyMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumBuyMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumHealthMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumLivingMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumTravelMonth*100/sumofMonth).toFixed(2));
    percentExpenseMonth.push((sumOtherMonth*100/sumofMonth).toFixed(2));
    

    const ctx2=document.getElementById('myChart2');
    let config=new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
        datasets: [{
          label: 'Biểu đồ chi tiêu trong tháng',
          data: arrMonth,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(183, 29, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgba(183, 29, 207, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx21=document.getElementById('myChart21');
    new Chart(ctx21, {
      type: 'doughnut',
      data: {
        labels:['Ăn uống', 'Giải trí', 'Học tập', 'Mua sắm', 'Sức khỏe', 'Sinh hoạt', 'Đi lại', 'Khác'],
        datasets: [{
          label: 'Biểu đồ chi tiêu trong tháng',
          data: percentExpenseMonth,
          backgroundColor: [
             '#F9F871',
            '#FFBB47',
            '#FF764D',
            '#F8256B',
            '#BE008F',
            '#4D16AB',
            '#008C6E',
            '#A9D67D'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
};

function app(){
  graphDay();
  graphWeek();
  graphMonth();
}

let displayChartDay=document.querySelector('.day');
let displayChartWeek=document.querySelector('.week');
let displayChartMonth=document.querySelector('.month');

function choseChart(){
  let chose=document.getElementById('chose').value;
  if(chose==='day'){
    displayChartDay.classList.remove('hide');
    displayChartWeek.classList.add('hide');
    displayChartMonth.classList.add('hide')
  }
  else if(chose==='week'){
    displayChartWeek.classList.remove('hide');
    displayChartDay.classList.add('hide');
    displayChartMonth.classList.add('hide')
  }
  else if(chose==='month'){
    displayChartDay.classList.add('hide');
    displayChartWeek.classList.add('hide');
    displayChartMonth.classList.remove('hide')
  }
}

let menuAsideChart= document.querySelectorAll('aside ul.menu > li');
menuAsideChart[0].onclick=()=>{
    window.location.href="./dasdboard.html";
}
menuAsideChart[1].onclick=()=>{
    window.location.href="./income.html";
}
let seeExpense=document.querySelector('aside ul.menu > li ul.submenu li:last-child');
let addExpense=document.querySelector('aside ul.menu > li ul.submenu li:first-child');

seeExpense.onclick=()=>{
    window.location.href="./expense.html";
}
menuAsideChart[2].onclick=()=>{
  window.location.href="./expense.html";
}
menuAsideChart[4].onclick=()=>{
    window.location.href="./graph.html";
}
