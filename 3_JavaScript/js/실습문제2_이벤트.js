let maxScrollValue;
const progressBar = document.querySelector('.progress-bar'); // 변경해야될 값 선택

function resizeHandler(){
    maxScrollValue = document.body.offsetHeight - window.innerHeight;   
    //전체 스크롤 할 수 있는 범위 계산 = 바디 전체 높이 - 윈도우 현재 창의 높이
}

window.addEventListener('scroll',function(){
    console.log(progressBar);
    progressBar.style.width = (window.scrollY / maxScrollValue)*100 + '%';
    console.log((window.scrollY / maxScrollValue)*100);
    // console.log(window.pageXOffset);    //deprecated
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);
    // console.log(window.innerHeight);
});

window.addEventListener('resize',resizeHandler);
resizeHandler();