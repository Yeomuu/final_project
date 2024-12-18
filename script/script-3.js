const detailImg = document.querySelector('#sideImage');
const imgList = document.querySelector('.imgList');
const images = document.querySelectorAll('.imgList div');
const cartBtn = document.querySelector('.btnBox .cart');
const popUp = document.querySelector('.pop-up');
const popUpClose = document.querySelector('.pop-up .close');

let nowImg = 1;
let interval;
let timer;

autoChange();

// 상세페이지 이미지 위 마우스 커서 위치에 따른 연기 생성
detailImg.addEventListener('mousemove', function(e){
  const smoke = document.createElement('div');
  detailImg.appendChild(smoke);

  // 연기 생성 위치(마우스 커서 기준)
  const x = e.offsetX + (Math.random() * 20-10);
  const y = e.offsetY + (Math.random() * 20-10);

  // 연기 클래스 추가
  smoke.className = 'smoke';
  smoke.style.left = `${x}px`;
  smoke.style.top = `${y}px`;

  // 연기 생성
  setTimeout(() => {
    smoke.style.transform = 'scale(8)';
    smoke.style.opacity = '0';
    smoke.style.filter = 'blur(5px)';
  }, 10);

  // 연기 삭제
  setTimeout(() => {
    smoke.remove();
  }, 1000);
});

// 이미지 변경 (현재 이미지 위치 점 색상 변경)
images.forEach((item, index) => {
  item.addEventListener('click', function(){
    stopChange();
    detailImg.style.backgroundImage = `url(images/detail0${index + 1}.jpg)`;
    
    images.forEach(i => i.classList.remove('on'));
    item.classList.add('on');
  });
});


// 이미지 자동변경
function autoChange(){
  interval = setInterval(function() {
  detailImg.style.backgroundImage = `url(images/detail0${nowImg}.jpg)`;
  nowImg++;
  
  if(nowImg >= 4){
    nowImg = 1;
  }
}, 3000);
}

// 이미지 임의 변경(점 클릭) 시 자동변경 멈춤
function stopChange(){
  clearInterval(interval);

  if(timer) clearTimeout(timer);

  // 자동변경 멈춘뒤 60초 동안 이미지 임의 변경 없다면 자동변경 실행
  timer = setTimeout(() => {
    autoChange();
  }, 60000);
};

let count = 0;

// 장바구니 버튼 클릭 시 팝업 등장
cartBtn.addEventListener('click', function(){
    count++;

    if(count > 1){
        alert('이미 장바구니에 담긴 상품이에요!');
    } else{
    popUp.style.display = 'flex';
    }
});

// 팝업창 '계속 구경하기'버튼 클릭 시 팝업 닫힘
popUpClose.addEventListener('click', function(){
    popUp.style.display = '';
});