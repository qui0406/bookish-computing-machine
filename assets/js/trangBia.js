const changeImgs= document.getElementById('img');

let index=0;
changeImg = function() {
    var imgs= ["./assets/media/imgs/qlct1.png", "./assets/media/imgs/qlct2.jpg", "./assets/media/imgs/qlct3.png", "./assets/media/imgs/qlct4.jpg"];
    changeImgs.src=imgs[index];
    index++;
    if(index==3) {
        index=0;
    }
}
setInterval(changeImg, 3000);
