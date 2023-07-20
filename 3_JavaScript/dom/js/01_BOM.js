/*open*/
function btn1() {
    // window.open("https://naver.com");
    window.open("https://naver.com","네이버","width = 500, height=500, resizable=no, location=no, menubar=no,scrollbars=no, status=no, toolbar=no");
}

function btn2() {
    let newWindow = open();
    newWindow.alert('3초 후에 페이지 종료')   // 오픈 했을 때 새로운 브라우저 뜨면 알림 주는 것
    setTimeout(() => {  
        newWindow.close();
    }, 3000);  // 3000 = 3초
}

function btn3() {
    let second = 0;
    setInterval(() => {
        console.log(`${++second}초!`)
    }, 1000);
}

function btn4() {
    for(const key in location) {
        console.log(`key: ${key}, value: ${location[key]}`);
    }
}

function btn5() {
    for(const key in navigator) {
        console.log(`key: ${key}, value: ${navigator[key]}`);
    }
}

function btn6() {
    for(const key in screen) {
        console.log(`key: ${key}, value: ${screen[key]}`);
    }
}