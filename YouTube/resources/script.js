const asideIcon = document.querySelector("#aside-icon");

const main = document.querySelector("main");

asideIcon.addEventListener('click',function(){
    // 스타일이 변경되는 부분이 필요!
    main.classList.toggle("aside-change");
});