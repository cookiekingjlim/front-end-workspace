// window.addEventListener('DOMContentLoaded', function(){
// const h1 = document.querySelector('h1');
// console.log(h1);
// });

const h1 = document.querySelector('h1');

// h1.addEventListener('click',function(){
//     h1.style.backgroundColor="skyblue";
// });

h1.addEventListener('mouseenter',function(){
    h1.style.backgroundColor="skyblue";
});

/*css 선택자 다 들어올 수 있음*/ 
// 첫 번째 방식
// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

/*display와 visibility의 차이 영역 유무*/ 
// imgList[0].addEventListener('click', function(){
//     imgList[0].style.display = 'none';  
// });
// imgList[1].addEventListener('click', function(){
//     imgList[1].style.visibility = 'hidden';  
// });
// imgList[2].addEventListener('click', function(){
//     imgList[2].style.visibility = 'hidden';  
// });
// imgList[3].addEventListener('click', function(){
//     imgList[3].style.visibility = 'hidden';  
// });
// imgList[4].addEventListener('click', function(){
//     imgList[4].style.visibility = 'hidden';  
// });

// 1-1방식이면 img1.addEventListener('click',function(){
//    img1.style.display = 'none';
// })

// 두 번째 방식
// const imgList = document.querySelectorAll('.container img'); 
// function removeHandler() {
//     this.style.display = 'none'; 
// }
// for(let i = 0; i<imgList.length; i++){
//     imgList[i].addEventListener('click', removeHandler);
// }

// 세 번째 방식
const container = document.querySelector('.container');

function removeHandler(event){   // 이벤트 객체
    console.log(event.currentTarget);   //this랑 같음
    if(event.target !== event.currentTarget){
       event.target.style.display = 'none'; 
    }
   
}

container.addEventListener('click', removeHandler);






//내가 한 거...
// document.querySelector(".container img:nth-child(1)").addEventListener('click',function(){
//     const div = document.querySelector(".container img:nth-child(1)");
//     const check = div.style.display = "none";
// })