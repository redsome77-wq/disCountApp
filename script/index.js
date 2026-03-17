//1.(상품가격) 입력
//2.(할인율 보기) 클릭
//3. 1의 가격이 할인율 계산함수로 계산
//4. 3 결과가 (li) 출력

//DOM 변수
const productPrice = document.querySelector('#money');
const showBtn = document.querySelector('#result');
const resultSlot = document.querySelectorAll ('.discount > li');
const resetBtn = document.querySelectorAll ('.reset');

//console 확인
console.log(productPrice, showBtn, resultSlot, resetBtn);

//(productPrice) 변수 초기값 100 (대입)
//<input value="100"> value=(속성)
//객체.함수();
//객체.속성;

productPrice.value=''; //초기값 대입

//버튼 이벤트(버튼에 동작 삽입->함수 실행시키는 목적)
//객체.addEventListener('이벤트', 실행함수);

showBtn.addEventListener('click', function(){
    //'이벤트' 했을때 실행하고 싶은 명령
    //alert('값을 입력하고 다시 버튼을 누르세요.');
    console.log(disCountFunc(productPrice.value));
    resultSlot[0].textContent = `입력가 : ${productPrice.value}원`;
    disCountFunc(productPrice.value);
});


resetBtn.addEventListener('click', resetAll);
function resetAll(){
    productPrice.value =''; // 0 또는 빈문자열 '' 사용
    resultSlot[0].textContent = '';
    resultSlot[1].textContent = '';
    resultSlot[2].textContent = '';
    resultSlot[3].textContent = '';
    resultSlot[4].textContent = '';
    resultSlot[5].textContent = '';
    resultSlot[6].textContent = '';
}



//console.log(disCountFunc(productPrice.value));

//초기값 또는 입력값에 따라 할인율 계산하는 함수
function disCountFunc(productPrice){
    resultSlot[1].textContent = `5% 할인율 : ${productPrice * 0.95}`; //n번째 li에 해당 할인율 대입
    resultSlot[2].textContent = `10% 할인율 : ${productPrice * 0.9}`;
    resultSlot[3].textContent = `20% 할인율 : ${productPrice * 0.8}`;
    //return;
    resultSlot[4].textContent = `30% 할인율 : ${productPrice * 0.7}`;
    resultSlot[5].textContent = `40% 할인율 : ${productPrice * 0.6}`;
    resultSlot[6].textContent = `50% 할인율 : ${productPrice * 0.5}`;
    return; //위에서 쌓은 값을 함수호출시 내보냄. 함수 종료역할. (값 다 썼어도 값 중간에 return 사용시 함수값 끊김)
}






disCountFunc(productPrice.value);