// 1. 이벤트 연결
// 1) on, off
// $('#area1').on('mouseenter', function(event){
//     // 마우스가 올라갔을 때 배경색상 beige, 텍스트는 마우스가 올라감
//     $(event.target).css('background-color','beige').text('마우스가 올라감');
// });
// $('#area1').on('mouseleave', function(event){
//     $(event.target).css('background-color','hotpink').text('마우스가 내려감');
// });

// on으로 하나로 합치기!

$('#area1').on('mouseenter mouseleave', function(event){    //on의 특징 두 가지를 작성할 수 있음
    console.log(event.type);
    if(event.type === 'mouseenter'){
        $(event.target).css('background-color','beige').text('마우스가 올라감');
    } else if(event.type === 'mouseleave'){
        $(event.target).css('background-color','hotpink').text('마우스가 내려감');
    }
});



/*
$('#area1').on('click', function(event){
    // 배경색은 white, 텍스트는 ''
    $(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave');  //'#area1'이것도 되고,, 이벤트 삭제하는 off
});
*/

// on으로 세 가지를 하나로 합치기!
$('#area1').on({
    mouseenter:function(event){
        $(event.target).css('background-color','beige').text('마우스가 올라감');
    },
    mouseleave:function(event){
        $(event.target).css('background-color','hotpink').text('마우스가 내려감');
    },
    click:function(event){
        $(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave');
    }
});

// 2) one
$('#area2').one('click', function() {
    alert('실행');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
$('#textarea1').keydown(function(event){
    console.log(`keydown / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
});
// keypress: 글자가 입력될 때
$('#textarea1').keypress(function(event){
    console.log(`keypress / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
});
// keyup: 키보드가 떼어질 때
$('#textarea1').keyup(function(event){
    console.log(`keyup / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
});

// -> 위 3가지를 on 메소드로 한 번에
$('#textarea1').on({
    keydown:function(event){
        console.log(`keydown / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
    },
    keypress:function(event){
        console.log(`keypress / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
    },
    keyup:function(event){
        console.log(`keyup / event.key : ${event.key}', event.keyCode :  ${event.keyCode}`)
    },
});

// substr
// console.log("Hello~".substring(0,1));
$('#textarea2').on('keyup', function(event) {
        const currentLength =$(event.target).val().length;
        $('#counter').text(currentLength);

        const maxLength = parseInt($('#maxLength').text());
        console.log(typeof parseInt(maxLength));

        if(currentLength > maxLength) {
            // 글자 수 제한! -> substring
            $(event.target).val($(event.target).val().substring(0, maxLength)); // value값 안에 50글자를 넣겠다
        } else {    // currentLength <= maxLength
            $('#counter').text(currentLength);

        }
       
        // console.log($(event.target).val());   //-> #textarea2를 가리킴
        
});
